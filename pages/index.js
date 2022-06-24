import Art from "../components/Art";
import Footer from "../components/Footer";
import Landing from "../Components/Landing";
import Nav from "../components/Nav";
import Programming from "../components/Programming";

export default function Home() {
  return (
    <div>
      <Nav />
      <Landing />
      <Programming />
      <Art />
      <Footer />
    </div>
  );
}
