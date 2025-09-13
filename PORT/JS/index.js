window.addEventListener("message", function(e) {
    if (e.data.iframeHeight) {
        // Find the matching iframe (by src)
        document.querySelectorAll(".myIframe").forEach(function(iframe) {
            if (iframe.src === e.data.src) {
                iframe.style.height = e.data.iframeHeight + "px";
            }
        });
    }
});