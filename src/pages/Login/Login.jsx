import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Container, Typography } from '@mui/material';

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Login
      </Typography>
      <LoginForm />
    </Container>
  );
};

export default Login; 