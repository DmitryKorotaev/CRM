import firebase from "firebase/app";
export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        throw error;
      }
    },
    async register({}, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
      } catch (error) {
        console.log(error)
        throw error;
      }
    },

    async gitUid() {
       const user = firebase.auth().currentUser
       return user ? user.uid : null
    },

    async logout() {
      await firebase.auth().signOut()
    },
  },
};