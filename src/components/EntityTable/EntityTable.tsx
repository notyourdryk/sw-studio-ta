import { TreeResponse } from '../../models';
import React, { JSX } from 'react';
import { EntityRow } from '../EntityRow/EntityRow';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { TABLE_COLUMN_HEADERS } from '../../const';

type EntityTableProps = {
    rows: Array<TreeResponse>;
}

function TableHeader() {
    return (
        <TableHead>
            <TableRow>
                {TABLE_COLUMN_HEADERS.map(({ label, id }) => (<TableCell key={id}>
                    <Typography>{label}</Typography>
                </TableCell>))}
            </TableRow>
        </TableHead>
    )
}

export function EntityTable({ rows }: EntityTableProps): JSX.Element {
    return (
        <Table size="small">
            <TableHeader />
            <TableBody className="tree">
                {rows.map((item) => (<EntityRow {...item} key={item.id}/>))}
            </TableBody>
        </Table>);
}