$(document).ready(function () {
    $("#sub-btn").click(function () {
        myFunction();
    });
})

function myFunction() {
    window.speechSynthesis;
    const text = document.getElementById("mybox").value;
    const Spoke = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(Spoke);
}

