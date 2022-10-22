import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import joyTheme from '../../styles/joyUI';
import { CssVarsProvider } from '@mui/joy';
import JobCategoriesList from '../data/jobCategory';
import { Grid } from '@mui/material';

export default function JobCategories() {
  return (
    <CssVarsProvider theme={joyTheme}>
         <Grid container flex={'row'} spacing={2} sx={{ width: '100%' }}>
            <Grid xs={12} lg={4}>
{/* <Grid item lg={3} display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'> */}
        {JobCategoriesList.map((category) => (
            <Card key={category.id} row sx={{
                maxWidth: 1000,
                gap: 2,
                m:2,
                backgroundColor: 'primary.50',
                '&:hover': {  backgroundColor: 'primary.100' },
            }}
            >
                <AspectRatio ratio="1" sx={{ width: 90 }}>
                    <img
                    //   src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                    srcSet={`${category.icon} 2x`}
                    loading="lazy"
                    alt={category.alt}
                    />
                </AspectRatio>
                <div>
                    <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
                    {category.category}
                    </Typography>
                    <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
                    <Link
                        overlay
                        underline="none"
                        href="#interactive-card"
                        sx={{ color: 'text.tertiary' }}
                    >
                        {category.category}
                    </Link>
                    </Typography>
                    <Chip
                    variant="outlined"
                    color="primary"
                    size="sm"
                    sx={{ pointerEvents: 'none' }}
                    >
                    {category.activeTalents}
                    </Chip>
                </div>
            </Card>
        ))
    }
    </Grid></Grid>
    </CssVarsProvider>
  );
}
