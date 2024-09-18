import {
  AppBar,
  Toolbar as MUIToolbar,
  Typography,
  Button,
} from '@mui/material';
import { Outlet, Link as RouterLink } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <AppBar position="static">
        <MUIToolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ephemeral
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            About
          </Button>
          <Button color="inherit" component={RouterLink} to="/signin">
            Sign In
          </Button>
        </MUIToolbar>

      </AppBar>

      <Outlet />
    </div>
  );
};

export default Layout;