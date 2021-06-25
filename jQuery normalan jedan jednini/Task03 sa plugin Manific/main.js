$(document).ready(function () {
  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";
      },
    },
  });
    
    
    var randomNumb = function () {
      return Math.floor(200 + Math.random() * 300);
    };

    setInterval(
      $("img").each(function (index, element) {
        var ran = randomNumb();
        $(element).css("width", ran + "px");
      }),
      1000
    );
});
