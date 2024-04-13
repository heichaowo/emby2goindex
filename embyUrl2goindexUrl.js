// 每个变量最后都没有"/"
var embyUrl = "你的rclone路径";
var goindexUrl = "https://你的主机IP或域名/0:";
var previewUrl = "https://你的主机IP或域名/0:video";

// Helper function to process URLs by encoding URI components (for NPlayer and PotPlayer)
function processUrlURI(originalUrl) {
    const pathOnly = originalUrl.replace(embyUrl, ""); // Remove base path
    const encodedPath = pathOnly.split('/').map(part => encodeURIComponent(part)).join('/'); // Encode each part of the path
    return encodedPath;
}

// Helper function to process URLs by Base64 encoding (for Goindex)
function processUrlBase64(originalUrl) {
    const pathOnly = originalUrl.replace(embyUrl, ""); // Remove base path
    const pathWithPrefix = "/0:" + pathOnly; // Add "/0:" prefix
    const encodedPath = btoa(unescape(encodeURIComponent(pathWithPrefix))); // Base64 encode the URI
    const finalPath = encodedPath.replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
    return finalPath;
}

// Function to dynamically add buttons to the page
function addButton(container, id, icon, text, onclick) {
    if (!document.getElementById(id)) {
        var buttonHTML = `<button is="emby-button" id="${id}" type="button" class="detailButton emby-button ${id}" onclick="${onclick}()">
            <div class="detailButton-content">
                <i class="md-icon detailButton-icon">${icon}</i>
                <div class="detailButton-text">${text}</div>
            </div>
        </button>`;
        container.innerHTML += buttonHTML;
    }
}

// Timer functions to add buttons dynamically
var timer1 = setInterval(function() {
    var mainDetailButtons = document.querySelector("div[is='emby-scroller']:not(.hide) .mainDetailButtons");
    if (mainDetailButtons) {
        addButton(mainDetailButtons, "nplayer", "", "Nplayer播放", "nplayeropen");
        addButton(mainDetailButtons, "potplayer", "", "Potplayer播放", "potplayeropen");
        addButton(mainDetailButtons, "wangpan", "", "打开网盘", "wangpanopen");
    }
}, 1000); // Check every second

// NPlayer播放功能
function nplayeropen() {
    const mediaUrlElement = document.querySelector("div.mediaSource .sectionTitle div");
    if (mediaUrlElement) {
        const processedUrl = `nplayer://${goindexUrl + processUrlURI(mediaUrlElement.textContent)}`;
        console.log("NPlayer URL:", processedUrl);
        window.open(processedUrl);
    }
}

// PotPlayer播放功能
function potplayeropen() {
    const mediaUrlElement = document.querySelector("div.mediaSource .sectionTitle div");
    if (mediaUrlElement) {
        const processedUrl = `potplayer://${goindexUrl + processUrlURI(mediaUrlElement.textContent)}`;
        console.log("PotPlayer URL:", processedUrl);
        window.open(processedUrl);
    }
}

// 打开网盘功能，使用Base64编码
function wangpanopen() {
    const mediaUrlElement = document.querySelector("div.mediaSource .sectionTitle div");
    if (mediaUrlElement) {
        const processedUrl = previewUrl + "/" + processUrlBase64(mediaUrlElement.textContent);
        console.log("打开网盘 URL:", processedUrl);
        window.open(processedUrl);
    }
}