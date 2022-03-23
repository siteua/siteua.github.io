if (window.matchMedia("(max-width: 1050px)").matches) {
    document.getElementById("nav_text").textContent = "Навігація";
}

function openNav() {
    if (window.matchMedia("(max-width: 1050px)").matches) {
        document.getElementById("nav").style.width = "100vw";
        document.getElementById("main").style.marginLeft = "100vw";
        disableScroll();
    }
}

function closeNav() {
    if (window.matchMedia("(max-width: 1050px)").matches) {
        document.getElementById("nav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
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