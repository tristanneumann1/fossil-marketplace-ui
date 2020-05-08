import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0A516D',
        secondary: '#018790',
        accent: '#BACCA4',
        error: '#7DAD93',
      },
    },
  },
});
