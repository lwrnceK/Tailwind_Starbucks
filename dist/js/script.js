const favoritesNav= document.querySelectorAll(".favorites__nav__link");
const faveContent = document.querySelectorAll(".fav__item__content");
favoritesNav.forEach((favorites) => {
    favorites.addEventListener("click", () => {
    removeActiveFavorites();
    favorites.style = "transition:.5s ease";
    favorites.classList.add("active");
    favorites.style = "transition:.5s ease";
    const activeContent = document.querySelector(`#${favorites.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
 });
});

function removeActiveFavorites() {
  favoritesNav.forEach((favorites) => {
    favorites.classList.remove("active");
  });
}

function removeActiveContent() {
  faveContent.forEach((favorites) => {
  favorites.classList.remove("active");
  });
}




// const kalboNav = document.querySelectorAll(".kalbo__nav__link");
// const kalboContent = document.querySelectorAll(".kalbo__item__content");
// kalboNav.forEach((kalbo) => {
//     kalbo.addEventListener("click", () => {
//     removeActiveKalbo();
//     kalbo.style = "transition:.5s ease";
//     kalbo.classList.add("active");
//     kalbo.style = "transition:.5s ease";
//     const activeContent = document.querySelector(`#${kalbo.id}-content`);
//     removeActiveContent();
//     activeContent.classList.add("active");
//  });
// });

// function removeActiveKalbo() {
//   kalboNav.forEach((kalbo) => {
//     kalbo.classList.remove("active");
//   });
// }

// function removeActiveContent() {
//   kalboContent.forEach((kalbo) => {
//   kalbo.classList.remove("active");
//   });
// }

const headerNav = document.querySelector(".header__nav");
const toggleMenu = document.querySelector(".toggle__menu");
toggleMenu.addEventListener("click", () => {
headerNav.classList.toggle("open");
});