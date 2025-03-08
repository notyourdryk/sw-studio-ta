import { TreeResponse } from '../../models';
import React, { useState } from 'react';
import { ClickAwayListener, TableCell, TableRow } from '@mui/material';
import { EditRowButton } from '../EditRowButton';
import { EntityRowCells } from './EntityRowCells';
import { EditEntityCells } from './EditEntityRowCells';

type EntityRowProps = TreeResponse & {
    level: number;
};

export function EntityRow({ child, level, ...props }: EntityRowProps) {
    // const [createRow] = useCreateRowMutation();
    // const [updateRow] = useUpdateRowMutation();
    // const [deleteRow] = useDeleteRowMutation();

    const onDeleteRow = () => {
        console.log('onDeleteRow', props.id);
        // deleteRow({
        //     rID: props.id
        // });
    };
    const onAddRow = () => {
        // createRow({ parentId: props.id });
    };
    const [isEdit, setIsEdit] = useState(false);

    const handleEditModSwitch = () => {
        setIsEdit(true);
    };

    const disableEditMode = () => {
        setIsEdit(false);
    };
    const handleKeyDown = (ev: React.KeyboardEvent) => {
        if (ev.key === 'Escape' && isEdit)
            disableEditMode();
    };

    return (
        <>
            <ClickAwayListener onClickAway={disableEditMode}>
                <TableRow onDoubleClick={handleEditModSwitch} onKeyDown={handleKeyDown}>
                    <TableCell>
                        <EditRowButton level={level} onAdd={onAddRow} onDelete={onDeleteRow}/>
                    </TableCell>
                    {isEdit ? <EditEntityCells {...props}/> : <EntityRowCells {...props}/>}
                </TableRow>
            </ClickAwayListener>
            {child.map(item => (<EntityRow key={item.id} {...item} level={level + 1}/>))}
        </>
    );
}