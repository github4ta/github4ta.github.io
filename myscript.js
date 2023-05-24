(function(document) {
   var shareButtons = document.querySelectorAll(".st-custom-button[data-network]");
   for(var i = 0; i < shareButtons.length; i++) {
      var shareButton = shareButtons[i];
      
      shareButton.addEventListener("click", function(e) {
         var elm = e.target;
         var network = elm.dataset.network;
         
         console.log("share click: " + network);
      });
   }
})(document);
