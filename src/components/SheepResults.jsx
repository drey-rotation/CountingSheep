/**
 * Sheep results
 */
import React from 'react';
import Grid from '@material-ui/core/Grid'

const SheepResults = ({ ...props }) => {
  console.log("results  props: ", props);
  const {sheepResults} = props;

  console.log("len: ", sheepResults);
  return (

    <>
      <Grid container >
        <Grid item p={2} pl={20} xs={12} >
          <p>
            <h2>These are the results:</h2>
          </p>

          {/* {sheepResults.map( (sheep, idx) => (
            <div>the sheep</div>
          ))} */}
          <p>There are a total of: {sheepResults.total} sheep.</p>
          <p>{sheepResults.available} sheep are available.</p>
          <p>{sheepResults.missing} sheep are missing.</p>
        </Grid>
      </Grid>
    </>

  );
}

export default SheepResults;

SheepResults.propTypes = {
//             < TextField
// style = {{ width: '50%' }}
// id = "outlined-textarea"
// width = "100%"
// label = "Multiline Placeholder"
// placeholder = "Placeholder"
// multiline
// variant = "outlined"
// inputProps = {{ className: classes.textarea }}
// />


//             < TextareaAutosize
// style = {{ width: '50%', fontsize: '30' }}

// name = "message"
// rows = { 10}
// className = "form-control"
// placeholder = "Include a message with your gift..."
// defaultValue = { ""}
// required

// onChange = { event => {
//   const { value } = event.target;
//   // setMessage(value);
// }}
// />

};


