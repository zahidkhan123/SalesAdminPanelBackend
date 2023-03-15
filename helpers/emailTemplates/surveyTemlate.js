module.exports = (survey) => {
  return `
  <html>
  <div>
    <body style="text-align:center;">
      <h1>I'd like your input!</h1>
      <p>Please answer the following questions</p>
      <p>${survey.body}</p>
      <div>
      <a href="http://localhost:5000/api/v1/surveys/thanks">Yes</a>
      </div>
      <div>
      <a href="http://localhost:5000/api/v1/surveys/thanks">No</a>
      </div>
    </body>
   </div>
  </html`;
};
