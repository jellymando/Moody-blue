import React, { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Layout from '../components/Layout';
import Item from '../components/ItemList';
import search from '../api/search';
import db from '../db/firebase';

const Index = ({ data, querySnapshot }) => {
    useEffect(() => {
        console.log('11st data', data);
        console.log('aws data', querySnapshot);
        // querySnapshot.forEach((doc) => {
        //     console.log(`${doc.id} => ${doc.data()}`);
        // });
    }, []);

    return (
        <Layout>
            <h1>상품목록</h1>
            {data.length > 0 && <Item items={data} />}
        </Layout>
    );
};

export async function getStaticProps() {
    const data = await search();
    const querySnapshot = await JSON.stringify(getDocs(collection(db, 'user')));

    return {
        props: {
            data,
            querySnapshot,
        },
    };
}

export default Index;
