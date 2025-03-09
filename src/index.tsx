import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react';
import { App } from './components/App';
import './style.scss';

const root = createRoot(document.body);
root.render(<StrictMode>
    <App />
</StrictMode>);