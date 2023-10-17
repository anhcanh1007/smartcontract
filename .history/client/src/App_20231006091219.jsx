import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Transactions,
} from "./components/index.js";

const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome text-black">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
      </div>
    </>
  );
};

export default App;
