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

interface IAffectedQuery {
  db_name: string;
  city: string;
  person: string;
  province: string;
  searchQuery: string;
  pageSize: number;
  loadMore: boolean;
  lastVisibleId?: null | string;
}

interface IAffectedResponse {
  affectedData: IAffected[];
  isLastPage: boolean;
  lastVisible: string | null;
}

export const getAffected = async ({
  db_name,
  city,
  person,
  province,
  searchQuery = '',
  pageSize = 10,
  lastVisibleId = null,
  loadMore,
}: IAffectedQuery): Promise<IAffectedResponse> => {
  try {
    let q = query(
      collection(db, db_name),
      where('city', '==', city),
      where('province', '==', province)
    );

    if (person !== 'both') {
      q = query(q, where('person', '==', person === 'people'));
    }

    if (searchQuery.trim()) {
      q = query(
        q,
        where('fullName', '>=', searchQuery.toLowerCase()),
        where('fullName', '<=', searchQuery.toLowerCase() + '\uf8ff')
      );
    }

    if (lastVisibleId && loadMore) {
      const lastVisibleDocRef = doc(db, db_name, lastVisibleId);
      const lastVisibleDoc = await getDoc(lastVisibleDocRef);
      q = query(q, startAfter(lastVisibleDoc), limit(pageSize));
    } else {
      q = query(q, limit(pageSize));
    }

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return { affectedData: [], isLastPage: true, lastVisible: null };
    }

    const affectedData: IAffected[] = [];
    let lastVisible = null;

    for (const doc of querySnapshot.docs) {
      let affected = doc.data() as IAffected;
      if (doc.data()?.images && doc.data()?.images.length) {
        const images = await Promise.all(
          doc.data()?.images.map(async (image: string) => {
            const storageRef = ref(storage, image);
            return await getDownloadURL(storageRef);
          })
        );
        affected = { ...affected, images };
      }
      affectedData.push(affected);
      lastVisible = doc.id;
    }

    const isLastPage = querySnapshot.size < pageSize;

    return { affectedData, lastVisible, isLastPage };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Error fetching data');
  }
};
