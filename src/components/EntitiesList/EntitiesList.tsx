import React from 'react';
import {
    Box,
    Divider,
    List,
    ListItemButton,
    Stack,
    Typography
} from '@mui/material';
import { Dashboard, ExpandMore } from '@mui/icons-material';

export function EntitiesList() {
    return (
        <Stack>
            <Stack paddingX={1} direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                <Box>
                    <Typography variant="body2">
                        Example
                    </Typography>
                    <Typography variant="caption">
                        Sub example
                    </Typography>
                </Box>
                <Box>
                    <ExpandMore/>
                </Box>
            </Stack>
            <Divider/>
            <List>
                <ListItemButton>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Dashboard/>
                        <Typography variant="body2">
                            По проекту
                        </Typography>
                    </Stack>
                </ListItemButton>
                <ListItemButton selected>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Dashboard/>
                        <Typography variant="body2">
                            По проекту
                        </Typography>
                    </Stack>
                </ListItemButton>
            </List>
        </Stack>
    );
}