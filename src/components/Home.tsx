import {
  Box,
  Container,
} from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container
        maxWidth="sm"
        sx={{
          mt: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 64px)'
        }}
      >
        <iframe src="https://giphy.com/embed/rBszdmXbzglQUX7N4j" width="381" height="480" className="giphy-embed" allowFullScreen></iframe>
      </Container>
    </Box>
  );
};

export default HomePage;