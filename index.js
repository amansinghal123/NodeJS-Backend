require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const gitHubData = {
    "login": "amansinghal123",
    "id": 46749779,
    "node_id": "MDQ6VXNlcjQ2NzQ5Nzc5",
    "avatar_url": "https://avatars.githubusercontent.com/u/46749779?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/amansinghal123",
    "html_url": "https://github.com/amansinghal123",
    "followers_url": "https://api.github.com/users/amansinghal123/followers",
    "following_url": "https://api.github.com/users/amansinghal123/following{/other_user}",
    "gists_url": "https://api.github.com/users/amansinghal123/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/amansinghal123/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/amansinghal123/subscriptions",
    "organizations_url": "https://api.github.com/users/amansinghal123/orgs",
    "repos_url": "https://api.github.com/users/amansinghal123/repos",
    "events_url": "https://api.github.com/users/amansinghal123/events{/privacy}",
    "received_events_url": "https://api.github.com/users/amansinghal123/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2019-01-16T12:57:54Z",
    "updated_at": "2024-04-16T10:17:03Z"
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('response for twitter')
})

app.get('/login', (req, res) => {
res.send('<h1>please login</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h1>Youtube</h1>')
})

app.get('/github', (req, res) => {
    res.json(gitHubData)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})  


