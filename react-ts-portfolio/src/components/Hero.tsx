import React from 'react';
import { Box, Typography, Button, useTheme, Paper, Container, ButtonGroup } from '@mui/material';

const HeroSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        position: 'relative',
        background: `url(https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=800)`,
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '80vh', // Set the height to 80% of the viewport height
        padding: theme.spacing(4),
        m: 0,
      }}
    >
      <Container>
        <Box
          sx={{
            position: 'relative',
            zIndex: 1, // Ensure the content is above the overlay
            padding: theme.spacing(2),
            width: 'fit-content',
            m: 0
          }}
        >
          <Typography 
  // variant={{
  //   xs: 'h4', // Use 'h4' on mobile
  //   md: 'h2', // Use 'h2' on desktop
  // }}
  variant='h2'
  color='white' 
  component="h1" 
  gutterBottom
  sx={{
    textAlign:{
      xs: 'center',
      md: 'left'
    },
    variant: {
      xs: 'h4',
      md: 'h2'
    }

    
  }}
>
  Isokpehi David S.
</Typography>
<Typography 
  // variant={{
  //   xs: 'body1', // Use 'body1' on mobile
  //   md: 'h4',    // Use 'h4' on desktop
  // }}
  variant='body1'
  color='white' 
  paragraph
  sx={{
    textAlign: {
      xs: 'center', // Center alignment on mobile
      md: 'left',   // Left alignment on desktop
    },
  }}
>
  Frontend Developer
</Typography>

          
          <Box
            sx={{
              display: 'flex',
              gap: theme.spacing(2),
              marginTop: theme.spacing(2),
            }}
          >
            <ButtonGroup >

            <Button variant="outlined" color="primary">
              Button 1
            </Button>
            <Button variant="outlined" color="primary">
              Button 2
            </Button>
            <Button variant="outlined" color="primary">
              Button 3
            </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Container>
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
          zIndex: 0,
        }}
      ></div>
    </Paper>
  );
};

export default HeroSection;
