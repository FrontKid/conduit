export interface IGlobalFeed {
  articles: IFeedArticle[];
  articlesCount: number;
}

export interface IFeedArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

export interface Author {
  username: string;
  bio?: any;
  image: string;
  following: boolean;
}