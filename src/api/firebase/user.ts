import auth from '@react-native-firebase/auth';

export const createUser = async (
  fullName: string,
  email: string,
  password: string,
) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'That email address is already in use!'};
    }

    if (error.code === 'auth/invalid-email') {
      return {error: 'That email address is invalid!'};
    }

    console.error(error);
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = response.user.getIdToken();
    // console.log('logged in', response);

    return {
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token: token,
      },
    };
  } catch (error: any) {
    if (error.code === 'auth/wrong-password') {
      return {status: false, error: 'Incorrect password!'};
    }
    if (error.code === 'auth/user-not-found') {
      return {status: false, error: 'Email does not exist!'};
    } else {
      return {status: false, error: 'Something went wrong!'};
    }
  }
};
