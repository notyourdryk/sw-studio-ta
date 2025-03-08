import { EntityTable } from '../EntityTable/EntityTable';
import { useSelector } from 'react-redux';
import React from 'react';
import { useGetAllQuery } from '../../store/entity.api';
import { EntityResponse } from '../../models';
import { Paper } from '@mui/material';

type EntityProps = {
    entityId: EntityResponse['id'];
}
export function Entity({ entityId }: EntityProps) {
    const { data, isLoading, error } = useGetAllQuery({ entityId });
    const rows = useSelector(store => {
        console.log("store = ", store);
        return [];
    });

    return <Paper>
        {isLoading && 'loading...'}
        { !isLoading && <EntityTable rows={data} /> }
    </Paper>;
}