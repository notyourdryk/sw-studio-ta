import { RowResponse } from './models';

export const TABLE_COLUMNS: Array<{
    id: keyof RowResponse;
    label: string;
}> = [
    { id: 'rowName', label: 'Найменование работ' },
    { id: 'salary', label: 'Основная з/п' },
    { id: 'equipmentCosts', label: 'Оборудование' },
    { id: 'overheads', label: 'Накладные расходы' },
    { id: 'estimatedProfit', label: 'Сметная прибыль' },
];

export const TABLE_COLUMN_HEADERS = [
    { id: 'level', label: 'Уровень'},
    ...TABLE_COLUMNS
];