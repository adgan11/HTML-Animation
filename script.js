let secondSlideWords = ["By", "opening", "the", "door", "to", "people", "from", "wider", "range", "of", "backgrounds,", "you're", "making", "the", "sector", "a", "better", "place."];
let children = document.getElementsByClassName("head-line");

setTimeout(function () {
    for (let i = 0; i < children.length; i++) {
        children[i].innerHTML = secondSlideWords[i];
    }
}, 4900);

setTimeout(function () {
    for (let i = 0; i < children.length; i++) {
        //pause the animation
        children[i].style.animationPlayState = "paused";
    }
}, 7500);
