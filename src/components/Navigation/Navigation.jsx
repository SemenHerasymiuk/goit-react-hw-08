import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Button, Stack } from '@mui/material';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
      <Button
        component={NavLink}
        to="/"
        color="inherit"
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          component={NavLink}
          to="/contacts"
          color="inherit"
        >
          Contacts
        </Button>
      )}
    </Stack>
  );
}; 