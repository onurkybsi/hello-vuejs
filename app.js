window.addEventListener("load", () => {
  var app = new Vue({
    el: "#app",
    data: {
      data1: "message",
      data2: "message2",
      isButtonDisabled: true,
      num: 4,
      seen: true,
      url: "https://github.com/onurkybsi",
      event: "click",
    },
    methods: {
      doSomething: function () {
        alert("Hi Vue.js!");
      },
    },
  });
});
