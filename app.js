window.addEventListener("load", () => {
  var app = new Vue({
    el: "#app",
    data: {
      activeColor: "red",
      fontSize: 30,
      styleData: {
        backgroundColor: "green",
        fontSize: 50,
      },
      borderStyle: "solid",
      backgroundColor: "yellow",
    },
  });
});
