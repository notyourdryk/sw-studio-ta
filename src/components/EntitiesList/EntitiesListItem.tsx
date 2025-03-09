import { ListItemButton, ListItemButtonProps, Stack, Typography } from '@mui/material';
import { Dashboard } from '@mui/icons-material';
import React from 'react';

type EntitiesListItemProps = ListItemButtonProps & {
    title: string;
};

export function EntitiesListItem({ title, ...props }: EntitiesListItemProps) {
    return (
        <ListItemButton {...props}>
            <Stack direction="row" spacing={2} alignItems="center">
                <Dashboard/>
                <Typography variant="body2">
                    {title}
                </Typography>
            </Stack>
        </ListItemButton>
    );
}