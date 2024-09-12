export interface Article {
  id: string;
  title: string;
  summary: string;
}

export interface FullArticle extends Article {
  fullText: string;
}