import showdown from 'showdown';

const converter = new showdown.Converter();

export async function getArticles(limit) {
  const limitQuery = limit ? `&_limit=${limit}` : '';

  const res = await fetch(`https://cms.parallelchain.io/articles?_sort=pubdate:DESC${limitQuery}`);
  const articles = await res.json();

  articles.forEach((article) => {
    if (article.headlinePicture) {
      article.headlinePicture.url = `https://cms.parallelchain.io/${article.headlinePicture.url}`;
    }
  });

  return articles;
}

export async function getArticle(articleId) {
  const res = await fetch(`https://cms.parallelchain.io/articles/?url=${articleId}&_limit=1`);
  const articles = await res.json();

  try {
    articles[0].body = converter.makeHtml(articles[0].body);
    return articles[0];
  } catch (e) {
    return null;
  }
}
