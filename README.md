let getReddit = async (subReddit) => {
    return await fetch(`https://www.reddit.com/r/${subReddit}/.json`)
    .then(rawRes => rawRes.json())
    .then(jsonRes => jsonRes)
}

let t = await getReddit('memes')
t.data.children.forEach(d => document.body.innerHTML += `<img src="${d.data.url}">`)

?count=25&after=t3_10omtd/

getReddit2 = async (subReddit, c, id) => {
    return await fetch(`https://www.reddit.com/r/${subReddit}/.json?count=${c}&after=${id}`)
    .then(rawRes => rawRes.json())
    .then(jsonRes => jsonRes)
}
let t = await getReddit('memes')
t.data.children.forEach(d => document.body.innerHTML += `<img src="${d.data.url}">`)


css
body {
    background: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img {
    width: 500px;
    margin: 10px;
    border-bottom: 2px solid blue;
}

let getr = async (s, c, i) => {
  return await fetch(`https://www.reddit.com/r/${s}/.json?count=${c}&after=${i}`)
  .then(rawres => rawres.json())
  .then(jsonres => jsonres)
}