import Nav from "./components/Nav";

import Gallery from "./components/sectionGallery";
import Team from "./components/srctionTeam";
import Testimonials from "./components/sectionteTimonials";
import Blog from "./components/sectionBlog";
import Video from "./components/sectionVideo";
import Counter from "./components/sectionCounter";
import Footer from "./components/footer";
import Cart from "./components/Cart";

import { CartProvider } from "react-use-cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/video" element={<Video />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/form" element={<Form />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
