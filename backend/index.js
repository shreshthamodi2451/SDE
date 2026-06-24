require('dotenv').config()
const express= require('express');
const app= express();
//can use a lot of app. functions
const port= 3000

const githubData= {
  "login": "shreshthamodi2451",
  "id": 286635690,
  "node_id": "U_kgDOERW2qg",
  "avatar_url": "https://avatars.githubusercontent.com/u/286635690?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/shreshthamodi2451",
  "html_url": "https://github.com/shreshthamodi2451",
  "followers_url": "https://api.github.com/users/shreshthamodi2451/followers",
  "following_url": "https://api.github.com/users/shreshthamodi2451/following{/other_user}",
  "gists_url": "https://api.github.com/users/shreshthamodi2451/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/shreshthamodi2451/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/shreshthamodi2451/subscriptions",
  "organizations_url": "https://api.github.com/users/shreshthamodi2451/orgs",
  "repos_url": "https://api.github.com/users/shreshthamodi2451/repos",
  "events_url": "https://api.github.com/users/shreshthamodi2451/events{/privacy}",
  "received_events_url": "https://api.github.com/users/shreshthamodi2451/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2026-05-21T10:50:42Z",
  "updated_at": "2026-05-21T10:50:42Z"
}

app.get('/', async (req, res)=> {
    res.send('hello')
});

app.get('/twitter', async (req, res) => {
    res.send('hiteshdotcom')
});

app.get('/github', async (req, res) => {
    res.json(githubData)
});

app.get('/login', async (req, res) => {
    res.send('<h1> please login at cac </h1>')
});

app.get('/youtube', (req, res) => {
    res.send('<h2>cac</h2>')
}); 

app.listen(process.env.PORT, () => {
    console.log(`example app listening on port ${port}`)
});