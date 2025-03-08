import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const entityId = 148668;
export const entityApi = createApi({
    reducerPath: 'entityApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://185.244.172.108:8081'
    }),
    endpoints: (build) => ({
        getAll: build.query({
            query: ({ entityId }) => `/v1/outlay-rows/entity/${entityId}/row/list`
        }),
        createRow: build.mutation({
            query: ({ parentId }) => {
                return ({
                    url: `/v1/outlay-rows/entity/${entityId}/row/create`,
                    method: 'POST',
                    body: {
                        equipmentCosts: 0,
                        estimatedProfit: 0,
                        machineOperatorSalary: 0,
                        mainCosts: 0,
                        materials: 0,
                        mimExploitation: 0,
                        overheads: 0,
                        parentId,
                        rowName: "",
                        salary: 0,
                        supportCosts: 0
                    }
                })
            }
        }),
        updateRow: build.mutation({
            query: ({ rowId, body }) => ({
                url: `/v1/outlay-rows/entity/${entityId}/row/${rowId}/update`,
                method: 'POST',
                body
            })
        }),
        deleteRow: build.mutation({
            query: ({ rowId }) => {
                return ({
                    url: `/v1/outlay-rows/entity/${entityId}/row/${rowId}/delete`,
                    method: 'DELETE'
                })
            }
        }),
    }),
});


export const {
    useGetAllQuery,
    useDeleteRowMutation,
    useUpdateRowMutation,
    useCreateRowMutation
} = entityApi;
