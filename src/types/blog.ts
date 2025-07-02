export interface BlogPost {
  _id: string;
  _type: 'post';
  title: string;
  slug: {
    current: string;
  };
  author?: {
    name: string;
    slug: {
      current: string;
    };
  };
  mainImage?: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
  categories?: Array<{
    title: string;
    slug: {
      current: string;
    };
  }>;
  publishedAt: string;
  body: any[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export interface BlogListResponse {
  posts: BlogPost[];
  total: number;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
}