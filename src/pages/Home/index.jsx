import Header from "@/components/Header/Header";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import WhyChoose from "./sections/WhyChoose";
import ChatDemo from "./sections/ChatDemo";
import Customers from "./sections/Customers";
import About from "./sections/About";
import Contact from "./sections/Contact";
import { lazy, Suspense } from "react";
import FullScreenSection from "@/components/FullScreenSection/FullScreenSection";
const FourthCard = lazy(() => import("@/components/FourthCard/FourthCard"));
const FifthCard = lazy(() => import("@/components/FifthCard/FifthCard"));
import customer from "@/assets/customer.png";
import "@/App.css";

const Home = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        <Features />
        <WhyChoose />
        <ChatDemo />
        <Customers />

        <Suspense fallback={<div />}>
          <FullScreenSection backgroundColor="#fafafe">
            <div className="fourthCard-secion">
              <div className="fourthCard-secion-title">成效立见·数据说话</div>
              <FourthCard />
            </div>
          </FullScreenSection>

          <FullScreenSection backgroundColor="#fafafe">
            <FifthCard order={1} />
          </FullScreenSection>
          <FullScreenSection backgroundColor="#fafafe">
            <FifthCard order={2} />
          </FullScreenSection>
          <FullScreenSection backgroundColor="#fafafe">
            <FifthCard order={3} />
          </FullScreenSection>
          <FullScreenSection backgroundColor="#fafafe">
            <FifthCard order={4} />
          </FullScreenSection>
          <FullScreenSection backgroundColor="#fafafe">
            <FifthCard order={5} />
          </FullScreenSection>

          <About />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
};

export default Home;
