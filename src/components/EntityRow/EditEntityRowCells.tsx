import React, { ChangeEvent, ElementType, JSX, useState } from 'react';
import { TableCell, TextField } from '@mui/material';
import { RowResponse } from '../../models';

type EntityCellProps = {
    Component: ElementType;
    name: string;
    value: string;
};
function EntityCell({ Component, value }: EntityCellProps) {
    const [fieldValue, setFieldValue] = useState(value);
    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setFieldValue(ev.target.value);
    }

    return (<Component value={fieldValue} onChange={handleChange} />)
}

type EditEntityRowCellsProps = RowResponse;
export function EditEntityCells(props: EditEntityRowCellsProps): JSX.Element {
    return (
        <>
            <TableCell>
                <EntityCell Component={TextField} name="rowName" value={props.rowName} />
            </TableCell>
            <TableCell>
                <TextField value={props.salary} size="small"/>
            </TableCell>
            <TableCell>
                <TextField value={props.equipmentCosts} size="small"/>
            </TableCell>
            <TableCell>
                <TextField value={props.overheads} size="small"/>
            </TableCell>
            <TableCell>
                <TextField value={props.estimatedProfit} size="small"/>
            </TableCell>
        </>);
}