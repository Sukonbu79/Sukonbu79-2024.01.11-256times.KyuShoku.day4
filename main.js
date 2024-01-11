"use strict";

{
  // menu

  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const list = document.getElementById("list");

  open.addEventListener("click", () => {
    list.classList.add("show");
    close.classList.add("show");
    open.classList.add("hide");
  });

  close.addEventListener("click", () => {
    list.classList.remove("show");
    close.classList.remove("show");
    open.classList.remove("hide");
  });

  // heroSlideShow

  const thumbnails = document.querySelectorAll(".thumb");
  const mainImage = document.getElementById("main-image");
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  let activeIndex = 0;

  thumbnails[0].addEventListener("click", () => {
    activeIndex = 0;
    mainImage.src = thumbnails[0].src;
    thumbnails[0].classList.add("active");
    thumbnails[1].classList.remove("active");
    thumbnails[2].classList.remove("active");
    thumbnails[3].classList.remove("active");
    thumbnails[4].classList.remove("active");
  });

  thumbnails[1].addEventListener("click", () => {
    activeIndex = 1;
    mainImage.src = thumbnails[1].src;
    thumbnails[1].classList.add("active");
    thumbnails[0].classList.remove("active");
    thumbnails[2].classList.remove("active");
    thumbnails[3].classList.remove("active");
    thumbnails[4].classList.remove("active");
  });

  thumbnails[2].addEventListener("click", () => {
    activeIndex = 2;
    mainImage.src = thumbnails[2].src;
    thumbnails[2].classList.add("active");
    thumbnails[0].classList.remove("active");
    thumbnails[1].classList.remove("active");
    thumbnails[3].classList.remove("active");
    thumbnails[4].classList.remove("active");
  });

  thumbnails[3].addEventListener("click", () => {
    activeIndex = 3;
    mainImage.src = thumbnails[3].src;
    thumbnails[3].classList.add("active");
    thumbnails[0].classList.remove("active");
    thumbnails[1].classList.remove("active");
    thumbnails[2].classList.remove("active");
    thumbnails[4].classList.remove("active");
  });

  thumbnails[4].addEventListener("click", () => {
    activeIndex = 4;
    mainImage.src = thumbnails[4].src;
    thumbnails[4].classList.add("active");
    thumbnails[0].classList.remove("active");
    thumbnails[1].classList.remove("active");
    thumbnails[2].classList.remove("active");
    thumbnails[3].classList.remove("active");
  });

  next.addEventListener("click", () => {
    activeIndex++;
    if (activeIndex === thumbnails.length) {
      activeIndex = 0;
    }
    mainImage.src = thumbnails[activeIndex].src;
    thumbnails[0].classList.remove("active");
    thumbnails[1].classList.remove("active");
    thumbnails[2].classList.remove("active");
    thumbnails[3].classList.remove("active");
    thumbnails[4].classList.remove("active");
    thumbnails[activeIndex].classList.add("active");
  });

  prev.addEventListener("click", () => {
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = thumbnails.length - 1;
    }
    mainImage.src = thumbnails[activeIndex].src;
    thumbnails[0].classList.remove("active");
    thumbnails[1].classList.remove("active");
    thumbnails[2].classList.remove("active");
    thumbnails[3].classList.remove("active");
    thumbnails[4].classList.remove("active");
    thumbnails[activeIndex].classList.add("active");
  });

  // contact-form
  const contactForm = document.getElementById("contact-form");
  const contactOpen = document.getElementById("contact-open");
  const contactClose = document.getElementById("contact-close");

  contactOpen.addEventListener("click", () => {
    contactForm.classList.remove("hide-down");
    contactClose.classList.remove("contact-hide");
    contactOpen.classList.add("contact-hide");
  });

  contactClose.addEventListener("click", () => {
    contactForm.classList.add("hide-down");
    contactClose.classList.add("contact-hide");
    contactOpen.classList.remove("contact-hide");
  });
}
