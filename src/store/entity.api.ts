import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const entityApi = createApi({
    reducerPath: 'entity',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://185.244.172.108:8081'
    }),
    endpoints: (build) => ({
        getAll: build.query({
            query: ({ entityId }) => `/v1/outlay-rows/entity/${entityId}/row/list`
        }),
    })
});


export const {
    useGetAllQuery,
} = entityApi;