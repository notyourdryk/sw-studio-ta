import React from 'react';
import {
    Divider,
    List,
    Stack
} from '@mui/material';
import { EntitiesListTitle } from './EntitiesListTitle';
import { EntitiesListItem } from './EntitiesListItem';

export function EntitiesList() {
    return (
        <Stack>
            <EntitiesListTitle />
            <Divider/>
            <List>
                <EntitiesListItem title="МТО"/>
                <EntitiesListItem title="СМР" selected/>
            </List>
        </Stack>
    );
}