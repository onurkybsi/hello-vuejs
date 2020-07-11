window.addEventListener("load", () => {
  var app = new Vue({
    el: "#app",
    data: {
      message: "Hello",
    },
    computed: {
      reversedMessage: function () {
        return this.message.split("").reverse().join("");
      },
    },
  });
});
