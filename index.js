function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
  const results = JSON.parse(json);
  const html = `<h3>Results:</h3>`;
  // document.getElementById('results').innerHTML = details;
}

function forkRepo() {
  const path = 'https://api.github.com/repos/';
  const repo = 'learn-co-curriculum/javascript-fetch-lab/forks';
  const url = path + repo;
  fetch(url, {
    method: 'post',
    headers: {Authorization: getToken()}
  })
  .then(res => res.json())
  .then(json => showResults(json));
}

function getToken() {
  return '';
}
