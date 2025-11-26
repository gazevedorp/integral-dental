export interface News {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  image_url: string | null;
  published_at: string;
  created_at: string;
  updated_at: string;
}
