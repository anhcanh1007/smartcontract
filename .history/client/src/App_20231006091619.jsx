import { Navbar, Welcome, Services, Transactions, Footer } from "./components";

const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome text-black">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        
      </div>
    </>
  );
};

export default App;