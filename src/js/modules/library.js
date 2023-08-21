export function mansory() {
  function libraryMasonry() {
    var elem = document.querySelector(".grid");
    var msnry = new Masonry(elem, {
      itemSelector: ".grid-item",
      gutter: 43,
      fitWidth: true,
    });
  }
  libraryMasonry();

  function librarySwiper() {
    var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
    });
  }
  librarySwiper();
}
