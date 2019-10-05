let memeToggle = document.getElementById('memeToggle');


let enabled = false; //disabled by default
const myButton = document.getElementById('memeToggle');

chrome.storage.local.get('enabled', data => {
    enabled = !!data.enabled;
    myButton.style.backgroundSize = '100%'
    myButton.style.backgroundRepeat = 'no-repeat'
    myButton.style.backgroundImage = enabled ? 'url(https://upload.wikimedia.org/wikipedia/ru/7/78/Trollface.svg)' : ''
    myButton.textContent = enabled ? '' : 'clicc4memez';
    myButton.style.backgroundColor = enabled ? 'yellow' : 'black'
});

myButton.onclick = () => {
    enabled = !enabled;
    myButton.textContent = enabled ? '' : 'clicc4memez';
    myButton.style.backgroundColor = enabled ? 'yellow' : 'black'
    myButton.style.backgroundImage = enabled ? 'url(https://upload.wikimedia.org/wikipedia/ru/7/78/Trollface.svg)' : ''
    chrome.storage.local.set({enabled:enabled});
};

function openCoffee(){
    chrome.tabs.create( { url: "https://www.buymeacoffee.com/gWHldyPcY"} )
}

document.getElementById('coffee').addEventListener('click', openCoffee)