import HouseContextProvider from "../components/HouseContext";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HouseContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </HouseContextProvider>
    </>
  );
}

export default MyApp;
