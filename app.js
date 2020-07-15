window.addEventListener("load", () => {
  var app = new Vue({
    el: "#app",
    data: {},
    methods: {
      say: function (message) {
        alert(message);
      },
      warn: function (message, event) {
        if (event) {
          event.preventDefault();
        }
        alert(message);
      },
      doThis: function () {
        alert("Event propagation stopped");
      },
      enter: function () {
        alert("You pressed enter");
      },
      ctrlClick: function () {
        alert("You pressed CTRL and then click");
      },
    },
  });
});
