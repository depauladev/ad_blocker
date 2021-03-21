chrome.webRequest.onBeforeRequest.addListener(
    details => {
        console.log("Blocked: ", details.url)
        
        return {
            cancel: true
        }
    },
    {
        urls: ad_urls
    },
    ["blocking"]
)