"use client"

import styles from './login.module.css'
import { AiOutlineGoogle } from 'react-icons/ai'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '@/firebase';
import { setCookie } from '@/actions';
import { useRouter } from 'next/navigation'

export default function Login() {

  const router = useRouter();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          const user = result.user;
          setCookie('uid', user.uid);
          setCookie('photoURL', user?.photoURL ? user.photoURL : "");
          router.refresh();
        }
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col gap-16 items-center justify-center px-6 py-12 lg:px-8 sm:mx-auto sm:w-full sm:max-w-sm">

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-200">
          Sign in with Google
        </h2>
        <button onClick={handleGoogleSignIn} className={styles.signin__button}>
          <span className="icon">
            <AiOutlineGoogle />
          </span>
          -
          <span className="text">
            Sign in
          </span>
        </button>
      </div>
    </>
  )
}
