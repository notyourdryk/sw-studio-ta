import { createSlice } from '@reduxjs/toolkit';

export const rowsSlice = createSlice({
    name: 'rows',
    initialState: {
        root: [],
        nodes: []
    },
    reducers: {
        initializeRows: (state, { payload }) => ({ ...state, root: payload.rows }),
        addRow: (state, payload) => {},
        deleteRow: (state, payload) => {},
        updateRow: (state, action) => { },
    }
});

export const { addRow, deleteRow, updateRow, initializeRows } = rowsSlice.actions;