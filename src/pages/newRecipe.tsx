import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";

const newRecipe: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant="h3"> New Recipe Page</Typography>
        </Box>
    );
};

export default newRecipe;