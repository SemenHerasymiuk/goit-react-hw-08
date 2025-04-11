import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import { Container, Typography } from '@mui/material';

const Register = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Registration
      </Typography>
      <RegistrationForm />
    </Container>
  );
};

export default Register; 