AOS.init();

function toggleEmail() {
    var emailButton = document.getElementById("email");

    if (emailButton.style.display === "none") {
        emailButton.style.display = "inline-block";
    } else {
        emailButton.style.display = "none";
    }
}