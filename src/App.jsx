import { useState, useEffect } from "react";
import { generateArticle } from "./utils/data-transformation";
import useHttp from "./hooks/useHttp";
import Articles from "./components/Articles";

export default function App() {
  const [articles, setArticles] = useState();
  const { isLoading, error, sendRequest: fetchArticles } = useHttp();

  useEffect(() => {
    const requestConfig = {
      endpoint:
        "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts",
    };

    const transformArticles = (articles) => {
      const transformedArticles = articles.map((article) =>
        generateArticle(article, "Cloud and Server")
      );

      setArticles(transformedArticles);
    };

    fetchArticles(requestConfig, transformArticles);
  }, [fetchArticles]);

  return (
    <main>
      {articles && !isLoading && !error && <Articles articles={articles} />}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </main>
  );
}
