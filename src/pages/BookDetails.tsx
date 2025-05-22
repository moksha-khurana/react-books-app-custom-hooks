import { useParams } from "react-router-dom";
import { useBookDetails } from "../hooks/useBookDetails";
import { useFavorites } from "../hooks/useFavorites";

export default function BookDetails() {
  const { id } = useParams();
  const { book, loading } = useBookDetails(id);
  const { addFavorite, isFavorite, removeFavorite } = useFavorites();


  if (loading) return <p>Loading book details...</p>;
  if (!book) return <p>Book not found.</p>;

  const inFavorites = isFavorite(book.key);
  

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{book.title}</h2>
      {book.author_name && <p>Author: {book.author_name.join(", ")}</p>}

      {inFavorites ? (
        <button
          className="bg-red-500 text-white px-4 py-2"
          onClick={() => removeFavorite(book.key)}
        >
          Remove from Favorites
        </button>
      ) : (
        <button
          className="bg-green-600 text-white px-4 py-2"
          onClick={() => addFavorite(book)}
        >
          Add to Favorites
        </button>
      )}
    </div>
  );
}
