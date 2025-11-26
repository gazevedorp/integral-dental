import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Erro: Variáveis de ambiente não encontradas');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const fileMapping = {
  '359394': [
    { fileName: 'ano2018-base2017.pdf', title: 'IDSS 2018 ANO BASE 2017' },
    { fileName: 'ano2019-base2018.pdf', title: 'IDSS 2019 ANO BASE 2018' },
    { fileName: 'ano2020-base2019.pdf', title: 'IDSS 2020 ANO BASE 2019' },
    { fileName: 'ano2021-base2020.pdf', title: 'IDSS 2021 ANO BASE 2020' },
    { fileName: 'ano2022-base2021.docx', title: 'IDSS 2022 ANO BASE 2021' },
    { fileName: 'ano2023-base2022.pdf', title: 'IDSS 2023 ANO BASE 2022' },
    { fileName: 'ano2024-base2023.pdf', title: 'IDSS 2024 ANO BASE 2023' },
    { fileName: 'ano2025-base2024.pdf', title: 'IDSS 2025 ANO BASE 2024' },
  ],
  '418340': [
    { fileName: 'ano2018-base2017.pdf', title: 'IDSS 2018 ANO BASE 2017' },
    { fileName: 'ano2019-base2018.pdf', title: 'IDSS 2019 ANO BASE 2018' },
    { fileName: 'ano2020-base2019.pdf', title: 'IDSS 2020 ANO BASE 2019' },
    { fileName: 'ano2021-base2020.pdf', title: 'IDSS 2021 ANO BASE 2020' },
    { fileName: 'ano2022-base2021.docx', title: 'IDSS 2022 ANO BASE 2021' },
    { fileName: 'ano2023-base2022.pdf', title: 'IDSS 2023 ANO BASE 2022' },
    { fileName: 'ano2024-base2023.pdf', title: 'IDSS 2024 ANO BASE 2023' },
    { fileName: 'ano2025-base2024.pdf', title: 'IDSS 2025 ANO BASE 2024' },
  ]
};

async function updateURLs() {
  console.log('Atualizando URLs dos documentos IDSS...\n');

  for (const [categoryCode, files] of Object.entries(fileMapping)) {
    console.log(`\nProcessando categoria: ${categoryCode}`);

    const { data: category } = await supabase
      .from('idss_categories')
      .select('id')
      .eq('code', categoryCode)
      .single();

    if (!category) {
      console.error(`Categoria ${categoryCode} não encontrada`);
      continue;
    }

    for (const { fileName, title } of files) {
      const storagePath = `${categoryCode}/${fileName}`;

      const { data: { publicUrl } } = supabase.storage
        .from('idss-documents')
        .getPublicUrl(storagePath);

      console.log(`  🔗 Atualizando: ${title}`);
      console.log(`     URL: ${publicUrl}`);

      const { error } = await supabase
        .from('idss_documents')
        .update({ file_path: publicUrl })
        .eq('category_id', category.id)
        .eq('title', title);

      if (error) {
        console.error(`  ❌ Erro ao atualizar: ${error.message}`);
      } else {
        console.log(`  ✅ Atualizado com sucesso`);
      }
    }
  }

  console.log('\n✅ Atualização concluída!');
}

updateURLs().catch(console.error);
