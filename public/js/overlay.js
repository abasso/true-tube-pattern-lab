var overlayBtn = document.querySelectorAll('.c-btn--overlay');
for (i = 0; i < overlayBtn.length; i++) {
  overlayBtn[i].addEventListener('click', function() {
  	this.parentNode.classList.add("c-overlay--is-hidden");
  });
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
  $('[data-toggle="popover"]').popover()
})

$(function(){
    // Enables popover #1
    //$("[data-toggle=popover]").popover();

    $(".video-download").popover({
        html : true,
        placement: "bottom",
        content: function() {
          return $(".video-download-content").html();
        }
    });
});
