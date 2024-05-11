import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '../firebase';

const GetDummyData: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list: any = [];

      try {
        const querySnapshot = await getDocs(collection(db, 'users'));

        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });

        setData(list);
      } catch (error) {
        console.log('Error getting documents: ', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div>Dummy data</div>;
};

export default GetDummyData;
