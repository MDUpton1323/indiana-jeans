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

//Function to convert transient state to perrmanent state
export const saveSurveySubmission = async () => {
  //Start building the POST request here
  console.log("Saving survey to database...");
  console.log(transientState);
};
