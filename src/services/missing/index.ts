import {
  collection,
  query,
  where,
  getDocs,
  limit,
  startAfter,
  doc,
  getDoc,
} from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../config/firebase';
import { IAffected } from '../../types/interfaces';

interface IMissingQuery {
  city: string;
  person: string;
  province: string;
  searchQuery: string;
  pageSize: number;
  lastVisibleId?: null | string;
}

interface IMissingResponse {
  missingData: IAffected[];
  isLastPage: boolean;
  lastVisible: string | null;
}

export const getMissing = async ({
  city,
  person,
  province,
  searchQuery = '',
  pageSize = 10,
  lastVisibleId = null,
}: IMissingQuery): Promise<IMissingResponse> => {
  const DB_NAME = 'missing';

  try {
    let q = query(
      collection(db, DB_NAME),
      where('city', '==', city),
      where('province', '==', province)
    );

    if (person !== 'both') {
      q = query(q, where('person', '==', person === 'people'));
    }

    if (searchQuery.trim()) {
      q = query(
        q,
        where('fullName', '>=', searchQuery),
        where('fullName', '<=', searchQuery + '\uf8ff')
      );
    }

    if (lastVisibleId) {
      const lastVisibleDocRef = doc(db, DB_NAME, lastVisibleId);
      const lastVisibleDoc = await getDoc(lastVisibleDocRef);
      q = query(q, startAfter(lastVisibleDoc), limit(pageSize));
    } else {
      q = query(q, limit(pageSize));
    }

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return { missingData: [], isLastPage: true, lastVisible: null };
    }

    const missingData: IAffected[] = [];
    let lastVisible = null;

    for (const doc of querySnapshot.docs) {
      let missing = doc.data() as IAffected;
      if (doc.data().images) {
        const images = await Promise.all(
          doc.data()?.images.map(async (image: string) => {
            const storageRef = ref(storage, image);
            return await getDownloadURL(storageRef);
          })
        );
        missing = { ...missing, images };
      }
      missingData.push(missing);
      lastVisible = doc.id;
    }

    const isLastPage = querySnapshot.size < pageSize;

    return { missingData, lastVisible, isLastPage };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Error fetching data');
  }
};
