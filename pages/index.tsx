import React, { useEffect } from 'react';

// Style
import { Global } from '@emotion/react';
import Reset from 'styles/reset';
import { Wrapper, Title } from 'styles/contents';

// DB
import { collection, getDocs } from 'firebase/firestore';
import db from 'db/firebase';

// API
import search from 'api/search';

// Components
import Header from 'components/Header';
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
        <>
            <Global styles={Reset} />
            <Header />
            <SliderContainer />
            <Wrapper>
                <Title>상품목록</Title>
                {data.length > 0 && <Item items={data} />}
            </Wrapper>
        </>
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
