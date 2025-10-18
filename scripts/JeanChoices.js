import { setOwnsBlueJeans } from "./transientState.js";
//Creating a new function that checks if the changed element is a radio button with the name "ownJeans"
const handleOwnershipChange = (changeEvent) => {
  if (changeEvent.target.name === "ownsJeans") {
    //Converts the string value("true" or "false") to an actual boolean using JSON.parse()
    const convertedToBoolean = JSON.parse(changeEvent.target.value);
    //Calls our funciton with the boolean value
    setOwnsBlueJeans(convertedToBoolean);
  }
};

export const JeanChoices = () => {
  //Adding an eventListner to the entire document that listens for "change" events and calls our handler function
  document.addEventListener("change", handleOwnershipChange);

  let html = `
    <div class="survey-input">
        <h2>Do you own a pair of blue jeans?</h2>
        <input type="radio" name="ownsJeans" value="true" /> Yes
        <input type="radio" name="ownsJeans" value="false" /> No
    </div>
    `;

  return html;
};
