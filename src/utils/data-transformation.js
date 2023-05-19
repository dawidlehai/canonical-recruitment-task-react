export function generateArticle(item, category) {
  return {
    title: item.title.rendered,
    image: item.featured_media,
    date: item.date,
    link: item.link,
    type: item.type,
    category: category,
    author: {
      name: item.author,
      link: item._links.author[0].href,
    },
  };
}

export function formatDate(date) {
  const formatter = new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const parts = formatter.formatToParts(date);
  const formattedDate = `${parts[2].value} ${parts[0].value} ${parts[4].value}`;
  return formattedDate;
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
