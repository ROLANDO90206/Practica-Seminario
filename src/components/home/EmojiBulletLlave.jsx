import React from 'react';
import { Box } from '@material-ui/core';

const EmojiBulletLlave = (props) => {
    const { emoji, text } = props;

    return (
        <Box>
            {emoji} {text}
        </Box>
    );
}

export default EmojiBulletLlave
