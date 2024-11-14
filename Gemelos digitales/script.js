function toggleText() {
    const moreText = document.getElementById("more-text");
    const button = document.getElementById("toggle-button");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        button.textContent = "Ver menos";
    } else {
        moreText.style.display = "none";
        button.textContent = "Ver más";
    }
}