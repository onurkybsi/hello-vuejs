window.addEventListener("load", () => {
  var app = new Vue({
    el: "#app",
    data: {
      array: [{ message: "item1" }, { message: "item2" }],
      iterableObject: {
        prop1: "value1",
        prop2: "value2",
        prop3: "value3",
      },
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    computed: {
      evenNumbers: function () {
        return this.numbers.filter(function (number) {
          return number % 2 === 0;
        });
      },
    },
  });
});
