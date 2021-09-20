module.exports = {
    async rewrites() {
        return [
            {
                source: '/api',
                destination: 'https://openapi.11st.co.kr/openapi/OpenApiService.tmall',
            },
        ];
    },
};
