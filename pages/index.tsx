import React, { useEffect } from 'react';

// Style
import { Wrapper, SubTitle } from 'styles/contents';

// DB
import { collection, getDocs } from 'firebase/firestore';
import db from 'db/firebase';

// API
import search from 'api/search';

// Components
import Layout from 'components/Layout';
import Item from 'components/ItemList';
import SliderContainer from 'components/SliderContainer';

const Index = ({ shopData }) => {
    useEffect(() => {
        console.log('11st data', shopData);

        (async () => {
            const querySnapshot = await getDocs(collection(db, 'user'));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, ' => ', doc.data());
            });
        })();
    }, []);

    return (
        <Layout>
            <SliderContainer />
            <Wrapper>
                <SubTitle>상품목록</SubTitle>
                {shopData.length > 0 && <Item items={shopData} />}
            </Wrapper>
        </Layout>
    );
};

export async function getStaticProps() {
    const shopData = await search();

    return {
        props: {
            shopData,
        },
    };
}

export default Index;
