function navbar() {
    let x = documen.getElementById("MyTopnav")
    if (x.className === "topnav") {
        x.className +=" responsive";
    } else {
        x.className = "topnav";
    }
}