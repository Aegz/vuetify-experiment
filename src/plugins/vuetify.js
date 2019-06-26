import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// Variable override file
import '../styles/variables.styl';
// import 'vuetify/src/stylus/app.styl';
// Use an override style sheet
import '../styles/core.styl';

Vue.use(Vuetify, {
    theme: {
        primary: '#006deb',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    },
    options: {
        customProperties: true
    },
    iconfont: 'fa'
});
