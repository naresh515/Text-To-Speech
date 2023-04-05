$(document).ready(function () {
    $("#sub-btn").click(function () {
        myFunction();
    });
    $("#pause-btn").click(function () {
        pause();
    });
    $("#stop-btn").click(function () {
        stop();
    });
})

function myFunction() {
    window.speechSynthesis;
    const text = document.getElementById("mybox").value;
    const Spoke = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(Spoke);
}

function pause() {
    if (!speechSynthesis.paused) {
        speechSynthesis.pause();
    } else {
        speechSynthesis.resume();
    }
}

function stop() {
    speechSynthesis.cancel();
}