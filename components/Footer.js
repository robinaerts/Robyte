import Link from "next/link";
import Snack from "./Common/Snack";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export default function Footer() {
  const [snack, setSnack] = useState(null);
  const db = getFirestore();

  const addMailingList = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email) {
      setSnack({ message: "Please enter an email", status: "error" });
      setTimeout(() => {
        setSnack(null);
      }, 3000);
      return;
    }

    const docRef = doc(collection(db, "data"), "mailingList");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists) {
      const emails = docSnap.data().emails;
      if (emails.includes(email)) {
        setSnack({
          message: "Already added to mailing list!",
          status: "info",
        });
        setTimeout(() => {
          setSnack(null);
        }, 3000);
        return;
      }
      emails.push(email);
      await updateDoc(docRef, { emails: emails });
    } else {
      await setDoc(docRef, { emails: [email] });
    }

    setSnack({ message: "Added to mailing list!", status: "success" });
    setTimeout(() => {
      setSnack(null);
    }, 3000);
  };

  return (
    <div id="footerContainer">
      <div id="footerContent">
        <div className="footerItem">
          <h5 className="footerItemHeading">Robyte</h5>
          <div id="footerItemItems">
            <Link href="#programming-container">
              <p className="footerItemItem">Dev</p>
            </Link>
            <Link href="#art-container">
              <p className="footerItemItem">Art</p>
            </Link>
            {/* <Link href="#about-container">
              <p className="footerItemItem">About</p>
            </Link> */}
            <Link href="/login">
              <p className="footerItemItem">Signin</p>
            </Link>
          </div>
        </div>
        <div className="footerItem">
          <h5 className="footerItemHeading">Products</h5>
          <div id="footerItemItems">
            <p className="footerItemItem">Robyte</p>
            <a rel="noreferrer" target="_blank" href="https://familyplanner.ga">
              <p className="footerItemItem">Familyplanner</p>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://solar-discover.vercel.app/"
            >
              <p className="footerItemItem">Solar Discover</p>
            </a>
          </div>
        </div>
        <form onSubmit={addMailingList} id="footerContact">
          <h5 className="footerItemHeading">
            Get notified whenever I post a new project
          </h5>
          <input
            type="email"
            id="footer-input"
            name="email"
            placeholder="Email..."
          />
          <button type="submit" id="footer-submit">
            SUBMIT
          </button>
        </form>
      </div>
      <div id="footerCopyright">
        <p>© Copyright 2023: Robyte.me </p>
      </div>
      <AnimatePresence>
        {snack && <Snack status={snack.status} message={snack.message} />}
      </AnimatePresence>
    </div>
  );
}
