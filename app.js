window.addEventListener("load", () => {
  var app = new Vue({
    el: "#app",
    data: {
      euro: "",
      dollar: "Please write the amount of money in euro",
    },
    watch: {
      // whenever question changes, this function will run
      euro: function (newEuro, oldEuro) {
        this.dollar = "Waiting typing for the amount of euro...";
        this.debouncedGetAnswer();
      },
    },
    created: function () {
      // _.debounce is a function provided by lodash library to limit how often a particularly expensive operation can be run.
      this.debouncedGetAnswer = _.debounce(this.getAmountOfMoneyInDolar, 500);
    },
    methods: {
      getAmountOfMoneyInDolar() {
        if (!Number.isInteger(parseInt(this.euro))) {
          this.dollar = "The value entered must be an integer!";
          return;
        }

        this.dollar = "Calculating...";

        let app = this;

        axios
          .get("https://api.exchangeratesapi.io/latest")
          .then(function (response) {
            app.dollar = parseInt(app.euro) / response.data.rates.USD + " $";
          })
          .catch(function (error) {
            app.dollar = "Error! Could not reach the API. " + error;
          });
      },
    },
  });
});
