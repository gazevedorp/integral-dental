// Configuração do Supabase para envio de emails
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

export interface ContactFormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

export interface CanalEticoFormData {
  nome: string;
  email: string;
  telefone: string;
  tipo: string;
  mensagem: string;
}

export type FormType = "contact" | "canalEtico";

interface SendEmailParams {
  formType: FormType;
  data: ContactFormData | CanalEticoFormData;
}

interface SendEmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Envia email através da Supabase Edge Function
 * @param params - Parâmetros do formulário
 * @returns Promise com resultado do envio
 */
export async function sendEmail(
  params: SendEmailParams
): Promise<SendEmailResponse> {
  try {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      throw new Error(
        "Configuração do Supabase não encontrada. Verifique as variáveis de ambiente."
      );
    }

    const response = await fetch(
      `${SUPABASE_URL}/functions/v1/send-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          formType: params.formType,
          data: params.data,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Erro ao enviar email");
    }

    return {
      success: true,
      message: "Email enviado com sucesso!",
    };
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Erro desconhecido ao enviar email",
    };
  }
}

/**
 * Valida formato de email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valida formato de telefone brasileiro
 */
export function isValidPhone(phone: string): boolean {
  // Remove caracteres não numéricos
  const cleanPhone = phone.replace(/\D/g, "");
  // Aceita telefones com 10 ou 11 dígitos (com ou sem 9 no celular)
  return cleanPhone.length === 10 || cleanPhone.length === 11;
}

/**
 * Formata telefone para padrão brasileiro
 */
export function formatPhone(phone: string): string {
  const cleanPhone = phone.replace(/\D/g, "");

  if (cleanPhone.length === 11) {
    return cleanPhone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (cleanPhone.length === 10) {
    return cleanPhone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  }

  return phone;
}
