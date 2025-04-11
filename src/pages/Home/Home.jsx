import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Phonebook
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Your personal contact manager
        </Typography>
        <Typography variant="body1">
          Store and manage your contacts securely in one place
        </Typography>
      </Box>
    </Container>
  );
};

export default Home; 