import { TreeResponse } from '../../models';
import React, { JSX } from 'react';
import { EntityRow } from '../EntityRow/EntityRow';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

type EntityTableProps = {
    rows: Array<TreeResponse>;
}


const TABLE_COLUMNS_HEADERS = [
    { id: 'level', label: 'Уровень' },
    { id: 'rowName', label: 'Найменование работ' },
    { id: 'salary', label: 'Основная з/п' },
    { id: 'equipmentCosts', label: 'Оборудование' },
    { id: 'overheads', label: 'Накладные расходы' },
    { id: 'estimatedProfit', label: 'Сметная прибыль' },
];

export function EntityTable({ rows }: EntityTableProps): JSX.Element {
    return (<Container disableGutters>
        <Table size="small">
            <TableHead>
                <TableRow>
                    {TABLE_COLUMNS_HEADERS.map(({ label, id }) => (<TableCell key={id}>
                        <Typography>{label}</Typography>
                    </TableCell>))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((item) => (<EntityRow level={0} {...item} key={item.id}/>))}
            </TableBody>
        </Table>
    </Container>);
}