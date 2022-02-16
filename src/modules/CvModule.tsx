import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { default as self } from '../contexts/awim-profile.json';
import picture from '../assets/img/ReadyPlayerMe-Avatar (3).png';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));


const HiddenInput = styled('input')({
    display: 'none',
});

function ButtonAppBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CV Module
            </Typography>
            <Button color="inherit">My Name</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

function UploadButtons(props) {
    return (
        <Stack direction="row" alignItems="center" spacing={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <label htmlFor="contained-button-file">
            <HiddenInput accept="image/*" id="contained-button-file" multiple type="file" />
            <Button variant="contained" component="span">
                Upload
            </Button>
            </label>
            <label htmlFor="icon-button-file">
            <HiddenInput accept="image/*" id="icon-button-file" type="file" onChange={(e) => setSelectedImage(e.target.files[0])} />
            <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
            </IconButton>
            </label>
        </Stack>
    );
  }

  function MediaCard(props) {
    return (
        <Card sx={{}}>
        <CardMedia
          component="img"
          height="230"
          image={ props.src }
          alt="green iguana"
        />       
      </Card>
    );
}
  
function FullName(props) {
    if (props.text) {
        return (
            <Typography variant="h2" component="div" gutterBottom>
                {props.text}
            </Typography>
        );
    } else {
        return (
            <React.Fragment>
                <Typography/>
            </React.Fragment>
        );
    }
}

function Phone(props) {
    if (props.text) {
        return (
            <Typography variant="subtitle1" component="div" gutterBottom>
                <WhatsAppIcon />&nbsp;
                +62 {props.text}
            </Typography>
        );
    } else {
        return (
            <React.Fragment>
                <Typography/>
            </React.Fragment>
        );
    }
}

function ExecutiveSummary(props) {
    if (props.text) {
        return (
            <React.Fragment>
            <Typography variant="h5" gutterBottom>
                Executive Summary    
            </Typography>
            <Typography variant="body1" gutterBottom>
                { props.text }    
            </Typography>
            </React.Fragment>
        );    
    } else {
        return (
            <React.Fragment>
                <Typography/>
            </React.Fragment>
        );
    }    
}

function CvModule() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [name, setName] = useState(self.name);
    const [phone, setPhone] = useState(self.phone);
    const [executiveSummary, setExecutiveSummary] = useState(self.executive_summary);


    useEffect(() => {
        if (selectedImage) {
          setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" sx={{ /*bgcolor: '#cfe8fc',*/ height: '100vh', margin: '1.5em auto' }} disableGutters>
                <ButtonAppBar />
                &nbsp;
                <Box >
                    <Grid container spacing={2}>
                        <Grid item xl={4}>
                        <Box 
                            component="form"
                            sx={{
                                '& .MuiTextField-root': {
                                    m: 1,
                                    marginTop: 3,
                                    marginBottom: 3,
                                    display: 'flex',
                                    justifyContent: 'flex-start'
                                },                                
                            }}
                            noValidate
                            autoComplete="off"
                        >
                                {/* <UploadButtons /> */}
                            <Stack direction="row" alignItems="center" spacing={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <label htmlFor="contained-button-file">
                                <HiddenInput accept="image/*" id="contained-button-file" multiple type="file" onChange={(e) => setSelectedImage(e.target.files[0])} />
                                <Button variant="contained" component="span">
                                    Profile Picture
                                </Button>
                                </label>
                                <label htmlFor="icon-button-file">
                                <HiddenInput accept="image/*" id="icon-button-file" type="file" onChange={(e) => setSelectedImage(e.target.files[0])} />
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                                </label>
                            </Stack>
                            <TextField 
                                className="outlined-basic"
                                label="Name"
                                variant="outlined"
                                value={ name }
                                onChange={(e) => {                                   
                                    setName(e.target.value);                             
                                } }
                            />
                            <TextField 
                                className="outlined-basic"
                                label="Phone Number"
                                variant="outlined"
                                defaultValue={ phone }
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">+62</InputAdornment>
                                }}
                                onChange={(e) => {                                   
                                    setPhone(e.target.value);                             
                                } }
                            />
                            <TextField
                                id="outlined-textarea"
                                label="Executive Summary"
                                placeholder="Placeholder"
                                multiline
                                defaultValue={executiveSummary}
                                onChange={(e) => {                                   
                                    setExecutiveSummary(e.target.value);                             
                                } }    
                            />        
                        </Box>
                        </Grid>
                        <Grid item xl={8}>                        
                        <Box 
                            sx={{
                                m: 1,                
                            }}
                        >
                            <Grid container spacing={2}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 2,
                                        height: '100vh',
                                        width: 1,
                                        display: 'flex',
                                        '& > :not(style)': {
                                            m: 1,
                                        }
                                    }}
                                >
                                    <Grid
                                        item
                                        xl={3}
                                        sx={{
                                            backgroundColor: '#dbebfe',
                                            p: 2
                                        }}
                                    >
                                    <MediaCard src={ imageUrl ? imageUrl : picture }/>
                                    </Grid>
                                    <Grid
                                        item
                                        xl={9}
                                        sx={{
                                            flexDirection: 'row',
                                        }}
                                    >
                                        <FullName text={name} />
                                        <Phone text={phone} />
                                        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                                        <ExecutiveSummary text={executiveSummary} />
                                    </Grid>
                                </Paper>
                            </Grid>            
                        </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>   
    );
}




export  { CvModule };