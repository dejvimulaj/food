import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
<main>
        {/* Hero unit */}
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="medium">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.secondary"
              gutterBottom
              sx={{fontWeight:"bold"}}
            >
              Bytebite
            </Typography>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="primary.main"
              gutterBottom
              sx={{fontWeight:"bold"}}
            >
              A fullstack Web Project by:
            </Typography>
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.secondary"
              gutterBottom
              sx={{fontWeight:"bold"}}
            >
              Brend Zmijanej (backend)
            </Typography>
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.secondary"
              gutterBottom
              sx={{fontWeight:"bold"}}
            >
              Deni Tusha (backend)
            </Typography>
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.secondary"
              gutterBottom
              sx={{fontWeight:"bold"}}
            >
              Arla Mitrushi (database)
            </Typography>
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.secondary"
              gutterBottom
              sx={{fontWeight:"bold"}}
            >
              Dejvi Mulaj (frontend)
            </Typography>
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="primary.main"
              gutterBottom
              sx={{fontWeight:"bold"}}
            >
              Main technologies used:
            </Typography>
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.secondary"
              gutterBottom
              sx={{fontWeight:"bold"}}
            >
              React, Spring Boot, SQL, Axios
            </Typography>
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="primary.dark"
              gutterBottom
              sx={{fontWeight:"bold"}}
            >
              (100 points please? We havent slept in a week)
            </Typography>
        </Container>
        </Box>
      </main>
  )
}

export default About
