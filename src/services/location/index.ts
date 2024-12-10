import { collection, query, getDocs, where, orderBy } from 'firebase/firestore';
import { db } from '../../config/firebase';

const DB_NAME = 'location';
export const getProvinces = async (): Promise<string[]> => {
  try {
    const q = query(collection(db, DB_NAME));

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) return [];

    const provincesSet = new Set<string>();
    querySnapshot.forEach((doc) => {
      provincesSet.add(doc.data().province);
    });

    return Array.from(provincesSet);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Error fetching data');
  }
};

export const getCities = async (province: string): Promise<string[]> => {
  try {
    const q = query(
      collection(db, DB_NAME),
      where('province', '==', province),
      where('register', '==', true),
      orderBy('city')
    );

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) return [];

    const citiesSet = new Set<string>();
    querySnapshot.forEach((doc) => {
      citiesSet.add(doc.data().city);
    });

    return Array.from(citiesSet);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Error fetching data');
  }
};
