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
      <div className="p-card--highlighted article-card">
        <div className="p-card__content">
          <p className="p-text--small-caps article-card__category">
            {article.category}
          </p>
          <hr className="hr-dotted" />
          <img
            className="p-card__image article-card__image"
            alt={article.title}
            src={article.image}
            width="354"
            height="199"
          />
          <h2 className="p-heading--4 article-card__heading">
            <a href={article.link}>{article.title}</a>
          </h2>
          <p className="p-heading--6 article-card__info">
            By <a href={article.author.link}>{article.author.name}</a> on {date}
          </p>
          <hr className="hr-dotted" />
          <p className="p-text--small article-card__type">{type}</p>
        </div>
      </div>
    </div>
  );
}
