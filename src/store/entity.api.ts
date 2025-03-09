import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { deleteRow, updateRow } from './slices';

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
            query: ({ parentId, body }) => {
                return ({
                    url: `/v1/outlay-rows/entity/${entityId}/row/create`,
                    method: 'POST',
                    body: {
                        parentId,
                        ...body
                    }
                })
            }
        }),
        updateRow: build.mutation({
            query: ({ rowId, body }) => ({
                url: `/v1/outlay-rows/entity/${entityId}/row/${rowId}/update`,
                method: 'POST',
                body
            }),
            onQueryStarted({ rowId, parentId, body }, { dispatch }) {
                dispatch(updateRow({
                    rowId,
                    parentId,
                    body
                }))
            }
        }),
        deleteRow: build.mutation({
            query: ({ rowId }) => {
                return ({
                    url: `/v1/outlay-rows/entity/${entityId}/row/${rowId}/delete`,
                    method: 'DELETE'
                })
            },
            onQueryStarted({ rowId }, { dispatch }) {
                dispatch(deleteRow({ rowId }));
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
