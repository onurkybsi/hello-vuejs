runAfterCreation = () => {
  alert("Created!");
};

let color = ["green", "red", "blue", "gray"];

window.addEventListener("load", () => {
  var app = new Vue({
    el: "#app",
    data: {
      num: 0,
      background: color[0],
    },
    methods: {
      increase: function () {
        this.num = this.num + 1;
      },
    },
    // The created hook can be used to run code after an instance is created (lifecycle hooks)
    created: runAfterCreation,
  });

  let i = 0;

  // Vue instances expose a number of useful instance properties and methods.
  // These are prefixed with $ to differentiate them from user-defined properties.
  app.$watch("num", function (newValue, oldValue) {
    i++;
    this.background = color[i % 4];
    // This callback will be called when `app.num` changes
  });
});
