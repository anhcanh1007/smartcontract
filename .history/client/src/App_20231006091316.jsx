import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Transactions,
} from "./components/index.jsx";

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
