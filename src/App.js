import React from 'react'
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
  const [sheeps, setSheeps] = React.useState([]);

  function handleResults(sheeps) {
    setSheeps(sheeps);
  }

  return (
    
    <div className="App">
      <h1>Sheep Input App</h1>
      <Grid  container-fluid>
        <Grid item xs={6} md={6} >
          <SheepInputForm defaults={sheepDefaults} giveResults={handleResults}/>
        </Grid>
        <hr/>
        <Grid item xs={6} md={6} >
          <SheepResults sheepResults={sheeps} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
