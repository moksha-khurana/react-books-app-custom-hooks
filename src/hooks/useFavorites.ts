import { useState, useEffect } from "react";
import type { Book } from "../types";
import { useNavigate } from "react-router-dom";

export function useFavorites() {
  const [favorites, setFavorites] = useState<Book[]>([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(stored);
  }, []);

  const addFavorite = (book: Book) => {
    if (!favorites.find((b) => b.key === book.key)) {
      const updated = [...favorites, book];
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
      navigate("/favorites");
    }
  };

  const removeFavorite = (key: string) => {
    const updated = favorites.filter((b) => b.key !== key);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const isFavorite = (key: string) => {
    return favorites.some((b) => b.key === key);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
}
