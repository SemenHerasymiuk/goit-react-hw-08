import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { Button, Typography, Stack } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <AccountCircle />
      <Typography>Welcome, {user.name}</Typography>
      <Button color="inherit" onClick={handleLogout}>
        Logout
      </Button>
    </Stack>
  );
}; 