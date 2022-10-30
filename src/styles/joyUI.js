// import { deepmerge } from '@mui/utils';
// import {
//   useColorScheme,
//   Experimental_CssVarsProvider as CssVarsProvider,
//   experimental_extendTheme as extendMuiTheme,
// } from '@mui/material/styles';
import { extendTheme as extendJoyTheme } from "@mui/joy/styles";
import { experimental_extendTheme as customTheme } from "@mui/material/styles";
// const muiTheme = extendMuiTheme();
const muiTheme = customTheme();

//Custom Colors
// const primaryColor = '#0F3057';
// // const secondaryColor = '#008891';
// const secondaryColor = '#8FE3CF';
// const errorColor = '#b71c1c';
// const whiteColor = 'ffffff';

const joyTheme = extendJoyTheme({
  // This is required to point to `var(--mui-*)` because we are using `CssVarsProvider` from Material UI.
  cssVarPrefix: "mui",
  colorSchemes: {
    light: {
      palette: {
        primary: {
          //   ...blue,
          solidColor: "var(--mui-palette-primary-contrastText)",
          solidBg: "var(--mui-palette-primary-main)",
          solidHoverBg: "var(--mui-palette-primary-dark)",
          plainColor: "var(--mui-palette-primary-main)",
          plainHoverBg:
            "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
          plainActiveBg: "rgba(var(--mui-palette-primary-mainChannel) / 0.3)",
          outlinedBorder: "rgba(var(--mui-palette-primary-mainChannel) / 0.5)",
          outlinedColor: "var(--mui-palette-primary-main)",
          outlinedHoverBg:
            "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
          outlinedHoverBorder: "var(--mui-palette-primary-main)",
          outlinedActiveBg:
            "rgba(var(--mui-palette-primary-mainChannel) / 0.3)",
        },
        neutral: {
          //   ...grey,
          solidColor: "var(--mui-palette-secondary-contrastText)",
          solidBg: "var(--mui-palette-secondary-main)",
          solidHoverBg: "var(--mui-palette-secondary-dark)",
          plainColor: "var(--mui-palette-secondary-main)",
          plainHoverBg:
            "rgba(var(--mui-palette-secondary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
          plainActiveBg: "rgba(var(--mui-palette-secondary-mainChannel) / 0.3)",
          outlinedBorder:
            "rgba(var(--mui-palette-secondary-mainChannel) / 0.5)",
          outlinedColor: "var(--mui-palette-secondary-main)",
          outlinedHoverBg:
            "rgba(var(--mui-palette-secondary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
          outlinedHoverBorder: "var(--mui-palette-secondary-main)",
          outlinedActiveBg:
            "rgba(var(--mui-palette-secondary-mainChannel) / 0.3)",
        },
        // Do the same for the `danger`, `info`, `success`, and `warning` palettes,
        divider: "var(--mui-palette-divider)",
        text: {
          tertiary: "rgba(0 0 0 / 0.56)",
        },
      },
    },
    // Do the same for dark mode
    // dark: { ... }
  },
  fontFamily: {
    display: '"Roboto","Helvetica","Arial",sans-serif',
    body: '"Roboto","Helvetica","Arial",sans-serif',
  },
  shadow: {
    xs: `var(--mui-shadowRing), ${muiTheme.shadows[1]}`,
    sm: `var(--mui-shadowRing), ${muiTheme.shadows[2]}`,
    md: `var(--mui-shadowRing), ${muiTheme.shadows[4]}`,
    lg: `var(--mui-shadowRing), ${muiTheme.shadows[8]}`,
    xl: `var(--mui-shadowRing), ${muiTheme.shadows[12]}`,
  },
});

// Note: you can't put `joyTheme` inside Material UI's `extendMuiTheme(joyTheme)` because
//       some of the values in the Joy UI theme refers to CSS variables abd not raw colors.
// const muiTheme = extendMuiTheme();

// You can use your own `deepmerge` function.
// muiTheme will deeply merge to joyTheme.
// const theme = deepmerge(joyTheme, muiTheme);

// export default function App() {
//   return (
//     <CssVarsProvider theme={theme}>
//       ...Material UI and Joy UI components
//     </CssVarsProvider>
//   );
// }

export default joyTheme;
