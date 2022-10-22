import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';

import { deepmerge } from '@mui/utils';
import {
  useColorScheme,
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendMuiTheme,
} from '@mui/material/styles';
import joyTheme from '../../styles/joyUI';
import { customTheme } from '../../styles/customTheme';
import { Bookmark } from '@mui/icons-material';
import EmployersList from '../data/employers/employersList';
import { Chip } from '@mui/joy';
import GroupsIcon from '@mui/icons-material/Groups';



const muiTheme = extendMuiTheme();

const theme = deepmerge(joyTheme, customTheme);

export default function EmployersCard() {
  return (

    <CssVarsProvider theme={theme}>
      {EmployersList.map((employer) => (
      <Card key={employer.id} variant="outlined" sx={{ minWidth: 320, maxWidth: 500, m: 2,
      '&:hover': { boxShadow: 'md', borderColor: 'primary.outlinedHoverBorder' }}}>
        <CardOverflow >
          
          <AspectRatio ratio="2" objectFit='contain'>
            <img
              srcSet={`${employer.img} 2x`} 
              // srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
              loading="lazy"
              alt={employer.companyName}
              
            />
          </AspectRatio>
          
          <IconButton
            aria-label="Like minimal photography"
            size="md"
            variant="solid"
            color="success"
            sx={{
              position: 'absolute',
              zIndex: 2,
              borderRadius: '50%',
              right: '1rem',
              bottom: 0,
              transform: 'translateY(50%)',
            }}
          >
            <Bookmark />
          </IconButton>
        </CardOverflow>
        <Typography variant="h1" sx={{ fontSize: 'md', fontWeight: 'bold' , mt: 2 }} >
          <Link href="#multiple-actions" overlay underline="none" textColor='primary.solidBg'>
            {employer.companyName}
          </Link>
        </Typography>
        <Typography level="body2" sx={{ mt: 0.5, mb: 2 }} >
          <Link href="#multiple-actions" underline="none" textColor='primary.main'>{employer.address}</Link>
        </Typography>
        <Divider inset="context" />
        <CardOverflow
          variant="soft"
          sx={{
            display: 'flex',
            gap: 1.5,
            py: 1.5,
            px: 'var(--Card-padding)',
            bgcolor: 'background.level1'
          }}

        >
          
          <Chip variant="soft" startDecorator={<GroupsIcon />} sx={{ fontWeight: 'md', color: 'primary.solidBg' }}>
          {employer.noOfEmp}
          </Chip>
          
        </CardOverflow>
      </Card>
    ))}
    </CssVarsProvider>
    
  );
}
