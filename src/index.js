import Vue from "vue";
import Buefy from "buefy";
import "buefy/lib/buefy.css";

Vue.use(Buefy);

import App from "./App.vue";

// import Font Awesome
import fontawesome from "@fortawesome/fontawesome";

// import font awesome icon
import faThumbsUp from "@fortawesome/fontawesome-free-regular/faThumbsUp";

fontawesome.library.add(faThumbsUp);

new Vue({
  render: h => h(App)
}).$mount("#root");
