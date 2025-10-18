//Set up the transient state data structure and provide initial values
const transientState = {
  ownsBlueJeans: false,
  socioLocations: 0,
};

//Functions to modify each property of transient state
export const setOwnsBlueJeans = (chosenOwnership) => {
  transientState.ownsBlueJeans = chosenOwnership;
};

export const setSocioLocationId = (chosenLocation) => {
  transientState.socioLocationId = chosenLocation;
};

//Function to convert transient state to permanent state
export const saveSurveySubmission = async () => {
  if (
    (transientState.ownsBlueJeans !== true &&
      transientState.ownsBlueJeans !== false) ||
    transientState.socioLocationId <= 0 ||
    transientState.socioLocationId === undefined
  ) {
    alert("Please complete all fields before submitting the form.");
    return;
  }
  //Start building the POST request here
  //Specifying that I am creating data with "POST" method
  const postOptions = {
    method: "POST",
    //Object with "Content-Type": "application/json" to tell the server we're sending JSON
    headers: {
      "Content-Type": "application/json",
    },
    //Containing our transient state converted to a JSON string using JSON.stringify(). The JSON.stringify() function is critical - it converts our JavaScript object to a JSON string that the server can understand.
    body: JSON.stringify(transientState),
  };
  //Send the date to the API
  const response = await fetch(
    "http://localhost:8088/submissions",
    postOptions
  );

  //Todo: Add fetch() call here
  console.log("Saving survey to database...");
  console.log(transientState);
};
