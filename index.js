function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
  const path = 'https://api.github.com/repos/';
  const repo = 'rhhaynes/javascript-fetch-lab/issues';
}

function showResults(json) {
  const obj  = JSON.parse(json);
  const html = `<h3>Results:</h3>
    <a href="${obj.html_url}">${obj.html_url}</a>`;
  document.getElementById('results').innerHTML = html;
}

function forkRepo() {
  const path = 'https://api.github.com/repos/';
  const repo = 'learn-co-curriculum/javascript-fetch-lab/forks';
  fetch( path+repo, {
    method: 'post',
    headers: {Authorization: getToken()}
  })
  .then(res => res.json())
  .then(json => showResults(json));
}

function getToken() {
  return '';
}
