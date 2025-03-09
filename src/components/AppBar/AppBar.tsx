import React from 'react';
import { Box, Grid2, Typography } from '@mui/material';
import Apps from '@mui/icons-material/Apps';
import Reply from '@mui/icons-material/Reply';

export function AppBar() {
    return (
        <Grid2 container>
            <Box padding={1}>
                <Apps/>
            </Box>
            <Box padding={1}>
                <Reply/>
            </Box>
            <Box borderBottom={2} padding={.7}>
                <Typography>
                    Просмотр
                </Typography>
            </Box>
            <Box padding={.7}>
                <Typography>
                    Управление
                </Typography>
            </Box>
        </Grid2>
    );
}