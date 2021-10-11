// Import validation function 
const lambda = require('../components/CountSheep.js');

// This includes all tests for validateRegex function
describe('Test counting sheep', () => {

  // This test invokes validateRegexHandler and compares the result
  it('should test valid regex', async () => {
    const event = {
      httpMethod: 'POST',
      // body: "{\"numericCode\": \"43243445545665766787683\"}" 
      body: JSON.stringify({ numericCode: "43243445545665766787683" })
    };

    // Invoke function
    const res = await lambda.validateRegexHandler(event);
    const expectedResult = {
      statusCode: 200,
      body: { result: true, error: false },
    };
    // Compare the result with the expected result
    expect(JSON.parse(res.body).result).toEqual(true);
  });

 

});
