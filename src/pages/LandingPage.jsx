import { MoviesGrid } from "../Components/MoviesGrid";
import { Search } from "../Components/Search";
import { useDebounce } from "../hooks/usedebounce";
import { useSearchParams } from "react-router-dom";
export function LandingPage() {
  const [query] = useSearchParams();
  const search = query.get("search");

  const debounceSerach = useDebounce(search, "300");
  return (
    <div>
      <Search />
      <MoviesGrid key={debounceSerach} search={debounceSerach} />
    </div>
  );
}
