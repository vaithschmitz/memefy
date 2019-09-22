let memeToggle = document.getElementById('memeToggle');


chrome.runtime.onMessage.addListener(
    function(message, callback) {
    
      if (message == “runContentScript”){
        memeToggle.onclick = chrome.tabs.executeScript({
            file: 'content.js'
        });
      }
   });
  
