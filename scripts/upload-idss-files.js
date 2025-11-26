import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Erro: Variáveis de ambiente VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY não encontradas');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const fileMapping = {
  '359394': {
    'ano2018-base2017.pdf': 'IDSS 2018 ANO BASE 2017',
    'ano2019-base2018.pdf': 'IDSS 2019 ANO BASE 2018',
    'ano2020-base2019.pdf': 'IDSS 2020 ANO BASE 2019',
    'ano2021-base2020.pdf': 'IDSS 2021 ANO BASE 2020',
    'ano2022-base2021.docx': 'IDSS 2022 ANO BASE 2021',
    'ano2023-base2022.pdf': 'IDSS 2023 ANO BASE 2022',
    'ano2024-base2023.pdf': 'IDSS 2024 ANO BASE 2023',
    'ano2025-base2024.pdf': 'IDSS 2025 ANO BASE 2024',
  },
  '418340': {
    'ano2018-base2017.pdf': 'IDSS 2018 ANO BASE 2017',
    'ano2019-base2018.pdf': 'IDSS 2019 ANO BASE 2018',
    'ano2020-base2019.pdf': 'IDSS 2020 ANO BASE 2019',
    'ano2021-base2020.pdf': 'IDSS 2021 ANO BASE 2020',
    'ano2022-base2021.docx': 'IDSS 2022 ANO BASE 2021',
    'ano2023-base2022.pdf': 'IDSS 2023 ANO BASE 2022',
    'ano2024-base2023.pdf': 'IDSS 2024 ANO BASE 2023',
    'ano2025-base2024.pdf': 'IDSS 2025 ANO BASE 2024',
  }
};

const basePaths = {
  '359394': 'C:\\Users\\Gabriel Azevedo\\Desktop\\359394',
  '418340': 'C:\\Users\\Gabriel Azevedo\\Desktop\\418340'
};

async function uploadFiles() {
  console.log('Iniciando upload dos arquivos IDSS...\n');

  for (const [categoryCode, files] of Object.entries(fileMapping)) {
    console.log(`\nProcessando categoria: ${categoryCode}`);

    const { data: category } = await supabase
      .from('idss_categories')
      .select('id')
      .eq('code', categoryCode)
      .single();

    if (!category) {
      console.error(`Categoria ${categoryCode} não encontrada no banco`);
      continue;
    }

    for (const [fileName, title] of Object.entries(files)) {
      const filePath = path.join(basePaths[categoryCode], fileName);

      if (!fs.existsSync(filePath)) {
        console.error(`  ❌ Arquivo não encontrado: ${fileName}`);
        continue;
      }

      try {
        const fileBuffer = fs.readFileSync(filePath);
        const storagePath = `${categoryCode}/${fileName}`;

        console.log(`  📤 Uploading: ${fileName}...`);

        const { error: uploadError } = await supabase.storage
          .from('idss-documents')
          .upload(storagePath, fileBuffer, {
            contentType: fileName.endsWith('.pdf') ? 'application/pdf' : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            upsert: true
          });

        if (uploadError) {
          console.error(`  ❌ Erro no upload: ${uploadError.message}`);
          continue;
        }

        const { data: { publicUrl } } = supabase.storage
          .from('idss-documents')
          .getPublicUrl(storagePath);

        console.log(`  ✅ Upload concluído: ${fileName}`);
        console.log(`     URL: ${publicUrl}`);

        const { error: updateError } = await supabase
          .from('idss_documents')
          .update({ file_path: publicUrl })
          .eq('category_id', category.id)
          .eq('title', title);

        if (updateError) {
          console.error(`  ❌ Erro ao atualizar banco: ${updateError.message}`);
        } else {
          console.log(`  ✅ Banco atualizado para: ${title}`);
        }

      } catch (error) {
        console.error(`  ❌ Erro ao processar ${fileName}:`, error.message);
      }
    }
  }

  console.log('\n✅ Upload concluído!');
}

uploadFiles().catch(console.error);
