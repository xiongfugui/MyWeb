import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import MembershipScan from "@/pages/MembershipScan";
import WeChatPay from "@/pages/WeChatPay";
import MachineStart from "@/pages/MachineStart";

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/membership-scan" element={<MembershipScan />} />
          <Route path="/wechat-pay" element={<WeChatPay />} />
          <Route path="/machine-start" element={<MachineStart />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}