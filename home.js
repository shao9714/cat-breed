
function init() {
  document.getElementById("breed-input").addEventListener('keypress', function(e){
      if (e.keyCode === 13) {
          document.getElementById("cat-images").innerHTML="";
          var breed = document.getElementById("breed-input").value;
          console.log(breed);
          $.ajax({
            type: 'GET',
            url: '/cat',
            dataType: 'application/json',
            data: {
              "breed": breed
            },
            complete: function(response) {
              var res = JSON.parse(response.responseText);

              document.getElementById("cat-images").innerHTML="";

              if (breed.toLowerCase() !== res.breed_name.toLowerCase() && res.breed_name !== "no_result") {
                var p = document.createElement('p');
                p.innerHTML = "Did you mean \"" + res.breed_name + "\"?";
                document.getElementById("cat-images").appendChild(p);
              }

              if (res.imagesUrl.length == 0) {
                var p = document.createElement('p');
                var no_name = res.breed_name == "no_result" ? breed : res.breed_name;
                p.innerHTML = "There are no results for \"" + no_name + "\" yet :(";
                document.getElementById("cat-images").appendChild(p);
              }
              
              for (var i=0; i<res.imagesUrl.length; i++) {
                var img = new Image();
                img.src=res.imagesUrl[i];
                document.getElementById("cat-images").appendChild(img);
              }
            }
          });
      }
  });
}