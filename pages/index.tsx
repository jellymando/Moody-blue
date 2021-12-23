import React, { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Layout from '../components/Layout';
import Item from '../components/ItemList';
import search from '../api/search';
import db from '../db/firebase';
import { Title } from 'components/Layout/styled';

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
            <Title>상품목록</Title>
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
