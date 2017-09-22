require('./css/style.scss');

(function() {
  const API = 'https://api.github.com/repos/greenfox-academy/';
  const RECOMMENDED_API = 'https://api.github.com/search/repositories?q=topic:epam-jsa';
  const TOKEN = '81f5101aaaee66e6463370b0892a10fbab5d7ca1';
  const loginButton = document.querySelector('.login button');
  const logoutButton = document.querySelector('.user button');
  const loginDiv = document.querySelector('.login');
  const userDiv = document.querySelector('.user');
  const searchButton = document.querySelector('#search');
  const descriptionDiv = document.querySelector('.description');
  const commitsDiv = document.querySelector('.commits');
  const recommendedDiv = document.querySelector('.recommended');

  if (localStorage.authorization) {
    loginDiv.classList.add('hide');
    userDiv.classList.remove('hide');
  }else {
    loginDiv.classList.remove('hide');
    userDiv.classList.add('hide');
  }
  // login function 
  loginButton.addEventListener('click', function() {
    let username = document.querySelector("#username").value;
    let token = document.querySelector("#token").value;
    let authorization = 'Basic ' + btoa(username + ":" + token);
    localStorage.authorization = authorization;
    loginDiv.classList.add('hide');
    userDiv.classList.remove('hide');
    getRecommendedRepo();
  });

  // logout function
  logoutButton.addEventListener('click', function() {
    localStorage.authorization = '';
    document.querySelector("#username").value = '';
    document.querySelector("#token").value = '';
    loginDiv.classList.remove('hide');
    userDiv.classList.add('hide');
    getRecommendedRepo();
  });

  // search repository
  searchButton.addEventListener('click', searchRepository);

  function searchRepository() {
    fetchRepository();
    fetchCommits();
  }

  function fetchRepository() {
    let searchKey = document.querySelector('#search-key').value;
    let myHeaders = new Headers();
    myHeaders.append('Authorization', localStorage.authorization);
    let myRequest = new Request(API + searchKey, {'method': 'GET','headers': myHeaders});
    fetch(myRequest).then(function(response) {
        return response.json();
    }).then(generateRepository)
    .catch(function(error) {
      errorHandller(error);
    });
  }

  function generateRepository(repository) {
    if (repository.message) {
      errorHandller(repository);
    }else {
      descriptionDiv.innerHTML = '';
      let name = document.createElement('div');
      let nameSpan = document.createElement('span');
      nameSpan.textContent = repository.name;
      name.appendChild(nameSpan);
      name.classList.add('title');
      let description = document.createElement('p');
      description.textContent = repository.description;
      let update = document.createElement('p');
      update.textContent = 'Last updated at ' + repository.updated_at;
      update.classList.add('date-info');
      descriptionDiv.appendChild(name);
      descriptionDiv.appendChild(description);
      descriptionDiv.appendChild(update);
    }
  }

  function errorHandller(error) {
    descriptionDiv.innerHTML = '';
    commitsDiv.innerHTML = '';
    let errorMessage = document.createElement('h2');
    errorMessage.textContent = 'Repository ' + error.message;
    descriptionDiv.appendChild(errorMessage);
  }

  function fetchCommits() {
    let searchKey = document.querySelector('#search-key').value;
    let myHeaders = new Headers();
    myHeaders.append('Authorization', localStorage.authorization);
    let myRequest = new Request(API + searchKey + '/commits', {'method': 'GET','headers': myHeaders});
    fetch(myRequest).then(function(response) {
        return response.json();
    }).then(generateCommits)
    .catch(function(error) {
      errorHandller(error);
    });
  }

  function generateCommits(commits) {
    if (commits.message) {
      errorHandller(commits);
    }else {
      commitsDiv.innerHTML = '';
      let commitHeader = document.createElement('div');
      let span = document.createElement('span');
      span.textContent = 'Commits (' + commits.length + ')';
      commitHeader.appendChild(span);
      commitHeader.classList.add('title');
      commitsDiv.appendChild(commitHeader);
      firstFiveCommits(commitsDiv, commits)
    }
  }

  function firstFiveCommits(commitsDiv, commits) {
    for (let i = 0; i < 8; i++) {
      let singleCommit = document.createElement('div');
      let commitMessage = document.createElement('p');
      commitMessage.textContent = commits[i].commit.message;
      let commitDate = document.createElement('p');
      commitDate.classList.add('date-info');
      commitDate.textContent = commits[i].commit.committer.name + " at " + commits[i].commit.committer.date;
      singleCommit.appendChild(commitMessage);
      singleCommit.appendChild(commitDate);
      singleCommit.classList.add('single-commit');
      commitsDiv.appendChild(singleCommit);
    }
  }

  // recommended repositories
  function getRecommendedRepo() {
    let myHeaders = new Headers();
    myHeaders.append('Authorization', localStorage.authorization);
    let myRequest = new Request(RECOMMENDED_API, {'method': 'GET','headers': myHeaders});
    fetch(myRequest).then(function(response) {
        return response.json();
    }).then(generateRecommendedRepo)
    .catch(function(error) {
      console.log(error.message);
    });
  }

  function generateRecommendedRepo(response) {
    recommendedDiv.innerHTML = '';
    let title = document.createElement('p');
    title.textContent = 'Recommended';
    recommendedDiv.appendChild(title);
    response.items.forEach(function(item) {
      let div = document.createElement('div');
      let button = document.createElement('button');
      button.textContent = item.name;
      button.addEventListener('click', function(event) {
        document.querySelector('#search-key').value = event.target.textContent;
        searchRepository();
      });
      div.appendChild(button);
      recommendedDiv.appendChild(div);
    })
  }

  getRecommendedRepo();
})()