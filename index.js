function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
  debugger;
  const results = JSON.parse(json);
  const html = `<h3>Results:</h3>`;
  debugger;
  // document.getElementById('results').innerHTML = details;
}

function forkRepo() {
  const path = 'https://api.github.com/repos/rhhaynes/';
  const repo = 'learn-co-curriculum/javascript-fetch-lab/forks';
  const url = path + repo;
  //use fetch to fork it!
  fetch(url, {
    method: 'POST',
    headers: {Authorization: `token ${getToken()}`}
  })
  .then(res => res.json())
  .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '0fdff22a80a9729dc7e5c1028601c077982ff4c1';
}
