// AboutPage.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  School as SchoolIcon,
  Work as WorkIcon,
  Code as CodeIcon,
  Favorite as FavoriteIcon
} from '@mui/icons-material';

const AboutPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Avatar
            sx={{ width: 150, height: 150, mb: 2 }}
          />
          <Typography variant="h4" gutterBottom>
            Germo Tael
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            System Administrator | Software Engineer
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          Hi!
        </Typography>

        <List>
          <ListItem>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText
              primary="Education"
              secondary="Junior IT Systems Specialist, EstQF Level 4, Pärnumaa Vocational Education Centre, 2023"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText
              primary="Experience"
              secondary="None"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText
              primary="Skills"
              secondary="Programming"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText
              primary="Interests"
              secondary="Sysadmin, Backend, Quantum, Gameing, Anime"
            />
          </ListItem>
        </List>
      </Container>
    </Box>
  );
};

export default AboutPage;