import { RowResponse, TreeResponse } from '../../models';
import React, { useState } from 'react';
import { ClickAwayListener, TableCell, TableRow } from '@mui/material';
import { EditRowButton } from '../EditRowButton';
import { EntityRowCells } from './EntityRowCells';
import { EditEntityCells } from './EditEntityRowCells';
import { useDispatch } from 'react-redux';
import { addRow, deleteRow, updateRow } from '../../store/slices';
import { useCreateRowMutation, useDeleteRowMutation, useUpdateRowMutation } from '../../store/entity.api';

type EntityRowProps = TreeResponse & {
    level: number;
};

export function EntityRow({ child, level, ...props }: EntityRowProps) {
    const dispatch = useDispatch();
    const [changes, setChanges] = useState<Partial<RowResponse>>({});
    const [isEdit, setIsEdit] = useState(false);
    const [updateRowMutation] = useUpdateRowMutation();
    const [deleteRowMutation] = useDeleteRowMutation();
    const [createRowMutation] = useCreateRowMutation();

    const onDeleteRow = () => {
        dispatch(deleteRow(props.id));
        deleteRowMutation(({ rowId: props.id }));
        console.log('onDeleteRow', props.id);
    };
    const onAddRow = () => {
        dispatch(addRow(props.id));
        createRowMutation({ parentId: props.id });
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
                console.log(changes);
                dispatch(updateRow({
                    ...props,
                    ...changes,
                    id: props.id
                }));
                updateRowMutation({
                    rowId: props.id,
                    body: {
                        ...props,
                        ...changes,
                    }
                });
                disableEditMode();
                break;
            case 'Escape':
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
                    {isEdit ? <EditEntityCells onChange={handleRowChange} {...props} /> : <EntityRowCells {...props}/>}
                </TableRow>
            </ClickAwayListener>
            {child.map(item => (<EntityRow key={item.id} {...item} level={level + 1}/>))}
        </>
    );
}