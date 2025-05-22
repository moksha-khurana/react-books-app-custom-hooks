import { useEffect, useState } from "react";
import type { Book } from "../types";

export function useBookDetails(id?: string) {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    const fetchBook = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://openlibrary.org/search.json?q=${id}`);
        const data = await res.json();
        const found = data.docs.find((b: Book) => b.key.endsWith(id));
        setBook(found);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  return { book, loading };
}
