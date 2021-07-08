
import axios from 'axios';

/* ------------------------------------- D O N E!
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



/* ------------------------------------- D O N E!
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/* ------------------------------------- D O N E!
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/


axios.get('https://api.github.com/users/ashleyannlaz', {
  params: {
    ID: 12345
  }
})
.then(function (response) {
  userDiv.appendChild(myFun(response.data) )
  console.log(response);
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
  // always executed
});

function myFun(object){
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImg = document.createElement('img');
  cardImg.src = object.avatar_url;

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const h3 = document.createElement('h3');
  h3.classList.add('name');
  h3.textContent = object.name;

  const userName = document.createElement('p');
  userName.classList.add('username');
  userName.textContent = object.login;

  const location = document.createElement('p');
  location.textContent = `Location: ${object.location}` ;

  const profile = document.createElement('p');
  profile.textContent = `Profile: `;

  const profileUrl = document.createElement('a');
  profileUrl.textContent = object.html_url;
  profileUrl.href = object.html_url;

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${object.followers}`;

  const following = document.createElement('p');
  following.textContent = `Following: ${object.following}`;

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${object.bio}`;

  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(h3);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileUrl);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
}

const userDiv = document.querySelector('.cards')

const followersArray = [
  'tetondan', 
  'dustinmyers', 
  'justsml', 
  'luishrd',
  'bigknell',
];

followersArray.forEach(e => {
  cardArray(e);
})

function cardArray(username) {
  axios.get(`https://api.github.com/users/${username}`, {
  params: {
    ID: 12345
  }
})
.then(function (response) {
  userDiv.appendChild(myFun(response.data) )
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
  // always executed
});
}

