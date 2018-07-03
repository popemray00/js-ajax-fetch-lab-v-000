const baseURL = 'https://api.github.com'

function getIssues() {
  fetch(`${baseURL}/repos/jennianelson/javascript-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  const issues = json.map(issue => {
   return (`<h3>${issue.title}</h3>
   <p>${issue.body}</p>`)
 });
 document.getElementById('issues').innerHTML = issues.join(' ');
}

function createIssue() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  const postData = { title: title, body: body }
  fetch(`${baseURL}/repos/jennianelson/javascript-fetch-lab/issues`, {
    body: JSON.stringify(postData),
    method: /post/,
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => getIssues(res))
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a
   href=${json.html_url}>Link to Repo</a>`;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${baseURL}/repos/${repo}/forks`, {
   method: /post/,
   headers: {
     Authorization: `token ${getToken()}`
   }
 }).then(res => res.json()).then(res => showResults(res))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
