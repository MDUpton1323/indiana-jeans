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
