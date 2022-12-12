const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('keyup', showUser);

async function showUser(){
  const githubUser = searchInput.value;
  const appBody = document.getElementById('app-body');

  let response = await fetch(`https://api.github.com/users/${githubUser}`)
  let users = await response.json();

  if(response.ok === true){
    appBody.innerHTML = `
    <div class="left-container">
    <div class="image-div">
      <img src="${users.avatar_url}" alt="">
      <button class="view-profile-btn">View Profile</button>
    </div>
  </div>

  <div class="right-container">
    <div class="badges">
      <div class="badge-1">Public Repos: ${users.public_repos}</div>
      <div class="badge-2">Public Gists: ${users.public_gists}</div>
      <div class="badge-3">Followers: ${users.followers}</div>
      <div class="badge-4">Following: ${users.following}</div>
    </div>
    <div class="list-items">
      <ul>
        <li>Company: ${users.company}</li>
        <li>Blog: ${users.blog}</li>
        <li>Location: ${users.location}</li>
        <li>Member Since: ${users.created_at}</li>
      </ul>
    </div>
  </div>    
        `;
  } else {
    appBody.innerHTML = `<div class="alert">No Matches</div>`;
  }

  if(githubUser === ''){
    appBody.innerHTML = ''
  }
}