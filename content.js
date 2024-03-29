chrome.storage.local.get('enabled', data => {
    if (data.enabled) {

        let images
        let memes = []
        async function getMemes(){
            images = await Array.from(document.getElementsByTagName('img'))
            let res = await fetch('https://meme-api.herokuapp.com/gimme/30')
            let data = await res.json()
            await data.memes.forEach(el => memes.push(el.url))

            showMemes()
        }
        
        async function showMemes(){
            for(let i = 0; i < images.length; i++){
                images[i].style.objectFit = 'contain'
                images[i].src = memes[i]     
            }
        }
        
        getMemes()
        
        setInterval(getMemes, 5000)
    } else {
    }
});

