import {Divider, Stack, TextField, Typography} from '@mui/material';
import { flexbox } from '@mui/system';
import './UserDetailsPage.css'

export default function UserDetailsPage(): JSX.Element {
    return (
        <div className="user-details-page">
            <Stack>
                <Typography variant='h4'>Contact</Typography>
                <Divider/>
                <TextField className="input-row" variant="standard" label="First Name"/>
                <TextField className="input-row" variant="standard" label="Last Name"/>
                <TextField className="input-row" variant="standard" label="Email"/>
                <TextField className="input-row" variant="standard" label="Phone Number"/>
                <Typography variant='h4'>Address</Typography>
                <Divider/>
                <TextField className="input-row" variant="standard" label="Street Address Line 1"/>
                <TextField className="input-row" variant="standard" label="Street Address Line 2"/>
                <div className='city-state-box input-row'>
                    <TextField className='city-text-field' variant="standard" label="City"/>
                    <TextField className='state-text-field' variant="standard" label="State / Province"/>
                </div>
                <TextField className="input-row" variant="standard" label="Postal Code"/>
            </Stack>
        </div>
    );
}