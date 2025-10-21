import { setSocioLocationId } from "./transientState.js";

const handleLocationChange = (changeEvent) => {
  if (changeEvent.target.name === "location") {
    const locationId = parseInt(changeEvent.target.value);
    setSocioLocationId(locationId);
  }
};

export const LocationChoices = async () => {
  //TODO: Fetch locations from the API
  const response = await fetch("http://localhost:8088/socioLocations");
  const locations = await response.json();

  document.addEventListener("change", handleLocationChange);

  let html = `
    <div class="survey-input">
        <h2>What type of area do you live in?</h2>
        `;
  //TODO: generate radio buttons and add to html
  const locationsHTML = locations.map((location) => {
    return `<input type="radio" name="location" value="${location.id}" />${location.label}`;
  });
  //Join the array of strings into a single string and add to our HTML
  html += locationsHTML.join("");

  html += `
    </div>
    `;

  return html;
};
