$(document).ready(function () {
    $("#sub-btn").click(function () {
        myFunction();
    });
})

function myFunction() {
    window.speechSynthesis.cancel();
    const text = document.getElementById("mybox").value;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}

