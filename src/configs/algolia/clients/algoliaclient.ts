import { algoliasearch } from "algoliasearch";

export const indexName = "books_index";
const ALGOLIA_CLIENT = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCHKEY!
);

export const SEARCH_CLIENT: any = {
  ...ALGOLIA_CLIENT,
  search(requests: any) {
    if (requests.every(({ params }: any) => !params.query)) {
      const defaultRequest = requests.map((request: any) => ({
        ...request,
        params: {
          ...request.params,
          query: "",
          hitsPerPage: 10,
        },
      }));
      return ALGOLIA_CLIENT.search(defaultRequest);
    }
    return ALGOLIA_CLIENT.search(requests);
  },
};
