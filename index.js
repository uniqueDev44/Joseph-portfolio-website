const menuToggle = document.querySelector(".js-menu-toggle");
const cancelBar = document.querySelector(".js-cancel-menu");
const navigation = document.querySelector(".js-navigation");

menuToggle.addEventListener("click", () => {
  navigation.classList.add("active");
  menuToggle.classList.add("hidden");
  cancelBar.classList.add("show");
});

cancelBar.addEventListener("click", () => {
  navigation.classList.remove("active");
  menuToggle.classList.remove("hidden");
  cancelBar.classList.remove("show");
});

function closeMenu() {
  navigation.classList.remove("active");
  menuToggle.classList.remove("hidden");
  cancelBar.classList.remove("show");
}

function openMenu() {
  navigation.classList.add("active");
  menuToggle.classList.add("hidden");
  cancelBar.classList.add("show");
}

menuToggle.addEventListener("click", openMenu);
cancelBar.addEventListener("click", closeMenu);

// Close when clicking the overlay (nav background area) or any nav link
navigation.addEventListener("click", closeMenu);

document.querySelectorAll(".js-navigation a").forEach((link) => {
  link.addEventListener("click", (e) => {
    closeMenu();
  });
});
