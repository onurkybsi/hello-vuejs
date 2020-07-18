window.addEventListener("load", () => {
  // Vue.component is a Vue instance that data, computed, watch, methods, and lifecycle hooks like Vue instance below.
  Vue.component("first-component", {
    // data must be a function
    data: function () {
      return {
        count: 0,
      };
    },
    template:
      '<button v-on:click="count++">You clicked {{ count }} times.</button>',
  });

  Vue.component("component-with-props", {
    props: ["message"],
    template: "<h3>{{message}}</h3>",
  });

  // every component must have a single root element
  // the child component can emit an event on itself by calling the built-in $emit method
  Vue.component("component-can-communicate-with-parent", {
    props: ["message"],
    template: `
    <div>
    <h3>{{message}}</h3>
    <button v-on:click="$emit('enlarge', 0.1)">Enlarge</button>
    </div>
    `,
  });

  Vue.component("custom-input", {
    props: ["value"],
    template: `
      <input
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    `,
  });

  Vue.component("component-with-slot", {
    template: `
      <div>
        <strong>You can write HTML inside the slot in the HTML document</strong>
        <slot></slot>
      </div>
    `,
  });

  var app = new Vue({
    el: "#app",
    data: {
      messages: ["Message1", "Message2", "Message3"],
      fontSizeOfParent: 1,
    },
    methods: {
      enlargeDiv: function (val) {
        this.fontSizeOfParent += val;
      },
    },
  });
});
