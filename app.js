// NAVIGATION BAR
const hamburger = document.querySelector(".hamburger");

const listItem = document.querySelector(".active");

hamburger.addEventListener("click", (e) => {
   listItem.classList.toggle("show-navbar")
})



// FAQ SECTION

const accordion = document.querySelector(".faq__section");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classlist.toggle("show-accordion");
  });
}

