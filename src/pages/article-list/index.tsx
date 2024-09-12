import { useEffect, useState } from "react";
import { Article } from "../../_types";
import { getArticles } from "../../_services";
import { Link } from "react-router-dom";
import './index.css';

function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        const articleList = await getArticles();
        const sortedArticles = articleList.sort((a, b) => Number(a.id) - Number(b.id));
        setArticles(sortedArticles);
      } catch (error) {
        setError('Failed to load articles.');
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  if (loading) return <div className="loading-message">Loading articles...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="article-list">
      <h1>Articles</h1>
      <div className="article-container">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <div className="article-number">Article {article.id}</div>
            <h2 className="article-title">{article.title}</h2>
            <p className="article-summary">
              {article.summary || 'No summary available.'}
            </p>
            <Link to={`/articles/${article.id}`} className="read-more">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArticleList