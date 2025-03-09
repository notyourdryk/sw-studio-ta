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

export const defaultNode = {
    child: [],
    equipmentCosts: 0,
    estimatedProfit: 0,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    overheads: 0,
    rowName: "",
    salary: 0,
    supportCosts: 0
}