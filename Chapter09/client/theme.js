import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#8e8e8e',
      main: '#549615',
      dark: '#373737',
      contrastText: '#fffde7',
    },
    secondary: {
      light: '#ffad42',
      main: '#3a342f',
      dark: '#549615',
      contrastText: '#fffde7',
    },
      openTitle: '#455a64',
      protectedTitle: '#53a108',
      type: 'light'
    }
  })

  export default theme