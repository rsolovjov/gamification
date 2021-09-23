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

$(function () {
  $("#switch-lang").on("change", function () {
    var value = $("#switch-lang").val();
    var domain = window.location.domain;
    var path = window.location.pathname;
    var parts = path.split('.');
    var name = parts[0];

    if (value === "ru" && !name.includes('ru')) {
      window.location = name + '-ru.html'
    } else {
      var nameParts = name.split('-');
      var index = nameParts.length - 1;
      nameParts.splice(index, 1);

      var exludeLang = nameParts.join('-');
      window.location = exludeLang + '.html'

    }
  });
});
