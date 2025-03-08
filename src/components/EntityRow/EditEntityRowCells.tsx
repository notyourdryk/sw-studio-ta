import React, { ChangeEvent, ElementType, JSX, useState } from 'react';
import { TableCell, TextField } from '@mui/material';
import { RowResponse } from '../../models';
import { TABLE_COLUMNS } from '../../conts';

type EntityCellProps = {
    Component: ElementType;
    name: keyof RowResponse;
    value: string | number;
    onChange: (name: keyof RowResponse, value: string | number) => void;
};

function EntityCell({ Component, value, name, onChange }: EntityCellProps) {
    const [fieldValue, setFieldValue] = useState(value);
    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setFieldValue(ev.target.value);
        onChange(name, ev.target.value);
    };

    return (
        <TableCell>
            <Component size="small" fullWidth value={fieldValue} onChange={handleChange}/>
        </TableCell>);
}

type EditEntityRowCellsProps = RowResponse & {
    onChange: (cellName: keyof RowResponse, value: string | number) => void;
};

export function EditEntityCells(props: EditEntityRowCellsProps): JSX.Element {
    return (
        <>
            {TABLE_COLUMNS.map(({ id }) => (<EntityCell
                key={`${props.id}-${id}`}
                onChange={props.onChange}
                Component={TextField}
                name={id}
                value={props[id]}
            />))}
        </>);
}