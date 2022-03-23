const ftext = document.getElementById("footer-link-text")
const farrow = document.getElementById("footer-arrow")
window.onscroll = function() {
    const div = document.querySelector("footer")
    const { top: t } = div.getBoundingClientRect()
    const { scrollX } = window
    const topPos = t + scrollX

    if (topPos < 650) {
        ftext.style.opacity = "0" //hide text
        farrow.style.display = "none" // hide arrow
        ftext.style.transition = "0.25s"
        ftext.style.cursor = "default" //change cursor on text
        farrow.style.cursor = "default" //change cursor on arrow
    } else {
        ftext.style.opacity = "100" //show text
        ftext.style.transition = "0.25s"
        farrow.style.display = "block"
        ftext.style.cursor = "pointer" //change cursor on text
        farrow.style.cursor = "pointer" //change cursor on arrow
    }
};

function openNav() {
    if (window.matchMedia("(max-width: 1050px)").matches) {
        document.getElementById("footer").style.marginLeft = "0";
        disableScroll();
    }
}

function closeNav() {
    if (window.matchMedia("(max-width: 1050px)").matches) {
        document.getElementById("footer").style.marginLeft = "-100vw";
        enableScroll();
    }
}

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function() { supportsPassive = true; }
    }));
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.addEventListener(wheelEvent, preventDefault, wheelOpt);
    window.addEventListener('touchmove', preventDefault, wheelOpt);
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}