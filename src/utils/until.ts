  /* const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>("");
  const [lastVisibleReference, setLastVisibleReference] =
    useState<QueryDocumentSnapshot<any> | null>(null);

  const { books, loading } = useBooks(searchText, 50);

  useEffect(() => {
    const updatePageCount = async () => {
      const totalCount = await bookService.getBooksCount();
      setPageCount(Math.ceil(totalCount / 50));
    };

    updatePageCount();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleClear = () => {
    setSearchText("");
  }; */

  /*  const handleSimpleSearchButtonClick = () => {
    if (searchText) {
      setCurrentPage(1);
      setLastVisibleReference(null);
      setBooks([]);
    }
  }; */

  /*   const fetchPaginatedBooks = (direction: "before" | "after") => {
    const result = direction === "after" ? lastVisibleReference : null;
    const endResult = direction === "before" ? lastVisibleReference : null;

    bookService
      .getFilteredBooks({ startAfterDoc: result, endBeforeDoc: endResult })
      .then((paginatedBooks) => {
        if (paginatedBooks === null) {
          setBooks([]);
        } else {
          const { docs, lastVisible } = paginatedBooks;
          setLastVisibleReference(lastVisible);
          setBooks(docs);
        }
      })
      .catch((error) => {
        console.error("Error fetching paginated books:", error);
      });
  }; */

  /*   const updateCurrentPage = useCallback(
    (change: number) => {
      const direction: "before" | "after" = change < 1 ? "before" : "after";
      fetchPaginatedBooks(direction);
      setCurrentPage((prev) => prev + change);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lastVisibleReference]
  );
 */