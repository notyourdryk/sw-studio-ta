import React from 'react';
import { Box, Tooltip } from '@mui/material';
import { Feed } from '@mui/icons-material';
import { EditRowPopper } from './EditRowPopper';

type EditRowButtonProps = {
    onAdd: () => void;
    onDelete: () => void;
    level?: number;
}

export function EditRowButton({ onAdd, onDelete, level = 0 }: EditRowButtonProps) {
    const slotProps = {
        popper: {
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [12, -42]
                    }
                }
            ]
        }
    };

    return (
        <Box paddingLeft={level * 2} >
            <Tooltip slotProps={slotProps} title={<EditRowPopper onAdd={onAdd} onDelete={onDelete}/>}>
                <Feed color="primary" />
            </Tooltip>
        </Box>);
}