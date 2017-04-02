chrome.runtime.onInstalled.addListener(function() {
 
    console.log("bookmark search exporter extention Installed.");
 
    var bm_urls = new Array();
 
    function fetch_bookmarks(parentNode) {
        parentNode.forEach(function(bookmark) {
            if(! (bookmark.url === undefined || bookmark.url === null)) {
                bm_urls.push(bookmark);
            }
            if (bookmark.children) {
                fetch_bookmarks(bookmark.children);
            }
        });
    }
 
    chrome.bookmarks.getTree(function(rootNode) {
        fetch_bookmarks(rootNode);
        console.log(JSON.stringify(bm_urls));
    });
});
 
 
chrome.bookmarks.onCreated.addListener(function(id, bookmark) {
    console.log("bookmark added .. " +  bookmark.url);
});
 
chrome.bookmarks.onRemoved.addListener(function(id, removeInfo) {
    console.log("bookmark removed .. " +  id);
});
 
chrome.bookmarks.onChanged.addListener(function(id, changeInfo){
    console.log("bookmark changed .. " +  id);
});