function barToggle() {

    let defbar = false; // hide aside bar by default
    document.querySelector(".bar i").addEventListener("click", () => {
        if (defbar === false) {
            document.querySelector("aside").style.display = "block";
            defbar = true;
            console.log("clicked");
        } else {
            document.querySelector("aside").style.display = "none";
            defbar = false;
        }
    });
}

barToggle();