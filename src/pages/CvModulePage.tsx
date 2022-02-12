import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import DataCollectionForm from '../forms/DataCollectionForm';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function CvModulePage() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" sx={{ /*bgcolor: '#cfe8fc',*/ height: '100vh', margin: '1.5em auto' }} disableGutters>
                &nbsp;
                <Box >                    
                    <Grid container spacing={2}>
                        <Grid item xl={4}>
                            <DataCollectionForm />
                        </Grid>
                        <Grid item xl={8}>
                            <Item>xs=4</Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}