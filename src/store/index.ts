import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

import { firebaseConfig } from '@/firebaseConfig';

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage().ref();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    db,
    firebase,
    storage,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    usersCollection(state) {
      return state.db.collection('user-logins');
    },
    auth(state) {
      return state.firebase.auth();
    },
  },
});
