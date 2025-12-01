function sendHeight() {
    parent.postMessage(
        { iframeHeight: document.body.scrollHeight, src: window.location.href},
        "*"
    );
}
window.onload = sendHeight;
window.onresize = sendHeight; // if content resizes