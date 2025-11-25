const footer = document.querySelector("footer, #footer");
if (footer && !document.getElementById("ppplus-branding")) {
    const tag = document.createElement("div");
    tag.id = "ppplus-branding";
    tag.textContent = "Enhanced by Pinpoint Plus";
    footer.appendChild(tag);
}
document.title = document.title + " — Enhanced by Pinpoint Plus";
(function () {
    const url = chrome.runtime.getURL("icons/favicon.png");

    // Remove existing favicons
    document.querySelectorAll('link[rel~="icon"]').forEach(e => e.remove());
    document.querySelectorAll('link[rel="shortcut icon"]').forEach(e => e.remove());

    // Insert your favicon
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = url;

    document.head.appendChild(link);
})();
// Remove bg5.png from ANY element using it
const elems = document.querySelectorAll("[style*='bg5.png']");
elems.forEach(el => {
    el.style.background = "none";
    el.style.backgroundImage = "none";
});




// Inject control bar
// const controlBar = document.createElement("div");
// controlBar.id = "pinpointControlBar";
// controlBar.innerHTML = `
  //<div class="control-inner">
    //<span class="logo">📊 Pinpoint Plus</span>
    //<button id="toggleTheme">Dark Mode</button>
    //<button id="compactToggle">Compact Layout</button>
  //</div>

//document.body.appendChild(controlBar);

// Event: Theme toggle
//let darkMode = false;
//document.getElementById("toggleTheme").addEventListener("click", () => {
  //darkMode = !darkMode;
  //document.body.classList.toggle("dark-mode", darkMode);
  //document.getElementById("toggleTheme").textContent = darkMode ? "Light Mode" : "Dark Mode";
////});

// Event: Compact layout toggle
//let compact = false;
//document.getElementById("compactToggle").addEventListener("click", () => {
  //compact = !compact;
  //document.body.classList.toggle("compact-layout", compact);
  //document.getElementById("compactToggle").textContent = compact ? "Default Layout" : "Compact Layout";
//});
// Remove any inline styles or classes that fight your overrides
//ocument.querySelectorAll("*").forEach(el => {
  //if (el.style && el.style.backgroundColor && el.style.backgroundColor !== "transparent") {
    //el.style.backgroundColor = "";
  //}
  //el.classList.remove("active"); // clears old navbar highlighting
//});

// Optional: change page title
//document.title = "Pinpoint Plus – Enhanced Dark Interface";

