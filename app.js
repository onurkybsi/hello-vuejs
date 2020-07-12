window.addEventListener("load", () => {
  var app = new Vue({
    el: "#app",
    data: {
      success: true,
      alertClass: "alert",
      failureClass: "alert-danger",
    },
  });
});
