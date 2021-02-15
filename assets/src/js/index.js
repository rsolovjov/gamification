// импортируем jQuery
//= ../../../node_modules/jquery/dist/jquery.js

// импортируем Popper
//= ../../../node_modules/popper.js/dist/umd/popper.js

// импортируем необходимые js-файлы Bootstrap 4
//= ../../../node_modules/bootstrap/js/dist/util.js
//= ../../../node_modules/bootstrap/js/dist/alert.js
//= ../../../node_modules/bootstrap/js/dist/button.js
//= ../../../node_modules/bootstrap/js/dist/carousel.js
//= ../../../node_modules/bootstrap/js/dist/collapse.js
//= ../../../node_modules/bootstrap/js/dist/dropdown.js
//= ../../../node_modules/bootstrap/js/dist/modal.js
//= ../../../node_modules/bootstrap/js/dist/tooltip.js
//= ../../../node_modules/bootstrap/js/dist/popover.js
//= ../../../node_modules/bootstrap/js/dist/scrollspy.js
//= ../../../node_modules/bootstrap/js/dist/tab.js
//= ../../../node_modules/bootstrap/js/dist/toast.js

function changeLang(value) {
  if (value === "ru") {
    $('[lang="ru"]').show();
    $('[lang="en"]').hide();
  }

  if (value === "en") {
    $('[lang="ru"]').hide();
    $('[lang="en"]').show();
  }
}

$(function () {
  var lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru";
  localStorage.setItem("lang", lang);
  $("#switch-lang").val(lang);
  changeLang(lang);

  $("#switch-lang").on("change", function () {
    var value = $("#switch-lang").val();
    changeLang(value);
    localStorage.setItem("lang", value);
  });
});
