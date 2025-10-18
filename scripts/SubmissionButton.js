//Define HandleSurveySubmission function that checks if the clicked element has the ID "submission-button", if so logs a message to the console
const handleSurveySubmission = (clickEvent) => {
  if (clickEvent.target.id === "submission-button") {
    console.log("Button clicked!");
  }
};
//Create and export SubmissionButton component
export const SubmissionButton = () => {
  //Adds an event listner for click events and invokes handleSurveySubmission when a click happens
  document.addEventListener("click", handleSurveySubmission);
  //Returns HTML for a button with the ID "submission-button"
  return `<button id="submission-button">Save Submission</button>`;
};
