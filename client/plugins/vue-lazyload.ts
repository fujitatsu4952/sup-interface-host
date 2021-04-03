import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'https://dev-host.lost-boys-sup.com/assets/sports_paddleboard.png',
    loading: 'https://dev-host.lost-boys-sup.com/assets/sports_paddleboard.png',
    attempt: 1,
});
