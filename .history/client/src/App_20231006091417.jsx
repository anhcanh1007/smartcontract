import { Navbar, Welcome } from "./components";

const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome text-black">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default App;
