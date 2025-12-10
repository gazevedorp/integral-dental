export interface HeroImage {
  id: string;
  image_url: string;
  alt_text: string | null;
  display_order: number;
  created_at: string;
}

export interface HeroFloatingCard {
  id: string;
  hero_image_id: string;
  title: string;
  description: string;
  icon_name: string;
  position: string;
  link: string | null;
  created_at: string;
}
