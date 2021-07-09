let $searchInput = $("#search");
let $resultWrapper = $("#result-wrapper");

$searchInput.keydown(function (e) {
  if (e.keyCode == 13) {
    let $subject = $searchInput.val();
    $.ajax({
      url: `https://api.github.com/search/users?q=${$subject}+in:user`,
      type: "GET",
      dataType: "json",
    }).done(function (response) {
      if (response.length == 0) {
        $responseBox.text("No resutls match")
      }
      console.log(response);
      response.items.forEach((element) => {
        let $responseBox = $("<div>");
        $responseBox.html(
          `<div class="img-handler"><img src="${element.avatar_url}"></div><a href="${element.html_url}" target="_blank"><h3>${element.login}</h3></a>`
        );
        $resultWrapper.append($responseBox);
        $responseBox.addClass("response-box");
      });
    });
  }
});
