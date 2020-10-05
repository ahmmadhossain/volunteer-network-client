import firebase from "./firebase.config";

export const handleGoogleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      const user = result.user;
      return user;
    })
    .catch(function (error) {
      return error.message;
    });
};

export const handleGoogleSignOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(function () {
      return true;
    })
    .catch(function (error) {
      return error.message;
    });
};
