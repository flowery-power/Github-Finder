import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className=".flex.flex-col.justify-between.h-screen">
        <Navbar />
      </div>

      <main className="container mx-auto px-3 pb-12">Content</main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
