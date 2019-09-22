let memeToggle = document.getElementById('memeToggle');


let enabled = false; //disabled by default
const myButton = document.getElementById('memeToggle');

chrome.storage.local.get('enabled', data => {
    enabled = !!data.enabled;
    myButton.style.backgroundSize = '100%'
    myButton.style.backgroundRepeat = 'no-repeat'
    myButton.style.backgroundImage = enabled ? 'url(https://upload.wikimedia.org/wikipedia/ru/7/78/Trollface.svg)' : ''
    myButton.textContent = enabled ? '' : 'lame';
    myButton.style.backgroundColor = enabled ? 'yellow' : 'red'
});

myButton.onclick = () => {
    enabled = !enabled;
    myButton.textContent = enabled ? '' : 'lame';
    myButton.style.backgroundColor = enabled ? 'yellow' : 'red'
    myButton.style.backgroundImage = enabled ? 'url(https://upload.wikimedia.org/wikipedia/ru/7/78/Trollface.svg)' : ''
    chrome.storage.local.set({enabled:enabled});
};

   