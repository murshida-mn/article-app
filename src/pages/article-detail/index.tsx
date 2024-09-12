import { useEffect, useState } from 'react'
import { getArticleById } from '../../_services';
import { useParams } from 'react-router-dom';
import { FullArticle } from '../../_types';
import './index.css';

function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<FullArticle | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticle = async () => {
      setLoading(true);
      setError(null);

      try {
        if (id) {
          const fetchedArticle = await getArticleById(id);
          setArticle(fetchedArticle);
        }
      } catch (error) {
        setError('Failed to load the article.');
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [id]);

  if (loading) return <div className="loading-message">Loading article...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!article) return <div className="error-message">Article not found.</div>;

  return (
    <div className="article-detail">
      <div className="article-header">
        <h1 className="article-title">{article?.title}</h1>
        <div className="article-number">Article {article?.id}</div>
      </div>
      <div className="article-body">
        <p className="article-content">{article?.fullText || 'No content available.'}</p>
      </div>
      <div className="back-link">
        <a href="/">Back to Articles</a>
      </div>
    </div>
  )
}

export default ArticleDetail