import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import { Header } from "./Components/Header";

export function App() {
  return (
    <Router>
      <header>
        <Link to={"/"}>
          <Header />
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate replace to={"/"} />} />
        </Routes>
      </main>
    </Router>
  );
}
