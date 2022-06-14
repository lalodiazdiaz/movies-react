import { MoviesGrid } from "../Components/MoviesGrid";
import { Search } from "../Components/Search";
import { useQuery } from "../hooks/useQuery";
import { useDebounce } from "../hooks/usedebounce";
export function LandingPage() {
  const query = useQuery();
  const search = query.get("search");

  const debounceSerach = useDebounce(search, "300");
  return (
    <div>
      <Search />
      <MoviesGrid key={debounceSerach} search={debounceSerach} />
    </div>
  );
}
