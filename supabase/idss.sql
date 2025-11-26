INSERT INTO storage.buckets (id, name, public)
VALUES ('idss-documents', 'idss-documents', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Allow public uploads" ON storage.objects FOR INSERT TO public WITH CHECK (bucket_id = 'idss-documents');
CREATE POLICY "Allow public updates" ON storage.objects FOR UPDATE TO public USING (bucket_id = 'idss-documents');
CREATE POLICY "Allow public deletes" ON storage.objects FOR DELETE TO public USING (bucket_id = 'idss-documents');
CREATE POLICY "Allow public reads" ON storage.objects FOR SELECT TO public USING (bucket_id = 'idss-documents');

CREATE TABLE idss_categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT NOT NULL,
  name TEXT NOT NULL,
  display_order INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE idss_documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id UUID REFERENCES idss_categories(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  file_path TEXT NOT NULL,
  display_order INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

ALTER TABLE idss_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE idss_documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on idss_categories" ON idss_categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access on idss_documents" ON idss_documents FOR SELECT USING (true);

INSERT INTO idss_categories (code, name, display_order) VALUES
('359394', 'INTEGRAL SERVIÇOS ODONTOLÓGICOS LTDA', 1),
('418340', 'INTEGRAL CONVÊNIO ODONTOLÓGICO LTDA', 2);

INSERT INTO idss_documents (category_id, title, file_path, display_order)
SELECT
  (SELECT id FROM idss_categories WHERE code = '359394'),
  'IDSS 2018 ANO BASE 2017',
  'https://www.integraldental.com.br/wp-content/uploads/2021/07/2018-ANO-BASE-2017Operadora-359394.pdf',
  1
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '359394'),
  'IDSS 2019 ANO BASE 2018',
  'https://www.integraldental.com.br/wp-content/uploads/2021/01/2019-ANO-BASE-2018-Operadora_359394.pdf',
  2
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '359394'),
  'IDSS 2020 ANO BASE 2019',
  'https://www.integraldental.com.br/wp-content/uploads/2021/04/359394-idss-base-2019.pdf',
  3
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '359394'),
  'IDSS 2021 ANO BASE 2020',
  'https://www.integraldental.com.br/wp-content/uploads/2022/01/359394-IDSS-2019-Ano-Base-2020.pdf',
  4
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '359394'),
  'IDSS 2022 ANO BASE 2021',
  'https://www.integraldental.com.br/wp-content/uploads/2023/01/359394-IDSS-2022-Ano-Base-2021.docx',
  5
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '359394'),
  'IDSS 2023 ANO BASE 2022',
  'https://www.integraldental.com.br/wp-content/uploads/2024/01/ans.gov_.br_qualificacao_consumidor_informacoes_operadora.asp_co_operadora_param359394cd_processamento_param20230102consulta_idss.pdf',
  6
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '359394'),
  'IDSS 2024 ANO BASE 2023',
  'https://www.integraldental.com.br/wp-content/uploads/2025/01/359394-sevicos.pdf',
  7
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '359394'),
  'IDSS 2025 ANO BASE 2024',
  'https://www.integraldental.com.br/wp-content/uploads/2025/04/359394-sevicos-2025-2024.pdf',
  8
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '418340'),
  'IDSS 2018 ANO BASE 2017',
  'https://www.integraldental.com.br/wp-content/uploads/2021/07/2018-ANO-BASE-2017-Operadora-418340.pdf',
  1
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '418340'),
  'IDSS 2019 ANO BASE 2018',
  'https://www.integraldental.com.br/wp-content/uploads/2021/01/2019-ANO-BASE-2018-Operadora_418340.pdf',
  2
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '418340'),
  'IDSS 2020 ANO BASE 2019',
  'https://www.integraldental.com.br/wp-content/uploads/2021/04/418340-idss-base-2019.pdf',
  3
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '418340'),
  'IDSS 2021 ANO BASE 2020',
  'https://www.integraldental.com.br/wp-content/uploads/2022/01/418340-IDSS-2019-Ano-Base-2020.pdf',
  4
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '418340'),
  'IDSS 2022 ANO BASE 2021',
  'https://www.integraldental.com.br/wp-content/uploads/2023/01/418340-IDSS-2022-Ano-Base-2021.docx',
  5
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '418340'),
  'IDSS 2023 ANO BASE 2022',
  'https://www.integraldental.com.br/wp-content/uploads/2024/01/ans.gov_.br_qualificacao_consumidor_informacoes_operadora.asp_co_operadora_param418340cd_processamento_param20230102consulta_idss.pdf',
  6
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '418340'),
  'IDSS 2024 ANO BASE 2023',
  'https://www.integraldental.com.br/wp-content/uploads/2025/01/418340-convenio.pdf',
  7
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '418340'),
  'IDSS 2025 ANO BASE 2024',
  'https://www.integraldental.com.br/wp-content/uploads/2025/04/418340-convenio-2025-2024.pdf',
  8;
