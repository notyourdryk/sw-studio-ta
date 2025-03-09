import { RowResponse } from '../../models';
import React from 'react';
import { TableCell } from '@mui/material';

type EntityRowCellsProps = RowResponse;

export function EntityRowCells(props: EntityRowCellsProps) {
    const { rowName, salary, equipmentCosts, overheads, estimatedProfit } = props;

    return (
        <>
            <TableCell sx={{ width: '50%'}}>
                {rowName}
            </TableCell>
            <TableCell>
                {salary}
            </TableCell>
            <TableCell>
                {equipmentCosts}
            </TableCell>
            <TableCell>
                {overheads}
            </TableCell>
            <TableCell>
                {estimatedProfit}
            </TableCell>
        </>
    );
}