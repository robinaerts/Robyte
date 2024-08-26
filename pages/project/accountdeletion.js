import Nav from "../../components/Nav";
import Head from "next/head";

export default function MovieFinderInfo() {
  const submitDelete = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Head>
        <title>Robyte | Store</title>
        <meta
          name="description"
          content="Robyte Store - Hardware, services, digital art and apps."
        />
        <meta
          name="keywords"
          content="Robyte, Store, Hardware, Services, Digital Art, Apps"
        />
      </Head>
      <Nav />
      <div className="app-details">
        <div className="app-details-header">
          <h1>Data Deletion Form</h1>
        </div>

        {/* <div className="app-details-description">
          <p>Description of the app goes here...</p>
        </div> */}
        <div className="app-details-screenshots">
          {/* Render screenshots of the app */}
        </div>
        <div className="app-details-reviews">
          {/* Render reviews of the app */}
        </div>

        <div className="delete-form">
          <h2>Data Deletion Form</h2>
          <form action="https://formspree.io/f/xjvnarwp" method="post">
            <label htmlFor="product">Select a product:</label>
            <select name="product" id="reason">
              <option value="">Select a product</option>
              <option value="gotcha">Gotcha!</option>
              <option value="moviefinder">MovieFinder</option>
              <option value="biblio">Biblio</option>
              <option value="readit">ReadIt</option>
              <option value="shortgen">ShortGen</option>
              <option value="familyplanner">FamilyPlanner</option>
              <option value="other">Other</option>
            </select>
            <label htmlFor="email">Email Address:</label>
            <input
              className="data-deletion-input"
              type="email"
              id="email"
              name="email"
              required
            />
            <button type="submit">Delete Data</button>
          </form>
        </div>
      </div>
    </>
  );
}