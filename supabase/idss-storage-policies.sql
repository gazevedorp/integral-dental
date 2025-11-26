CREATE POLICY "Allow public uploads" ON storage.objects FOR INSERT TO public WITH CHECK (bucket_id = 'idss-documents');
CREATE POLICY "Allow public updates" ON storage.objects FOR UPDATE TO public USING (bucket_id = 'idss-documents');
CREATE POLICY "Allow public deletes" ON storage.objects FOR DELETE TO public USING (bucket_id = 'idss-documents');
CREATE POLICY "Allow public reads" ON storage.objects FOR SELECT TO public USING (bucket_id = 'idss-documents');
