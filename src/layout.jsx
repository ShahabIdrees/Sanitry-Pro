import Footer from "./components/footer";
import Navbar from "./components/navbar";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
