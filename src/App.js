import React from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createCustomTheme } from './theme';
import useSettings from './hooks/useSettings';
import SheepInputForm from './components/SheepInputForm'
import SheepResults from './components/SheepResults'
import Grid from '@material-ui/core/Grid'
import './App.css';

const sheepDefaults = 
[
  { "name": "ba ba", "available": true },
  { "name": "bo peet", "available": false },
  { "name": "bo peet", "available": false }
]

function App() {
  const { settings } = useSettings();
  const [sheeps, setSheeps] = React.useState([]);

  const theme = createCustomTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme
    //LIGHT, DARK, NATURE
  });
  
  function handleResults(sheeps) {
    setSheeps(sheeps);
  }

  return (
    <ThemeProvider theme={theme}>
    {/* <div className="App"> */}
      <CssBaseline />
      
      <Grid container p={10} alignItems="center" direction="row" spacing={3}>
        <Grid item xs={12} >
          <h1>Sheep Input App</h1>
        </Grid>
        <Grid item xs={6} >
          <SheepInputForm defaults={sheepDefaults} giveResults={handleResults} />
        </Grid>
        <Grid item xs={6}>
          <SheepResults sheepResults={sheeps} />
        </Grid>
 
      </Grid>
    </ThemeProvider>
  );
}

export default App;
