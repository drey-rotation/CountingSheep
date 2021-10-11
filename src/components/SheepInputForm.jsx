/**
 * Sheep input form
 */
import React from 'react';
import { Button, TextareaAutosize } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
      flexWrap: 'wrap'
  },
  textField: {
    width: 'auto'
  },
  resize: {
    fontSize: 20
  }

}));

const SheepInputForm = ({ ...props }) => {
  const classes = useStyles();
  const [sheepJson, setSheepJson] = React.useState([]);

  /** Parse the json then return the results **/
  function validate(json) {
    var available=0, total=0, missing = 0;
    try {
      var res = JSON.parse(json);
      for (var i=0;i<res.length;i++) {
        if (res[i].available) available++;
        else missing++;
        total++;
      }
    } catch (e) {
    }
    return {available, total, missing};
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const outputResults = validate(sheepJson);
    props.giveResults(outputResults);
  }

  // const validInput = [ 
  //   { name: "ba ba", available: true },
  //   { name: "bo peet", available: false },
  //   { name: "bo peet", available: false }
  // ]
  // const displayedInput = JSON.stringify(validInput);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="post"
        name="myForm"
      >
        <div className="row ">
          <div className="col-lg-12">
            <div className="mb-5">
              <h3 align="left"  className="title mb-3">Enter a valid JSON document in the textfield below:</h3>
              <p align="left" className=" text-align-left text-muted font-size-15">
                On submit, the json is validated and processed. In the event of an 
                invalid JSON document, the results will show all zeros.
              </p>
              
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-12">
                      < TextareaAutosize
                        style = {{ width: '100%', fontsize: '30' }}
                        InputProps={{ classes: { input: classes.resize } }}
                        name = "message"
                        rows = {5}
                        className="mb-3 form-control"
                        placeholder= '[ {"name": "ba ba", "available": true}, {"name": "sheep2", "available": false}]'
                        defaultValue = {""}
                        required
                        onChange = { event => {
                          const { value } = event.target;
                          setSheepJson(value);
                        }}
                  />
          
          </div>
        </div>

        <Button className="btn btn-soft-primary"
          type="submit"
          fullwidth
          variant="contained"
          color="secondary">
          Send
        </Button>



</form>

    </>

  );
}

export default SheepInputForm;

SheepInputForm.propTypes = {

};


