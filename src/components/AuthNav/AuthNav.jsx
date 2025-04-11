import { NavLink } from 'react-router-dom';
import { Button, Stack } from '@mui/material';

export const AuthNav = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        component={NavLink}
        to="/register"
        color="inherit"
      >
        Register
      </Button>
      <Button
        component={NavLink}
        to="/login"
        color="inherit"
      >
        Log In
      </Button>
    </Stack>
  );
}; 