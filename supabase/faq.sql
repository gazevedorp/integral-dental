CREATE TABLE faq_categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  display_order INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE faq_questions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id UUID REFERENCES faq_categories(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  display_order INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

ALTER TABLE faq_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE faq_questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on faq_categories" ON faq_categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access on faq_questions" ON faq_questions FOR SELECT USING (true);

INSERT INTO faq_categories (name, display_order) VALUES
('Sobre o Plano', 1),
('Sobre Atendimento', 2),
('Sobre Cobertura', 3),
('Sobre Pagamento e Cancelamento', 4);

INSERT INTO faq_questions (category_id, question, answer, display_order)
SELECT
  (SELECT id FROM faq_categories WHERE name = 'Sobre o Plano'),
  'O que é o Senior?',
  'Plano odontológico com mais de 80 procedimentos cobertos e coparticipações.',
  1
UNION ALL
SELECT
  (SELECT id FROM faq_categories WHERE name = 'Sobre o Plano'),
  'Antes de contratar o que devo fazer?',
  'Basta entrar em contato conosco pelo (16) 2102-7877 ou através de nosso site, munido de CPF e RG e um comprovante de residência.',
  2
UNION ALL
SELECT
  (SELECT id FROM faq_categories WHERE name = 'Sobre o Plano'),
  'Quando receberei minha carteirinha?',
  'A Integral disponibiliza a carteirinha de forma virtual, através do nosso APP e imediatamente após a adesão.',
  3
UNION ALL
SELECT
  (SELECT id FROM faq_categories WHERE name = 'Sobre o Plano'),
  'Qual é a data de vencimento para minha fatura referente ao plano?',
  'A Integral oferece três opções de vencimento, sendo dia 10, 15 ou 20 de cada mês.',
  4
UNION ALL
SELECT
  (SELECT id FROM faq_categories WHERE name = 'Sobre o Plano'),
  'Quais são os possíveis métodos de pagamento para o plano?',
  'Contamos com pagamento via boleto bancário ou cartão de crédito e débito.',
  5
UNION ALL
SELECT
  (SELECT id FROM faq_categories WHERE name = 'Sobre o Plano'),
  'Quem pode ser considerado dependente?',
  'Dependentes seriam qualquer pessoa com vínculo familiar e também possibilitamos a inclusão de agregados como avós, tios, sobrinhos, netos, etc.',
  6
UNION ALL
SELECT
  (SELECT id FROM faq_categories WHERE name = 'Sobre o Plano'),
  'Como faço alteração cadastral?',
  'Quaisquer alterações pedimos que seja feito um contato através de nossos canais de comunicação, como telefone, email ou site.',
  7
UNION ALL
SELECT
  (SELECT id FROM faq_categories WHERE name = 'Sobre Atendimento'),
  'Como faço para marcar uma consulta?',
  'Entre em contato diretamente com o dentista credenciado de sua preferência, apresentando sua carteirinha e documento de identificação.',
  1
UNION ALL
SELECT
  (SELECT id FROM faq_categories WHERE name = 'Sobre Atendimento'),
  'Posso escolher o dentista?',
  'Sim! Você tem liberdade total para escolher qualquer dentista da nossa rede credenciada.',
  2
UNION ALL
SELECT
  (SELECT id FROM faq_categories WHERE name = 'Sobre Atendimento'),
  'O que fazer em caso de emergência?',
  'Em casos de emergência, procure imediatamente um dentista da rede credenciada. Nosso plano cobre atendimentos de urgência 24 horas.',
  3
UNION ALL
SELECT
  (SELECT id FROM faq_categories WHERE name = 'Sobre Atendimento'),
  'Como consulto a rede credenciada?',
  'Acesse nossa página de Rede Credenciada no menu principal ou entre em contato conosco pelo telefone (16) 2102-7877.',
  4
UNION ALL
SELECT
  (SELECT id FROM faq_categories WHERE name = 'Sobre Cobertura'),
  'Quais procedimentos estão cobertos?',
  'Nossos planos cobrem 100% do ROL de Procedimentos da ANS, incluindo consultas, limpeza, radiografias, restaurações, tratamento de canal, cirurgias e muito mais.',
  1
UNION ALL
SELECT
  (SELECT id FROM faq_categories WHERE name = 'Sobre Cobertura'),
  'Existe carência?',
  'Sim, alguns procedimentos possuem período de carência conforme regulamentação da ANS. Consulte nossa central para mais informações sobre carências específicas.',
  2
UNION ALL
SELECT
  (SELECT id FROM faq_categories WHERE name = 'Sobre Cobertura'),
  'O plano cobre ortodontia?',
  'Sim! Temos o Plano Ortodontia (Ortoplus) específico para tratamento ortodôntico com aparelhos fixos e móveis.',
  3
UNION ALL
SELECT
  (SELECT id FROM faq_categories WHERE name = 'Sobre Cobertura'),
  'Próteses e implantes estão cobertos?',
  'A cobertura de próteses e implantes depende do plano contratado. Entre em contato para conhecer as opções disponíveis.',
  4
UNION ALL
SELECT
  (SELECT id FROM faq_categories WHERE name = 'Sobre Pagamento e Cancelamento'),
  'Como faço para cancelar meu plano?',
  'Para cancelamento, entre em contato através de nossos canais de atendimento: telefone (16) 2102-7888, email contato@integraldental.com.br ou através do nosso site.',
  1
UNION ALL
SELECT
  (SELECT id FROM faq_categories WHERE name = 'Sobre Pagamento e Cancelamento'),
  'O que acontece se eu atrasar o pagamento?',
  'Em caso de atraso no pagamento, o plano pode ser suspenso temporariamente. Recomendamos manter as mensalidades em dia para garantir a continuidade do seu atendimento.',
  2
UNION ALL
SELECT
  (SELECT id FROM faq_categories WHERE name = 'Sobre Pagamento e Cancelamento'),
  'Posso mudar a forma de pagamento?',
  'Sim! Entre em contato conosco para solicitar a alteração da forma de pagamento de boleto para cartão ou vice-versa.',
  3
UNION ALL
SELECT
  (SELECT id FROM faq_categories WHERE name = 'Sobre Pagamento e Cancelamento'),
  'Como solicito segunda via do boleto?',
  'A segunda via pode ser solicitada através do nosso site, por telefone ou por email. O boleto será enviado rapidamente.',
  4;
