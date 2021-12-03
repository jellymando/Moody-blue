import axios from 'axios';
import convert from 'xml-js';

const search = async (keyword) => {
    try {
        const result = await axios.get(
            `https://openapi.11st.co.kr/openapi/OpenApiService.tmall?key=${
                process.env.NEXT_PUBLIC_11ST_API_KEY
            }&apiCode=ProductSearch&keyword=${keyword ? keyword : encodeURI('여성의류')}&option=Categories`,
            { headers: { 'content-type': 'application/json;charset=UTF-8' } }
        );
        return JSON.parse(convert.xml2json(result.data, { compact: true, spaces: 4 })).ProductSearchResponse.Products
            .Product;
    } catch (e) {
        throw new Error(e);
    }
};

export default search;
