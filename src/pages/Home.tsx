import { Link } from "react-router-dom";
import { useBookSearch } from "../hooks/useBookSearch";

export default function Home() {
  const { query, setQuery, books, loading, error, searchBooks } = useBookSearch();

  return (
    <div>
      <input
        type="text"
        className="border p-2"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="ml-2 bg-blue-500 text-white px-4 py-2" onClick={searchBooks}>
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="mt-4 space-y-2">
        {books.map((book) => (
          <li key={book.key}>
            <Link to={`/book/${book.key.split("/").pop()}`} className="text-blue-600 underline">
              {book.title} {book.author_name?.[0] && `by ${book.author_name[0]}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
