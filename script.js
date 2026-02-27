const toggleDrawerButton = document.getElementById("toggleDrawer");
const drawer = document.getElementById("drawer");

if (toggleDrawerButton && drawer) {
  toggleDrawerButton.addEventListener("click", () => {
    drawer.classList.toggle("open");
  });
}
