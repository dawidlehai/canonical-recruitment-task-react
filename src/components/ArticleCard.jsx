import {
  formatDate,
  capitalizeFirstLetter,
} from "../utils/data-transformation";

/* eslint-disable react/prop-types */
export default function Card({ article }) {
  const date = formatDate(new Date(article.date));
  const type = capitalizeFirstLetter(article.type);

  return (
    <div className="col-4">
      <div className="p-card">
        <div className="p-card__content">
          <p>{article.category}</p>
          <hr />
          <img
            className="p-card__image"
            alt={article.title}
            src={article.image}
            width="330"
            height="185"
          />
          <h2 className="p-heading--4">
            <a href={article.link}>{article.title}</a>
          </h2>
          <p className="p-heading--6">
            By <a href={article.author.link}>{article.author.name}</a> on {date}
          </p>
          <hr />
          <p>{type}</p>
        </div>
      </div>
    </div>
  );
}
