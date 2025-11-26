# Upload de Arquivos IDSS para Supabase Storage

## Pré-requisitos

1. Execute o script SQL `supabase/idss.sql` no Supabase Dashboard primeiro
2. Certifique-se de que o arquivo `.env` possui as variáveis `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`

## Como executar

1. Certifique-se de que os arquivos estão nas pastas corretas:
   - `C:\Users\Gabriel Azevedo\Desktop\359394\` - Arquivos da operadora 359394
   - `C:\Users\Gabriel Azevedo\Desktop\418340\` - Arquivos da operadora 418340

2. Execute o comando:
   ```bash
   npm run upload-idss
   ```

## O que o script faz

1. Lê os arquivos das pastas especificadas
2. Faz upload para o bucket `idss-documents` no Supabase Storage
3. Organiza os arquivos em pastas por código da operadora (359394 e 418340)
4. Atualiza a tabela `idss_documents` com as URLs públicas dos arquivos

## Estrutura no Storage

```
idss-documents/
├── 359394/
│   ├── ano2018-base2017.pdf
│   ├── ano2019-base2018.pdf
│   ├── ano2020-base2019.pdf
│   ├── ano2021-base2020.pdf
│   ├── ano2022-base2021.docx
│   ├── ano2023-base2022.pdf
│   ├── ano2024-base2023.pdf
│   └── ano2025-base2024.pdf
└── 418340/
    ├── ano2018-base2017.pdf
    ├── ano2019-base2018.pdf
    ├── ano2020-base2019.pdf
    ├── ano2021-base2020.pdf
    ├── ano2022-base2021.docx
    ├── ano2023-base2022.pdf
    ├── ano2024-base2023.pdf
    └── ano2025-base2024.pdf
```

## URLs dos arquivos

Após o upload, os arquivos estarão disponíveis publicamente em:
```
https://[seu-projeto].supabase.co/storage/v1/object/public/idss-documents/[codigo]/[arquivo]
```

Exemplo:
```
https://[seu-projeto].supabase.co/storage/v1/object/public/idss-documents/359394/ano2024-base2023.pdf
```
