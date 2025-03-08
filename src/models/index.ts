export type EntityResponse = {
    id: number;
    rowName: string;
};

export type RowResponse = {
    id: number;
    rowName: string;
    equipmentCosts: number;
    estimatedProfit: number
    machineOperatorSalary: number;
    mainCosts: number;
    materials: number;
    overheads: number;
    salary: number;
};
export type TreeResponse = {
    child: Array<TreeResponse>;
} & RowResponse;

export type RecalculatedRows = {
    changed: Array<RowResponse>;
    current: RowResponse;
};

export type RowRequest = Omit<RowResponse, 'id'> & {
    parentId: number;
};

export type RowUpdateRequest = Omit<RowResponse, 'id'>;
