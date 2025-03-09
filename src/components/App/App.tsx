import React from 'react';
import { store } from '../../store';
import { Provider } from 'react-redux';
import { Entity } from '../Entity';
import { EntitiesList } from '../EntitiesList';
import { createTheme, Divider, Grid2, Paper, ThemeProvider } from '@mui/material';
import { AppBar } from '../AppBar';

const eID = 148668;

const theme = createTheme({
    palette: {
        mode: 'light'
    }
});
export function App() {
    return (<ThemeProvider theme={theme}>
        <Paper square sx={{ height: '100%' }}>
            <Grid2 container direction="column" sx={{ height: '100%' }}>
                <Grid2 size="auto">
                    <AppBar/>
                    <Divider/>
                </Grid2>
                <Grid2 size="grow">
                    <Grid2 container direction="row" sx={{ height: '100%' }}>
                        <Grid2 size="auto">
                            <EntitiesList />
                        </Grid2>
                        <Divider orientation="vertical" flexItem/>
                        <Grid2 size="grow">
                            <Provider store={store}>
                                <Entity entityId={eID} />
                            </Provider>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Paper>
    </ThemeProvider>);
}