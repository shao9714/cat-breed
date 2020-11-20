function init() {
  document
    .getElementById("breed-input")
    .addEventListener("keypress", function (e) {
      if (e.keyCode === 13) {
        let limit = document.getElementById("number-limit");
        console.log(limit.value);
        var breed = document.getElementById("breed-input").value;
        console.log(breed);
        $.ajax({
          type: "GET",
          url: "/cat",
          dataType: "application/json",
          data: {
            breed: breed,
            limit: limit.value,
          },
          complete: function (response) {
            var res = JSON.parse(response.responseText);
            for (var i = 0; i < res.imagesUrl.length; i++) {
              var img = new Image();
              img.src = res.imagesUrl[i];
              document.getElementById("cat-images").appendChild(img);
            }
          },
        });
      }
    });
}
