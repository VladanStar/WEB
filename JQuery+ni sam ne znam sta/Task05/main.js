var arrImg = [];
var body = $("body");
var img_1 = 'images.jpg';
var img_2 = 'images1.jpg';
var img_3 = 'download.jpg';
arrImg.push(img_1);
arrImg.push(img_2);
arrImg.push(img_3);
for (var i = 0; i < arrImg.length; i++) {
  var aTag = $("<a>");
  aTag.addClass("image-popup-fit-width");
  var img = $("<img>");
  aTag.attr("href", arrImg[i]);
  img.attr("src", arrImg[i]);
  aTag.append(img);
  $("body").append(aTag);
}
$(document).ready(function () {
  $(".image-popup-vertical-fit").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    mainClass: "mfp-img-mobile",
    image: {
      verticalFit: true,
    },
  });
  $(".image-popup-fit-width").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    image: {
      verticalFit: false,
    },
  });
  $(".image-popup-no-margins").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
    },
  });
 var galerryTitle = "<h1>Najlepsi konji</h1>";
 $("body").prepend(galerryTitle);


    //adding random widths to images:
    var randomArray = [];
    for (var i = 0; i < 6; i++) {
      randomArray.push(parseInt(Math.random() * 1000) + "px");
    }
    var images = $("img");
    for (var i = 0; i < 6; i++) {
      $(images[i]).attr("width", randomArray[i]);
    }

    //Bonus:
    $(images).each(function (image) {
      // console.log(this.width);
      if ($(this).width() < 1000) {
        this.style.border = "5px solid green";
      } else {
        this.style.border = "none";
        return false;
      }
    });

});
