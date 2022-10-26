import * as React from 'react';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import joyTheme from '../../styles/joyUI';
import { CssVarsProvider } from '@mui/joy';
import JobCategoriesList from '../data/jobs/jobCategory';
import { Grid } from '@mui/material';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export default function JobCategories() {
  return (
    <CssVarsProvider theme={joyTheme}>
        <Grid container flex={'row'}  sx={{ width: '100%', justifyContent: 'center' }}>
            {JobCategoriesList.map((category) => (
                <Grid item xs={12} s={6} md={6} lg={4} key={category.id}>
                    <Card row sx={{
                        maxWidth: 1000,
                        gap: 2,
                        m:2,
                        backgroundColor: 'primary.50',
                        '&:hover': {  backgroundColor: 'primary.100' },}}>
                        {/* <AspectRatio ratio="1" sx={{ width: 90 }}>
                            <img
                            //   src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                            srcSet={`${category.icon} 2x`}
                            loading="lazy"
                            alt={category.alt}
                            />
                        </AspectRatio> */}
                        <div>
                            <Typography level="h2" fontSize="xxl" id="card-description" mb={0.5} color="primary">
                                {category.category}
                            </Typography>
                            <Typography fontSize="md" aria-describedby="card-description" mb={1}>
                                <Link overlay underline="none" href="#interactive-card" sx={{ color: 'text.primary' }}>
                                    {category.activeTalents} Active Talents
                                </Link>
                            </Typography>
                            <Chip
                            variant="solid"
                            color="success"
                            size="sm"
                            sx={{ pointerEvents: 'none' }}
                            >
                                <StarRoundedIcon /> {category.rate}
                            </Chip>
                        </div>
                    </Card>
                </Grid>))
            }
        </Grid>
    </CssVarsProvider>
  );
}
