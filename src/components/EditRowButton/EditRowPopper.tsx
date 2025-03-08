import React from 'react';
import { Box } from '@mui/material';
import { Delete, Feed } from '@mui/icons-material';

type EditRowPopperProps = {
    onAdd: () => void;
    onDelete: () => void;
}

export function EditRowPopper({ onAdd, onDelete }: EditRowPopperProps) {
    return (<Box>
        <Feed color="primary" onClick={onAdd}/>
        <Delete color="error" onClick={onDelete}/>
    </Box>);
}