console.log('hello')
let images = Array.from(document.getElementsByTagName('img'))
let memes = []
async function getMemes(){
    let res = await fetch('https://api.imgflip.com/get_memes')
    let data = await res.json()
    await data.data.memes.forEach(el => memes.push(el.url))
    showMemes()
}
getMemes()

async function showMemes(){
    for(let i = 0; i < images.length; i++){
        images[i].src = memes[i]
    }
}

