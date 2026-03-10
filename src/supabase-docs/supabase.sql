create table public.faq_categories (
  id uuid not null default gen_random_uuid (),
  name text not null,
  display_order integer not null,
  created_at timestamp with time zone not null default timezone ('utc'::text, now()),
  constraint faq_categories_pkey primary key (id)
) TABLESPACE pg_default;

create table public.faq_questions (
  id uuid not null default gen_random_uuid (),
  category_id uuid null,
  question text not null,
  answer text not null,
  display_order integer not null,
  created_at timestamp with time zone not null default timezone ('utc'::text, now()),
  constraint faq_questions_pkey primary key (id),
  constraint faq_questions_category_id_fkey foreign KEY (category_id) references faq_categories (id) on delete CASCADE
) TABLESPACE pg_default;

create table public.hero_floating_cards (
  id uuid not null default gen_random_uuid (),
  hero_image_id uuid null,
  title text not null,
  description text not null,
  icon_name text not null,
  position text not null,
  created_at timestamp with time zone not null default timezone ('utc'::text, now()),
  link text null,
  constraint hero_floating_cards_pkey primary key (id),
  constraint hero_floating_cards_hero_image_id_fkey foreign KEY (hero_image_id) references hero_images (id) on delete CASCADE
) TABLESPACE pg_default;

create table public.hero_images (
  id uuid not null default gen_random_uuid (),
  image_url text not null,
  alt_text text null,
  display_order integer not null,
  created_at timestamp with time zone not null default timezone ('utc'::text, now()),
  constraint hero_images_pkey primary key (id)
) TABLESPACE pg_default;

create table public.idss_categories (
  id uuid not null default gen_random_uuid (),
  code text not null,
  name text not null,
  display_order integer not null,
  created_at timestamp with time zone not null default timezone ('utc'::text, now()),
  constraint idss_categories_pkey primary key (id)
) TABLESPACE pg_default;

create table public.idss_documents (
  id uuid not null default gen_random_uuid (),
  category_id uuid null,
  title text not null,
  file_path text not null,
  display_order integer not null,
  created_at timestamp with time zone not null default timezone ('utc'::text, now()),
  constraint idss_documents_pkey primary key (id),
  constraint idss_documents_category_id_fkey foreign KEY (category_id) references idss_categories (id) on delete CASCADE
) TABLESPACE pg_default;

create table public.news (
  id uuid not null default gen_random_uuid (),
  title character varying(500) not null,
  slug character varying(500) not null,
  summary text not null,
  content text not null,
  image_url character varying(1000) null,
  published_at timestamp with time zone null default now(),
  created_at timestamp with time zone null default now(),
  updated_at timestamp with time zone null default now(),
  constraint news_pkey primary key (id),
  constraint news_slug_key unique (slug)
) TABLESPACE pg_default;

create table public.testimonials (
  id uuid not null default gen_random_uuid (),
  name character varying(255) not null,
  role character varying(255) not null,
  text text not null,
  rating integer not null,
  created_at timestamp with time zone null default now(),
  updated_at timestamp with time zone null default now(),
  constraint testimonials_pkey primary key (id),
  constraint testimonials_rating_check check (
    (
      (rating >= 1)
      and (rating <= 5)
    )
  )
) TABLESPACE pg_default;