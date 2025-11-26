-- Remove políticas existentes se houver conflito
DROP POLICY IF EXISTS "Allow public uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow public updates" ON storage.objects;
DROP POLICY IF EXISTS "Allow public deletes" ON storage.objects;
DROP POLICY IF EXISTS "Allow public reads" ON storage.objects;

-- Cria políticas corretas para permitir acesso anônimo
CREATE POLICY "Allow anonymous uploads to idss-documents"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'idss-documents');

CREATE POLICY "Allow anonymous updates to idss-documents"
ON storage.objects FOR UPDATE
TO anon, authenticated
USING (bucket_id = 'idss-documents');

CREATE POLICY "Allow public reads from idss-documents"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'idss-documents');

CREATE POLICY "Allow anonymous deletes from idss-documents"
ON storage.objects FOR DELETE
TO anon, authenticated
USING (bucket_id = 'idss-documents');
