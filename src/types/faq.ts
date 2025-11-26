export interface FAQCategory {
  id: string;
  name: string;
  display_order: number;
  created_at: string;
}

export interface FAQQuestion {
  id: string;
  category_id: string;
  question: string;
  answer: string;
  display_order: number;
  created_at: string;
}

export interface FAQCategoryWithQuestions extends FAQCategory {
  questions: FAQQuestion[];
}
