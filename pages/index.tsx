import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import search from '../api/search';

const Index = ({ data }) => {
    useEffect(() => {
        console.log(data);
    }, []);
    return (
        <Layout>
            <div className="main">
                <h1>상품목록</h1>
                {data.length > 0 && (
                    <ul>
                        {data.map((el) => {
                            return (
                                <li key={el.ProductCode._text}>
                                    <img src={el.ProductImage300._cdata} alt={el.ProductName._cdata} />
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    const data = await search();
    return {
        props: {
            data,
        },
    };
}

export default Index;
