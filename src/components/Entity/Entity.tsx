import { EntityTable } from '../EntityTable/EntityTable';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useGetAllQuery } from '../../store/entity.api';
import { EntityResponse } from '../../models';
import { Paper } from '@mui/material';
import { initializeRows } from '../../store/slices';
import { RootState } from '../../store';

type EntityProps = {
    entityId: EntityResponse['id'];
}
export function Entity({ entityId }: EntityProps) {
    const { data, isLoading } = useGetAllQuery({ entityId });
    const dispatch = useDispatch();
    const rows = useSelector(({ rows }: RootState) => rows.root);

    useEffect(() => {
        if (!isLoading)
            dispatch(initializeRows({ rows: data }));
    }, [isLoading, data, dispatch]);

    return <Paper>
        {isLoading && 'loading...'}
        { !isLoading && rows && <EntityTable rows={rows} /> }
    </Paper>;
}