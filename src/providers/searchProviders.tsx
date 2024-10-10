import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  useClearRefinements,
  useInstantSearch,
  useMenu,
  useSearchBox,
} from "react-instantsearch-core";


/* 
import { SearchHistory, SearchState } from "../models/models";
import {
  addHistoryEntry,
  buildHistoryLink,
  updateHistoryEntry,
} from "../queryFirebase/history.query"; */
/* import { useAuthContext } from "./AuthProvider"; */
import { useRouter } from "next/navigation";
import { useAuthContext } from "./authProviders";

const SearchContext = createContext<null | any>(null);

export function useSearchContext() {
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error("SearchContext hook used outside of SearchProvider");
  }

  return context;
}
function SearchProvider({ children }: { children: React.ReactNode }) {
  const [bookName, setBookName] = useState("");
  const [bookCategory, setBookCategory] = useState("");

  const [books, setBooks] = useState<any>([]);
  const { results, setUiState, setIndexUiState } = useInstantSearch();
  const [currentSearchPage, setCurrentSearchPage] = useState<number | null>(
    null
  );
  const [searchResult, setSearchResult] = useState<any>();

  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    //updateSearchHistory(searchResult);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResult]);

  const { refine } = useSearchBox();
  const { refine: refineSector } = useMenu({
    attribute: "category",
  });

  /*   const { refine: clearRefine } = useClearRefinements({
    includedAttributes: ["sector"],
  });  */

  const [nameError, setNameError] = useState("");
  const [categoryError, setCategoryError] = useState("");

  function triggerSearch() {
    if (bookName?.trim() === "") {
      setNameError(
        "Le nom de l'entreprise est obligatoire.Veuillez saisir au moins une lettre pour affiner votre recherche"
      );
      return;
    } else {
      setNameError("");
    }
    if (bookCategory?.trim() === "") {
      setCategoryError("La book est obligatoire.");
      return;
    } else {
      setCategoryError("");
    }

    setIndexUiState((prev: any) => {
      return {
        ...prev,
        query: bookName,
        menu: {
          ...prev.menu,
          sector: bookCategory,
        },
      };
    });


  }

  useEffect(() => {
    setBooks(results.hits);
    setSearchResult(results);

    console.log("results here ", results);
 /*    const queryParams = new URLSearchParams();
    queryParams.set("name", bookName ?? "");
    queryParams.set("category", bookCategory ?? ""); */

   /*  router.push(`/?${queryParams.toString()}`); */

    console.log("here", results.hits, "hereResult???????????????", results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results]);
  return (
    <SearchContext.Provider
      value={{
        bookName,
        setBookName,
        bookCategory,
        setBookCategory,
        triggerSearch,
        books,
        nameError,
        categoryError,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
