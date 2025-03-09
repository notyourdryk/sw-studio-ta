import { Box, Stack, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import React from 'react';

export function EntitiesListTitle() {
    return (<Stack paddingX={1} direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
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
    </Stack>);
}