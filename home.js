
function init() {
  document.getElementById("breed-input").addEventListener('keypress', function(e){
      if (e.keyCode === 13) {
          // do ajax call here
          console.log("enter pressed");
      }
  });
}