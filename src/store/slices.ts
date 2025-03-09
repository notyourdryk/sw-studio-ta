import { createSlice } from '@reduxjs/toolkit';
import { defaultNode } from '../const';
import { TreeResponse } from '../models';
import { RootState } from './index';

const initialState: RootState['rows'] = {
    root: [],
    nodes: []
};
export const rowsSlice = createSlice({
    name: 'rows',
    initialState,
    reducers: {
        initializeRows: (_, { payload }) => {
            const rows = [...payload.rows];
            const nodes = [];

            while (rows.length > 0) {
                const row = rows.pop();
                if (row.child.length > 0)
                    for (const child of row.child) {
                        rows.push({ ...child, level: row.level ? row.level + 1 : 1 });
                    }
                nodes.push(row);
            }

            return {
                root: payload.rows,
                nodes: nodes
            };
        },
        addRow: ({ root, nodes }, { payload }) => {
            const newNode = payload.body;
            const newNodes = nodes.map((row: TreeResponse) => {
                if (row.id === payload.parentId)
                    return ({ ...row, child: [newNode, ...row.child] });
                else
                    return row;
            });

            return {
                root,
                nodes: [...newNodes, newNode]
            };
        },
        deleteRow: ({ root, nodes }, { payload }) => {
            return {
                root,
                nodes: nodes
                    .filter(({ id }) => id !== payload.rowId)
                    .map((row) => {
                        if (row.id === payload.parentId)
                            return { ...row, child: row.child.filter(({ id }) => id !== payload.rowId) };
                        else
                            return row;
                    })
            };
        },
        updateRow: ({ root, nodes }: RootState['rows'], { payload }): RootState['rows'] => {
            const newNodes = nodes.map((row: TreeResponse) => {
                if (row.id === payload.rowId)
                    return ({ ...row, ...payload.body });
                if (row.id === payload.parentId)
                    return ({ ...row, child: row.child.map((child) => {
                            if (child.id === payload.rowId)
                                return ({ ...child, ...payload.body })
                            else
                                return child;
                        })
                    });
                return row;
            });

            return {
                root,
                nodes: newNodes
            };
        },
    }
});

export const { addRow, deleteRow, updateRow, initializeRows } = rowsSlice.actions;