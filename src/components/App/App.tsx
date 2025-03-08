import React from 'react';
import { store } from '../../store';
import { Provider } from 'react-redux';
import { Entity } from '../Entity';

const eID = 148668;

export function App() {
    return (<Provider store={store}>
        <Entity entityId={eID} />
    </Provider>);
}