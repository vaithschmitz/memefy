console.log('hello')
let images = Array.from(document.getElementsByTagName('img'))
let memes = []
async function getMemes(){
    let res = await fetch(' https://meme-api.herokuapp.com/gimme/100')
    let data = await res.json()
    await data.memes.forEach(el => memes.push(el.url))
    showMemes()
}
getMemes()

async function showMemes(){
    for(let i = 0; i < images.length; i++){
        images[i].src = memes[i]
    }
}

