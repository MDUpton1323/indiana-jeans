export const SubmissionList = async () => {
  //Fetch the submissions with expanded socioLocation data
  const response = await fetch(
    "http://localhost:8088/submissions?_expand=socioLocation"
  );
  const submissions = await response.json();

  let html = `
    <div id="survey-submissions-list">
        <h2>Survey Submissions</h2>
        `;
  //Generate HTML for each submission using .map()
  const submissionsHTML = submissions.map((submission) => {
    return `
                <section class="survey-submission-container">
                    <h2>Submission: ${submission.id}</h2>
                    <p>Owns Blue Jeans: ${submission.ownsBlueJeans}</p>
                    <p>Location: ${submission.socioLocation.label}</p>
                </section>
                `;
  });
  //Join the array of strings into a single string and add to our HTML
  html += submissionsHTML.join("");
  //TODO: Generate HTML for each submission
  html += `
    </div>
    `;

  return html;
};
