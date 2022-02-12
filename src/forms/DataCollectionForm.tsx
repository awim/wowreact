import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { default as awim } from '../contexts/awim-profile.json';


class DataCollectionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { awim };
  
      // This binding is necessary to make `this` work in the callback
    //   this.handleClick = this.handleClick.bind(this);
    }
  
    // handleClick() {
    //   this.setState(prevState => ({
    //     isToggleOn: !prevState.isToggleOn
    //   }));
    // }
  
    render() {
      return (
        <Box 
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" defaultValue={awim.name} />
            <TextField
                sx={{ justifyContent: 'flex-end' }}
                id="outlined-basic" label="Age" variant="outlined" defaultValue={awim.age}
                InputProps={{
                    endAdornment: <InputAdornment position="end">Yo</InputAdornment>
                }}
            />
            <TextField
                fullWidth
                id="outlined-textarea"
                label="Address"
                placeholder="Placeholder"
                multiline
                defaultValue={awim.address}
            />
            <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" defaultValue={awim.age} />
            <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" defaultValue={awim.age} />
            <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" defaultValue={awim.age} />
            <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" defaultValue={awim.age} />
            <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" defaultValue={awim.age} />
        
        </Box>
      );
    }
  }
  
export default DataCollectionForm;