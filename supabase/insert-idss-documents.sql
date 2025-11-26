INSERT INTO idss_documents (category_id, title, file_path, display_order)
SELECT
  (SELECT id FROM idss_categories WHERE code = '359394'),
  'IDSS 2018 ANO BASE 2017',
  '',
  1
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '359394'),
  'IDSS 2019 ANO BASE 2018',
  '',
  2
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '359394'),
  'IDSS 2020 ANO BASE 2019',
  '',
  3
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '359394'),
  'IDSS 2021 ANO BASE 2020',
  '',
  4
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '359394'),
  'IDSS 2022 ANO BASE 2021',
  '',
  5
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '359394'),
  'IDSS 2023 ANO BASE 2022',
  '',
  6
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '359394'),
  'IDSS 2024 ANO BASE 2023',
  '',
  7
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '359394'),
  'IDSS 2025 ANO BASE 2024',
  '',
  8
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '418340'),
  'IDSS 2018 ANO BASE 2017',
  '',
  1
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '418340'),
  'IDSS 2019 ANO BASE 2018',
  '',
  2
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '418340'),
  'IDSS 2020 ANO BASE 2019',
  '',
  3
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '418340'),
  'IDSS 2021 ANO BASE 2020',
  '',
  4
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '418340'),
  'IDSS 2022 ANO BASE 2021',
  '',
  5
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '418340'),
  'IDSS 2023 ANO BASE 2022',
  '',
  6
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '418340'),
  'IDSS 2024 ANO BASE 2023',
  '',
  7
UNION ALL
SELECT
  (SELECT id FROM idss_categories WHERE code = '418340'),
  'IDSS 2025 ANO BASE 2024',
  '',
  8;
