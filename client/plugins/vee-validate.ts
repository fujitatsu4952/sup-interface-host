// 初期設定は以下から
// https://qiita.com/sendaiharu1/items/b8a9fc03ff3e6de522a4

import Vue from 'vue';
import { ValidationProvider, ValidationObserver, configure, localize, extend } from 'vee-validate';

import ja from 'vee-validate/dist/locale/ja.json';
localize('ja', ja);

import { required, max, min, email, integer, confirmed, regex, min_value, max_value, double } from 'vee-validate/dist/rules';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
// 共通で変更したいoptionがあれば
configure({
    bails: false,
});

// 必要なruleを追加していく
extend('required', { ...required });
extend('max', { ...max });
extend('min', { ...min });
extend('email', { ...email });
extend('integer', { ...integer });
extend('confirmed', confirmed);
extend('regex', { ...regex });
extend('min_value', min_value);
extend('max_value', max_value);
extend('double', { ...double });
