const btnBar = document.getElementById("btnBar");
const mobileMenu = document.getElementById("mobileMenu");
btnBar.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

let navLink = document.getElementsByClassName("nav-link");
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    navLink[i].classList.add("bg-gray-400");
    for (let u = 0; u < navLink.length; u++) {
      if (navLink[u] != navLink[i]) {
        navLink[u].classList.remove("bg-gray-400");
      }
    }
  });
}
