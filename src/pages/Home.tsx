import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";

const Home: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant="h3">Home Page</Typography>
        </Box>
    );
};

export default Home;