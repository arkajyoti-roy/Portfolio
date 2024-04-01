/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import Header from "./Components/Header";
import Body from "./Components/Body";
import Box from "./Components/Box";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Social from "./Components/Social";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      {/* <div className="main"> */}
      <div className="bg-violet-50 min-h-screen flex flex-col gap-16">
        <Header />
        <Body />
        <Box />
        <Education />
        <Skills />
        <Projects />
        <Social />
        <Footer />
      </div>
    </>
  );
}

export default App;
