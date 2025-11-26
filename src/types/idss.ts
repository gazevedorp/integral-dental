export interface IDSSCategory {
  id: string;
  code: string;
  name: string;
  display_order: number;
  created_at: string;
}

export interface IDSSDocument {
  id: string;
  category_id: string;
  title: string;
  file_path: string;
  display_order: number;
  created_at: string;
}

export interface IDSSCategoryWithDocuments extends IDSSCategory {
  documents: IDSSDocument[];
}
