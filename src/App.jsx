import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import Experience from "./Components/Experience";
import CompetitiveProgramming from "./Components/CompetitiveProgramming";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import "./App.css";
import "./index.css";

function App() {
  const [codeforcesData, setCodeforcesData] = useState(null);
  const [codechefData, setCodechefData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const leetcodeResponse = await fetch(
          "https://portfolio-api-pi-eight.vercel.app/leetcode"
        );
        const leetcodeJson = await leetcodeResponse.json();
        setLeetcodeData(leetcodeJson);

        const codechefResponse = await fetch(
          "https://portfolio-api-pi-eight.vercel.app/codechef"
        );
        const codechefJson = await codechefResponse.json();
        setCodechefData(codechefJson);

        const codeforcesResponse = await fetch(
          "https://portfolio-api-pi-eight.vercel.app/codeforces"
        );
        const codeforcesJson = await codeforcesResponse.json();
        setCodeforcesData(codeforcesJson);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-950 h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      {codeforcesData && codechefData && leetcodeData ? (
        <CompetitiveProgramming
          codeforcesData={codeforcesData}
          codechefData={codechefData}
          leetcodeData={leetcodeData}
        />
      ) : (
        <div className="text-white text-center py-4">Loading data...</div>
      )}
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
