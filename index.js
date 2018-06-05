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
  const path = 'https://api.github.com/repos/';
  const repo = 'learn-co-curriculum/javascript-fetch-lab/forks';
  const url = path + repo;
  //use fetch to fork it!
  fetch(url, {
    // method: 'POST',
    headers: {Authorization: getToken()}
  })
  .then(res => res.json())
  .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'token e0336882be107fcf5fcd24a23ec734a46c8af72a';
}
