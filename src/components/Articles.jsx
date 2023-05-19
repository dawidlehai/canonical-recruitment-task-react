/* eslint-disable react/prop-types */
import ArticleCard from "./ArticleCard";

export default function Articles({ articles }) {
  return (
    <div className="row">
      {articles &&
        articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
    </div>
  );
}
