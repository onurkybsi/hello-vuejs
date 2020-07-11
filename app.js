window.addEventListener("load", () => {
  var app = new Vue({
    el: "#app",
    data: {
      firstname: "Onur",
      lastname: "Kayabasi",
    },
    // computed properties are by default read-only
    // but they have setter func
    computed: {
      fullname: {
        get: function () {
          return `${this.firstname} ${this.lastname}`;
        },
        set: function (newValue) {
          let names = newValue.split("");
          this.firstname = names[0];
          this.lastname = names[names.length - 1];
        },
      },
    },
  });
});
