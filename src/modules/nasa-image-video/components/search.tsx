import { useQuery } from "@tanstack/react-query";
import { searchQuery } from "../actions/search-query";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { IoMdSearch } from "react-icons/io";
import Button from "@/components/ui/button";
import NASAResultsLoading from "./nasa-results-loading";
import NASAResults from "./nasa-results";
import NASADefaultComponent from "./nasa-results-default";
import { useNavigate, useSearchParams } from "react-router";
import QueryError from "@/components/ui/error";

const SearchImageAndVideo = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);

  const [searchTerm, setSearchTerm] = useState(query);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["NIAV", query, page],
    queryFn: () =>
      searchQuery({
        queryKey: ["NIAV", query, page] as [string, string, number],
      }),
    enabled: query.length > 0,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;

    const newParams = new URLSearchParams();
    newParams.set("q", searchTerm.trim());
    newParams.set("page", "1");

    navigate(`?${newParams.toString()}`, { replace: true });
  };

  const handleRetry = () => {
    refetch();
  };

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="flex max-w-3xl mx-auto my-4 border border-stone-300 rounded-md overflow-hidden transition-all focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent"
      >
        <Input
          id="search"
          type="search"
          placeholder="Buscar en el cosmos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-none outline-none focus:ring-0 text-lg"
        />
        <Button
          type="submit"
          className="rounded-l-none text-xl rounded-none hover:bg-indigo-700 focus:ring-0 focus:ring-offset-0"
        >
          <IoMdSearch />
        </Button>
      </form>

      {!isLoading && !data && !error && <NASADefaultComponent />}

      {isLoading && <NASAResultsLoading />}
      {data && !isLoading && <NASAResults data={data} />}
      {error && <QueryError error={error} onRetry={handleRetry} />}
    </>
  );
};

export default SearchImageAndVideo;
