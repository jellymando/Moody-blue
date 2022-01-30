import React, { useEffect } from 'react';

// Style
import { Wrapper, Title } from 'styles/contents';

// DB
import { collection, getDocs } from 'firebase/firestore';
import db from 'db/firebase';

// API
import search from 'api/search';

// Components
import Layout from 'components/Layout';
import Item from 'components/ItemList';
import SliderContainer from 'components/SliderContainer';

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
            <SliderContainer />
            <Wrapper>
                <Title>상품목록</Title>
                {data.length > 0 && <Item items={data} />}
            </Wrapper>
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
