// Load all icon frames
const frames = [
    "icons/frame1.png",
    "icons/frame2.png",
    "icons/frame3.png",
    "icons/frame4.png"
];

let index = 0;

// 250ms per frame = smooth animation
setInterval(() => {
    chrome.action.setIcon({ path: frames[index] });
    index = (index + 1) % frames.length;
}, 250);
