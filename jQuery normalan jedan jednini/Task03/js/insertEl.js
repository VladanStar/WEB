$(function() {
  var images = [
    "./images/player1.jpg",
    "./images/player2.jpg",
    "./images/player3.jpg",
    "./images/player4.jpg",
    "./images/player5.jpg",
    "./images/player6.jpg",
    "./images/player7.jpg",
    "./images/player8.jpg",
    "./images/player9.jpg",
    "./images/player10.jpg",
    "./images/player11.jpg",
    "./images/player12.jpg"
  ];

  for (var i = 0; i < images.length; i++) {
    var img = $("<img>");
    $("div").append(img);

    $("img").each(function(index, element) {
      $(element).attr("src", images[index]);
    });
  }

  $("div").prepend("<h1>Players</h1>");

  var randomNumb = function() {
    return Math.floor(200 + Math.random() * 300);
  };

  setInterval(
    $("img").each(function(index, element) {
      var ran = randomNumb();
      $(element).css("width", ran + "px");
    }),
    1000
  );
  
});
