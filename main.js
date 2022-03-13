import Vue from 'vue';
import App from './App.vue';
import VueToggles from 'vue-toggles';

import Slideout from '@hyjiacan/vue-slideout';
import '@hyjiacan/vue-slideout/lib/slideout.css';

///Button toggle
Vue.component('VueToggles', VueToggles);
Vue.config.productionTip = false;

//SlidePanel
// import Slideout component, and set the defaults props
Vue.use(Slideout, {
	// set default props here
});

new Vue({
	el: '#app',
	render: (h) => h(App),
});
