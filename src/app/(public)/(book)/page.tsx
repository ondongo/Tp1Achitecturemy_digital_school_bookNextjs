"use client";
import {
  indexName,
  SEARCH_CLIENT,
} from "@/configs/algolia/clients/algoliaclient";
import SearchProvider, { useSearchContext } from "@/providers/searchProviders";
import { algoliasearch } from "algoliasearch";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  Configure,
  Highlight,
  Hits,
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox,
  getServerState,
} from "react-instantsearch";

import "instantsearch.css/themes/reset.css";
import "instantsearch.css/themes/satellite.css";
import ContainerBooks from "@/components/ContainerBooks";
import { useDisclosure } from "@chakra-ui/react";
const future = { preserveSharedStateOnUnmount: true };
function Books() {
 
  return (
    <InstantSearch
      indexName={indexName}
      searchClient={SEARCH_CLIENT}
      future={future}
    >
      <SearchProvider>
        <ContainerBooks />
        <Configure analytics={false} hitsPerPage={40} />
      </SearchProvider>
    </InstantSearch>
  );
}

export default Books;
