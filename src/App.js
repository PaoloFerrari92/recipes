import Pages from "./pages/Pages";
import Search from "./components/Search";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { motion } from "framer-motion";
import { VeggieProvider } from "./context/veggieContext";
import ErrorBoundary from "./components/ErrorBoundary";
import VeggieLogo from "./assets/VeggieLogo.png";

const Nav = styled(motion.div)`
  display: flex;
  aligned-item: center;
  justify-content: space-around;
  margin-top: -4rem;
  width:100%;
  margin-bottom:-8rem;
`;

function App() {
  return (
    <VeggieProvider>
      <Router>
        <div className="nav-logo-search">
          <ErrorBoundary>
            <Nav
              animate={{
                scale: [1, 1.3, 1.3, 1.3, 1],
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{ duration: 1 }}
            >
              <div className="nav-title">
                <Link className="text-center" to={"/"}>
                <img src={VeggieLogo}/>
                </Link>
              </div>
            </Nav>
          </ErrorBoundary>
          <ErrorBoundary>
            <Search className="search" />
          </ErrorBoundary>
        </div>

        <Pages />
      </Router>
    </VeggieProvider>
  );
}



export default App;