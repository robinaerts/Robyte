import GoogleButton from "react-google-button";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config/firebaseconfig";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Login() {
  const router = useRouter();
  if (auth.currentUser) {
    router.push("/");
  }
  const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then(() => {
      router.push("/");
    });
  };

  const signUpEmail = (e) => {
    e.preventDefault();
    const email = e.target.form[0].value;
    const password = e.target.form[1].value;
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      router.push("/");
    });
  };

  const signInEmail = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      e.target.form[0].value,
      e.target.form[1].value
    )
      .then(() => router.push("/"))
      .catch((e) => {
        console.log(e.code);
      });
  };

  return (
    <div id="login-page-container">
      <Head>
        <title>Robyte | Login</title>
        <meta
          name="description"
          content="Login to Robyte to comment on my projects!"
        />
        <meta property="og:title" content="Robyte | Login" />
        <meta
          property="og:description"
          content="Login to Robyte to comment on my projects!"
        />
      </Head>
      <div id="login-page-left">
        <h1 className="landing-robyte">
          L<span className="yellow-text">0</span>G
          <span className="yellow-text">1</span>N
        </h1>
      </div>
      <div id="login-page-right">
        <form id="email-login">
          <label className="login-label">Email:</label>
          <input className="login-input" type="email" />
          <label className="login-label">Password:</label>
          <input className="login-input" type="password" />
          <div style={{ display: "flex" }}>
            <input
              id="login-submit-button"
              onClick={(e) => signInEmail(e)}
              value="Login"
            />
            <button id="signup-submit-button" onClick={(e) => signUpEmail(e)}>
              Signup
            </button>
          </div>
        </form>
        <div id="provider-logins">
          <GoogleButton
            style={{ width: "80%", alignSelf: "center" }}
            onClick={signInWithGoogle}
          />
        </div>
      </div>
    </div>
  );
}
