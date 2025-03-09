import { RowResponse, TreeResponse } from '../../models';
import React, { useState } from 'react';
import { ClickAwayListener, TableCell, TableRow } from '@mui/material';
import { EditRowButton } from '../EditRowButton';
import { EntityRowCells } from './EntityRowCells';
import { EditEntityCells } from './EditEntityRowCells';
import { useDispatch, useSelector } from 'react-redux';
import { useCreateRowMutation, useDeleteRowMutation, useUpdateRowMutation } from '../../store/entity.api';
import { RootState } from '../../store';
import { defaultNode } from '../../const';
import { addRow, deleteRow, updateRow } from '../../store/slices';

type EntityRowProps = TreeResponse & {
    level?: number;
    parentId?: number;
    isTemp?: boolean;
};

export function EntityRow({ level = 0, ...props }: EntityRowProps) {
    const [changes, setChanges] = useState<Partial<RowResponse>>({});
    const [deleteRowMutation] = useDeleteRowMutation();
    const [updateRowMutation] = useUpdateRowMutation();
    const [createRowMutation] = useCreateRowMutation();
    const [isEdit, setIsEdit] = useState(props.id < 0);
    const dispatch = useDispatch();

    const row = useSelector(({ rows }: RootState) => {
        return rows.nodes.find(({ id }) => id === props.id);
    });

    if (!row) return;

    const onDeleteRow = () => {
        deleteRowMutation(({ rowId: props.id }));
    };
    const onAddRow = () => {
        dispatch(addRow({ parentId: props.id, body: {...defaultNode, id: -1 } }));
    };

    const setEditMode = () => {
        setIsEdit(true);
    };
    const disableEditMode = () => {
        setChanges({});
        setIsEdit(false);
    };
    const handleRowChange = (cellName: keyof RowResponse, value: string | number) => {
        setChanges({ ...changes, [cellName]: value });
    };
    const handleKeyDown = (ev: React.KeyboardEvent) => {
        switch (ev.key) {
            case 'Enter':
                if (props.id < 0) {
                    createRowMutation({
                        parentId: props.parentId,
                        body: {
                            ...props,
                            ...changes
                        }
                    }).unwrap().then((result) => {
                        dispatch(updateRow({
                            parentId: props.parentId,
                            rowId: -1,
                            body: { ...result.current, child: [] }
                        }));
                    });
                } else {
                    updateRowMutation({
                        rowId: props.id,
                        parentId: props.parentId,
                        body: {
                            ...props,
                            ...changes,
                        }
                    });
                }

                disableEditMode();
                break;
            case 'Escape':
                if (props.id < 0) {
                    dispatch(deleteRow({ rowId: props.id, parentId: props.parentId }));
                }
                if (isEdit)
                    disableEditMode();
                break;
        }
    };

    return (
        <>
            <ClickAwayListener onClickAway={disableEditMode}>
                <TableRow onDoubleClick={setEditMode} onKeyDown={handleKeyDown}>
                    <TableCell>
                        <EditRowButton level={level} onAdd={onAddRow} onDelete={onDeleteRow}/>
                    </TableCell>
                    {isEdit ? <EditEntityCells onChange={handleRowChange} {...props} /> : <EntityRowCells {...row}/>}
                </TableRow>
            </ClickAwayListener>
            {row.child.map(item => (<EntityRow parentId={props.id} key={item.id} {...item} level={level + 1}/>))}
        </>
    );
}