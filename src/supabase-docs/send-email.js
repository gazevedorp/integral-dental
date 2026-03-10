// import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
// const TURNSTILE_SECRET_KEY = Deno.env.get("TURNSTILE_SECRET_KEY");

// // Configuração dos destinatários por tipo de formulário
// const EMAIL_RECIPIENTS = {
//   contact: ["administracao@integraldental.com.br"],
//   canalEtico: ["administracao@integraldental.com.br"],
// };

// // Importar os templates (você precisará copiar os componentes aqui ou criar versões compatíveis com Deno)
// interface ContactEmailData {
//   nome: string;
//   email: string;
//   telefone: string;
//   assunto: string;
//   mensagem: string;
// }

// interface CanalEticoEmailData {
//   nome: string;
//   email: string;
//   telefone: string;
//   tipo: string;
//   mensagem: string;
// }

// // Template de email para Contato (versão inline para Deno)
// function ContactEmailTemplate(props: ContactEmailData) {
//   const { nome, email, telefone, assunto, mensagem } = props;

//   return `
//     <html>
//       <head>
//         <meta charset="utf-8" />
//         <title>Novo Contato - Integral Dental</title>
//       </head>
//       <body style="margin: 0; padding: 0; background-color: #f0f9ff; font-family: Arial, sans-serif; color: #1e293b;">
//         <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f0f9ff; margin: 0; padding: 0;">
//           <tr>
//             <td align="center" style="padding: 30px 15px;">
//               <table width="600" border="0" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 600px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); background-color: #ffffff; overflow: hidden;">
//                 <tr>
//                   <td style="background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); padding: 30px 20px; text-align: center;">
//                     <h1 style="margin: 0; font-size: 28px; color: #ffffff; font-weight: bold;">Novo Contato Recebido</h1>
//                     <p style="margin: 8px 0 0 0; font-size: 14px; color: #e0f2fe;">Integral Dental - Formulário de Contato</p>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 30px;">
//                     <h2 style="font-size: 20px; margin-bottom: 24px; color: #0284c7; text-align: left; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">Informações do Contato</h2>
//                     <table width="100%" style="border-collapse: collapse; margin-bottom: 30px;">
//                       <tbody>
//                         <tr>
//                           <td style="font-weight: bold; color: #0ea5e9; padding: 12px 0; width: 180px; vertical-align: top; font-size: 14px;">Nome Completo:</td>
//                           <td style="padding: 12px 0; color: #1e293b; font-size: 14px;">${nome}</td>
//                         </tr>
//                         <tr>
//                           <td style="font-weight: bold; color: #0ea5e9; padding: 12px 0; vertical-align: top; font-size: 14px;">E-mail:</td>
//                           <td style="padding: 12px 0; color: #1e293b; font-size: 14px;"><a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a></td>
//                         </tr>
//                         <tr>
//                           <td style="font-weight: bold; color: #0ea5e9; padding: 12px 0; vertical-align: top; font-size: 14px;">Telefone:</td>
//                           <td style="padding: 12px 0; color: #1e293b; font-size: 14px;">${telefone}</td>
//                         </tr>
//                         <tr>
//                           <td style="font-weight: bold; color: #0ea5e9; padding: 12px 0; vertical-align: top; font-size: 14px;">Assunto:</td>
//                           <td style="padding: 12px 0; color: #1e293b; font-size: 14px;"><span style="background-color: #e0f2fe; color: #0284c7; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600;">${assunto}</span></td>
//                         </tr>
//                       </tbody>
//                     </table>
//                     <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #0ea5e9;">
//                       <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #0284c7; font-weight: bold;">Mensagem:</h3>
//                       <p style="margin: 0; font-size: 14px; line-height: 22px; color: #475569; white-space: pre-wrap;">${mensagem}</p>
//                     </div>
//                     <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0 20px 0;" />
//                     <p style="font-size: 13px; line-height: 20px; color: #64748b; margin: 0;">E-mail gerado automaticamente pelo site Integral Dental.<br/>Favor responder diretamente para o e-mail do cliente.</p>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style="background-color: #0ea5e9; text-align: center; padding: 20px;">
//                     <p style="margin: 0; font-size: 13px; color: #ffffff; font-weight: 500;">Integral Dental © ${new Date().getFullYear()} | Todos os direitos reservados</p>
//                   </td>
//                 </tr>
//               </table>
//             </td>
//           </tr>
//         </table>
//       </body>
//     </html>
//   `;
// }

// // Template de email para Canal Ético (versão inline para Deno)
// function CanalEticoEmailTemplate(props: CanalEticoEmailData) {
//   const { nome, email, telefone, tipo, mensagem } = props;

//   const tipoLabels: { [key: string]: string } = {
//     reclamacao: "Reclamação",
//     sugestao: "Sugestão",
//     elogio: "Elogio",
//     duvida: "Dúvida",
//   };

//   const tipoColors: { [key: string]: { bg: string; text: string; border: string } } = {
//     reclamacao: { bg: "#fee2e2", text: "#991b1b", border: "#ef4444" },
//     sugestao: { bg: "#dbeafe", text: "#1e40af", border: "#3b82f6" },
//     elogio: { bg: "#d1fae5", text: "#065f46", border: "#10b981" },
//     duvida: { bg: "#fef3c7", text: "#92400e", border: "#f59e0b" },
//   };

//   const tipoColor = tipoColors[tipo] || tipoColors.duvida;

//   return `
//     <html>
//       <head>
//         <meta charset="utf-8" />
//         <title>Nova Manifestação - Canal Ético Integral Dental</title>
//       </head>
//       <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: Arial, sans-serif; color: #1e293b;">
//         <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; margin: 0; padding: 0;">
//           <tr>
//             <td align="center" style="padding: 30px 15px;">
//               <table width="600" border="0" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 600px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); background-color: #ffffff; overflow: hidden;">
//                 <tr>
//                   <td style="background: linear-gradient(135deg, #334155 0%, #1e293b 100%); padding: 30px 20px; text-align: center;">
//                     <h1 style="margin: 0; font-size: 28px; color: #ffffff; font-weight: bold;">Nova Manifestação - Canal Ético</h1>
//                     <p style="margin: 8px 0 0 0; font-size: 14px; color: #cbd5e1;">Integral Dental - Prazo de resposta: 7 dias úteis</p>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 20px 30px 0 30px; text-align: center;">
//                     <div style="display: inline-block; background-color: ${tipoColor.bg}; color: ${tipoColor.text}; padding: 10px 24px; border-radius: 20px; font-size: 16px; font-weight: bold; border: 2px solid ${tipoColor.border};">
//                       ${tipoLabels[tipo] || tipo}
//                     </div>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 30px;">
//                     <h2 style="font-size: 20px; margin-bottom: 24px; color: #334155; text-align: left; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">Dados do Manifestante</h2>
//                     <table width="100%" style="border-collapse: collapse; margin-bottom: 30px;">
//                       <tbody>
//                         <tr>
//                           <td style="font-weight: bold; color: #0ea5e9; padding: 12px 0; width: 180px; vertical-align: top; font-size: 14px;">Nome Completo:</td>
//                           <td style="padding: 12px 0; color: #1e293b; font-size: 14px;">${nome}</td>
//                         </tr>
//                         <tr>
//                           <td style="font-weight: bold; color: #0ea5e9; padding: 12px 0; vertical-align: top; font-size: 14px;">E-mail:</td>
//                           <td style="padding: 12px 0; color: #1e293b; font-size: 14px;"><a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a></td>
//                         </tr>
//                         <tr>
//                           <td style="font-weight: bold; color: #0ea5e9; padding: 12px 0; vertical-align: top; font-size: 14px;">Telefone:</td>
//                           <td style="padding: 12px 0; color: #1e293b; font-size: 14px;">${telefone}</td>
//                         </tr>
//                       </tbody>
//                     </table>
//                     <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid ${tipoColor.border};">
//                       <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #334155; font-weight: bold;">Manifestação:</h3>
//                       <p style="margin: 0; font-size: 14px; line-height: 22px; color: #475569; white-space: pre-wrap;">${mensagem}</p>
//                     </div>
//                     <div style="margin-top: 24px; background-color: #fef3c7; border: 1px solid #fbbf24; border-radius: 8px; padding: 16px;">
//                       <p style="margin: 0; font-size: 14px; color: #92400e; font-weight: 600;">⚠️ Lembrete: Esta manifestação deve ser respondida em até 7 dias úteis.</p>
//                     </div>
//                     <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0 20px 0;" />
//                     <p style="font-size: 13px; line-height: 20px; color: #64748b; margin: 0;">E-mail gerado automaticamente pelo Canal Ético - Integral Dental.<br/>Favor responder diretamente para o e-mail do manifestante.</p>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style="background-color: #334155; text-align: center; padding: 20px;">
//                     <p style="margin: 0; font-size: 13px; color: #ffffff; font-weight: 500;">Integral Dental - Canal Ético © ${new Date().getFullYear()} | Todos os direitos reservados</p>
//                   </td>
//                 </tr>
//               </table>
//             </td>
//           </tr>
//         </table>
//       </body>
//     </html>
//   `;
// }

// serve(async (req) => {
//   // CORS headers
//   const corsHeaders = {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Headers":
//       "authorization, x-client-info, apikey, content-type",
//   };

//   // Handle CORS preflight
//   if (req.method === "OPTIONS") {
//     return new Response("ok", { headers: corsHeaders });
//   }

//   try {
//     if (req.method !== "POST") {
//       return new Response(
//         JSON.stringify({ error: "Method not allowed. Use POST." }),
//         {
//           status: 405,
//           headers: { ...corsHeaders, "Content-Type": "application/json" },
//         }
//       );
//     }

//     const { formType, data, turnstileToken } = await req.json();

//     if (!formType || !data) {
//       return new Response(
//         JSON.stringify({ error: "Missing formType or data" }),
//         {
//           status: 400,
//           headers: { ...corsHeaders, "Content-Type": "application/json" },
//         }
//       );
//     }

//     // Validar Cloudflare Turnstile token
//     if (!turnstileToken) {
//       return new Response(
//         JSON.stringify({ error: "Verificação de segurança não fornecida" }),
//         {
//           status: 400,
//           headers: { ...corsHeaders, "Content-Type": "application/json" },
//         }
//       );
//     }

//     const turnstileResponse = await fetch(
//       "https://challenges.cloudflare.com/turnstile/v0/siteverify",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           secret: TURNSTILE_SECRET_KEY,
//           response: turnstileToken,
//         }),
//       }
//     );

//     const turnstileResult = await turnstileResponse.json();
//     if (!turnstileResult.success) {
//       console.error("Turnstile validation failed:", turnstileResult);
//       return new Response(
//         JSON.stringify({ error: "Verificação de segurança falhou. Tente novamente." }),
//         {
//           status: 403,
//           headers: { ...corsHeaders, "Content-Type": "application/json" },
//         }
//       );
//     }

//     let htmlContent: string;
//     let subject: string;
//     let recipients: string[];

//     // Gera o HTML e configura os destinatários baseado no tipo de formulário
//     if (formType === "contact") {
//       htmlContent = ContactEmailTemplate(data as ContactEmailData);
//       subject = `Novo Contato - ${data.nome}`;
//       recipients = EMAIL_RECIPIENTS.contact;
//     } else if (formType === "canalEtico") {
//       htmlContent = CanalEticoEmailTemplate(data as CanalEticoEmailData);
//       subject = `Canal Ético: ${data.tipo} - ${data.nome}`;
//       recipients = EMAIL_RECIPIENTS.canalEtico;
//     } else {
//       return new Response(
//         JSON.stringify({ error: "Invalid formType" }),
//         {
//           status: 400,
//           headers: { ...corsHeaders, "Content-Type": "application/json" },
//         }
//       );
//     }

//     // Envia o email usando Resend
//     const resendResponse = await fetch("https://api.resend.com/emails", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${RESEND_API_KEY}`,
//       },
//       body: JSON.stringify({
//         from: "Contato Site <mail@innovaihub.com.br>",
//         to: recipients,
//         subject: subject,
//         html: htmlContent,
//         reply_to: data.email, // Permite responder diretamente ao cliente
//       }),
//     });

//     const resendData = await resendResponse.json();

//     if (!resendResponse.ok) {
//       console.error("Resend error:", resendData);
//       return new Response(
//         JSON.stringify({
//           success: false,
//           error: "Failed to send email",
//           details: resendData
//         }),
//         {
//           status: 500,
//           headers: { ...corsHeaders, "Content-Type": "application/json" },
//         }
//       );
//     }

//     return new Response(
//       JSON.stringify({ success: true, data: resendData }),
//       {
//         status: 200,
//         headers: { ...corsHeaders, "Content-Type": "application/json" },
//       }
//     );
//   } catch (error: any) {
//     console.error("Error:", error);
//     return new Response(
//       JSON.stringify({ success: false, message: error.message }),
//       {
//         status: 500,
//         headers: { ...corsHeaders, "Content-Type": "application/json" },
//       }
//     );
//   }
// });
