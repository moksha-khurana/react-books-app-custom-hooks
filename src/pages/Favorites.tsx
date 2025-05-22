import { useFavorites } from "../hooks/useFavorites";

export default function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Favorite Books</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map((book) => (
            <li key={book.key} className="flex justify-between">
              {book.title}
              <button className="text-red-500" onClick={() => removeFavorite(book.key)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
