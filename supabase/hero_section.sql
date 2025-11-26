CREATE TABLE hero_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  display_order INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE hero_floating_cards (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  hero_image_id UUID REFERENCES hero_images(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  position TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

ALTER TABLE hero_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE hero_floating_cards ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on hero_images" ON hero_images FOR SELECT USING (true);
CREATE POLICY "Allow public read access on hero_floating_cards" ON hero_floating_cards FOR SELECT USING (true);

INSERT INTO hero_images (image_url, alt_text, display_order) VALUES
('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&h=700&q=80', 'Consultório Integral Dental', 1),
('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&h=700&q=80', 'Atendimento Integral Dental', 2);

INSERT INTO hero_floating_cards (hero_image_id, title, description, icon_name, position)
SELECT
  (SELECT id FROM hero_images WHERE display_order = 1),
  'Plano Individual/Familiar',
  'Para você e sua família',
  'Users',
  'left'
UNION ALL
SELECT
  (SELECT id FROM hero_images WHERE display_order = 1),
  'Plano Empresarial',
  'Benefício corporativo',
  'Shield',
  'right'
UNION ALL
SELECT
  (SELECT id FROM hero_images WHERE display_order = 2),
  'Plano Individual/Familiar',
  'Para você e sua família',
  'Users',
  'left'
UNION ALL
SELECT
  (SELECT id FROM hero_images WHERE display_order = 2),
  'Plano Empresarial',
  'Benefício corporativo',
  'Shield',
  'right';
