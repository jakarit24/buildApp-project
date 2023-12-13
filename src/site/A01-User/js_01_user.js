import $ from "jquery";

$(document).ready(function () {

    
  $("#id-btn-profile").click(function () {
    $(".zone-right .zone-show").addClass("d-none");
    $(".zone-profile").removeClass("d-none");
    $(".zone-profile").addClass("active");
  });

  $("#id-btn-detail").click(function () {
    $(".zone-right .zone-show").addClass("d-none");
    $(".zone-detail").removeClass("d-none");
    $(".zone-detail").addClass("active");
  });



});
