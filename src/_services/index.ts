import { API_BASE_URL } from "../_constants";
import { Article } from "../_types";

/**
 * Fetch all articles from the API.
 * @returns {Promise<Article[]>} - A promise that resolves to an array of articles.
 */
export const getArticles = async (): Promise<Article[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/articles`);
   
    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status}`);
    }
   
    const data: Article[] = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching articles: ${error}`);
  }
};

/**
 * Fetch a single article by ID from the API.
 * @param {string} id - The ID of the article.
 * @returns {Promise<FullArticle>} - A promise that resolves to the full article.
 */
export const getArticleById = async (id: string): Promise<Article> => {
  try {
    const response = await fetch(`${API_BASE_URL}/articles/${id}`);
   
    if (!response.ok) {
      throw new Error(`Failed to fetch article with ID ${id}: ${response.status}`);
    }
   
    const data: Article = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching article by ID ${id}: ${error}`);
  }
};