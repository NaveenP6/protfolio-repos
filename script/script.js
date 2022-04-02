function navbar() {
    let x = document.getElementById("MyTopnav")
    if (x.className === "topnav") {
        x.className +=" responsive";
    } else {
        x.className = "topnav";
    }
}
function toggleNav() {
      document.body.classList.toggle("nav-open");
    }