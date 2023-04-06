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

    $("#rate").click(function () {
        const rate = $(this).val();
        Spoke.rate = rate;
    })
})

let Spoke;

function myFunction() {
    window.speechSynthesis;
    const text = document.getElementById("mybox").value;
    Spoke = new SpeechSynthesisUtterance(text);
    const rate = $("#rate").val();
    Spoke.rate = rate;
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