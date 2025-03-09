import React, { ChangeEvent, ElementType, JSX, useState } from 'react';
import { TableCell, TextField, TextFieldProps } from '@mui/material';
import { RowResponse } from '../../models';
import { TABLE_COLUMNS } from '../../const';

type EntityCellProps = {
    Component: ElementType;
    name: keyof RowResponse;
    value: string | number;
    onChange: (name: keyof RowResponse, value: string | number) => void;
    componentProps?: TextFieldProps;
};

function EntityCell({ Component, value, name, onChange, componentProps = {} }: EntityCellProps) {
    const [fieldValue, setFieldValue] = useState(value);
    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setFieldValue(ev.target.value);
        onChange(name, ev.target.value);
    };

    return (
        <TableCell>
            <Component {...componentProps} size="small" fullWidth value={fieldValue} onChange={handleChange}/>
        </TableCell>);
}

type EditEntityRowCellsProps = RowResponse & {
    onChange: (cellName: keyof RowResponse, value: string | number) => void;
};

export function EditEntityCells(props: EditEntityRowCellsProps): JSX.Element {
    return (
        <>

            <EntityCell componentProps={{ autoFocus: true }} Component={TextField} name="rowName" value={props.rowName} onChange={props.onChange} />
            {TABLE_COLUMNS.slice(1).map(({ id }) => (<EntityCell
                key={`${props.id}-${id}`}
                onChange={props.onChange}
                Component={TextField}
                name={id}
                value={props[id]}
            />))}
        </>);
}