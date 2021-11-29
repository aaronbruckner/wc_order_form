import {Stack, TextField} from '@mui/material';

export default function UserDetailsPage(): JSX.Element {
    return (
        <Stack>
            <TextField variant="standard" label="First Name"/>
            <TextField variant="standard" label="Last Name"/>
            <TextField variant="standard" label="Email"/>
            <TextField variant="standard" label="Phone Number"/>
        </Stack>
    );
}