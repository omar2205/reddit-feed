const express = require('express')
const fetch = require('node-fetch')
const nunjucks = require('nunjucks')
const helmet = require('helmet')
const app = express()

app.use(express.static('public'))
app.use(helmet())

nunjucks.configure('views', {
  autoescape: false,
  express: app
})

app.get('/', (req, res) => {
  // response.sendFile(__dirname + '/views/index.html')
  res.redirect('/r/memes')
})

// Get reddit json data
// sub: subreddit, count: number of posts returned
// id: Last post's id (to get next page)
const getR = async (sub, count, id) => {
  let url = `https://www.reddit.com/r/${sub}/.json?after=t3_${id}`
  return await fetch(url)
    .then(raw => raw.json())
    .then(res => res)
}

app.get('/r/:sub/:postid?', async (req, res) => {
  // res.send(`Hi, SUBREDDIT: ${req.params.subreddit}`)
  let r = await getR(req.params.sub, 20, req.params.postid)
  // let page = ``
  // r.data.children.forEach(
  //   d =>
  //     (page += `
  // <h3>${d.data.title}</h3>
  // <p>${d.data.id}</p>
  // <img src="${d.data.url}" />
  // `)
  // )
  res.render('layout.html', { data: await r.data.children })
})

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port)
})
