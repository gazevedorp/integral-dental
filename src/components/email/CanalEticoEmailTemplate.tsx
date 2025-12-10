import * as React from "react";

interface CanalEticoEmailTemplateProps {
  nome: string;
  email: string;
  telefone: string;
  tipo: string;
  mensagem: string;
}

export function CanalEticoEmailTemplate(props: CanalEticoEmailTemplateProps) {
  const { nome, email, telefone, tipo, mensagem } = props;

  // Mapeia os tipos para labels mais apresentáveis
  const tipoLabels: { [key: string]: string } = {
    reclamacao: "Reclamação",
    sugestao: "Sugestão",
    elogio: "Elogio",
    duvida: "Dúvida",
  };

  // Cores diferentes para cada tipo
  const tipoColors: { [key: string]: { bg: string; text: string; border: string } } = {
    reclamacao: { bg: "#fee2e2", text: "#991b1b", border: "#ef4444" },
    sugestao: { bg: "#dbeafe", text: "#1e40af", border: "#3b82f6" },
    elogio: { bg: "#d1fae5", text: "#065f46", border: "#10b981" },
    duvida: { bg: "#fef3c7", text: "#92400e", border: "#f59e0b" },
  };

  const tipoColor = tipoColors[tipo] || tipoColors.duvida;

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Nova Manifestação - Canal Ético Integral Dental</title>
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#f8fafc",
          fontFamily: "Arial, sans-serif",
          color: "#1e293b",
        }}
      >
        {/* Container principal */}
        <table
          width="100%"
          border={0}
          cellPadding="0"
          cellSpacing="0"
          style={{
            backgroundColor: "#f8fafc",
            margin: 0,
            padding: 0,
          }}
        >
          <tr>
            <td align="center" style={{ padding: "30px 15px" }}>
              {/* Card central */}
              <table
                width="600"
                border={0}
                cellPadding="0"
                cellSpacing="0"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#ffffff",
                  overflow: "hidden",
                }}
              >
                {/* Cabeçalho */}
                <tr>
                  <td
                    style={{
                      background: "linear-gradient(135deg, #334155 0%, #1e293b 100%)",
                      padding: "30px 20px",
                      textAlign: "center",
                    }}
                  >
                    <h1
                      style={{
                        margin: 0,
                        fontSize: "28px",
                        color: "#ffffff",
                        fontWeight: "bold",
                      }}
                    >
                      Nova Manifestação - Canal Ético
                    </h1>
                    <p
                      style={{
                        margin: "8px 0 0 0",
                        fontSize: "14px",
                        color: "#cbd5e1",
                      }}
                    >
                      Integral Dental - Prazo de resposta: 7 dias úteis
                    </p>
                  </td>
                </tr>

                {/* Badge de Tipo de Manifestação */}
                <tr>
                  <td style={{ padding: "20px 30px 0 30px", textAlign: "center" }}>
                    <div
                      style={{
                        display: "inline-block",
                        backgroundColor: tipoColor.bg,
                        color: tipoColor.text,
                        padding: "10px 24px",
                        borderRadius: "20px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        border: `2px solid ${tipoColor.border}`,
                      }}
                    >
                      {tipoLabels[tipo] || tipo}
                    </div>
                  </td>
                </tr>

                {/* Conteúdo principal */}
                <tr>
                  <td style={{ padding: "30px" }}>
                    <h2
                      style={{
                        fontSize: "20px",
                        marginBottom: "24px",
                        color: "#334155",
                        textAlign: "left",
                        borderBottom: "2px solid #0ea5e9",
                        paddingBottom: "10px",
                      }}
                    >
                      Dados do Manifestante
                    </h2>

                    <table
                      width="100%"
                      style={{
                        borderCollapse: "collapse",
                        marginBottom: "30px",
                      }}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              fontWeight: "bold",
                              color: "#0ea5e9",
                              padding: "12px 0",
                              width: "180px",
                              verticalAlign: "top",
                              fontSize: "14px",
                            }}
                          >
                            Nome Completo:
                          </td>
                          <td
                            style={{
                              padding: "12px 0",
                              color: "#1e293b",
                              fontSize: "14px",
                            }}
                          >
                            {nome}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontWeight: "bold",
                              color: "#0ea5e9",
                              padding: "12px 0",
                              verticalAlign: "top",
                              fontSize: "14px",
                            }}
                          >
                            E-mail:
                          </td>
                          <td
                            style={{
                              padding: "12px 0",
                              color: "#1e293b",
                              fontSize: "14px",
                            }}
                          >
                            <a
                              href={`mailto:${email}`}
                              style={{ color: "#0ea5e9", textDecoration: "none" }}
                            >
                              {email}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontWeight: "bold",
                              color: "#0ea5e9",
                              padding: "12px 0",
                              verticalAlign: "top",
                              fontSize: "14px",
                            }}
                          >
                            Telefone:
                          </td>
                          <td
                            style={{
                              padding: "12px 0",
                              color: "#1e293b",
                              fontSize: "14px",
                            }}
                          >
                            {telefone}
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div
                      style={{
                        backgroundColor: "#f8fafc",
                        padding: "20px",
                        borderRadius: "8px",
                        borderLeft: `4px solid ${tipoColor.border}`,
                      }}
                    >
                      <h3
                        style={{
                          margin: "0 0 12px 0",
                          fontSize: "16px",
                          color: "#334155",
                          fontWeight: "bold",
                        }}
                      >
                        Manifestação:
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "14px",
                          lineHeight: "22px",
                          color: "#475569",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        {mensagem}
                      </p>
                    </div>

                    {/* Alerta de Prazo */}
                    <div
                      style={{
                        marginTop: "24px",
                        backgroundColor: "#fef3c7",
                        border: "1px solid #fbbf24",
                        borderRadius: "8px",
                        padding: "16px",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontSize: "14px",
                          color: "#92400e",
                          fontWeight: "600",
                        }}
                      >
                        ⚠️ Lembrete: Esta manifestação deve ser respondida em até 7
                        dias úteis.
                      </p>
                    </div>

                    <hr
                      style={{
                        border: "none",
                        borderTop: "1px solid #e2e8f0",
                        margin: "30px 0 20px 0",
                      }}
                    />

                    <p
                      style={{
                        fontSize: "13px",
                        lineHeight: "20px",
                        color: "#64748b",
                        margin: 0,
                      }}
                    >
                      E-mail gerado automaticamente pelo Canal Ético - Integral Dental.
                      <br />
                      Favor responder diretamente para o e-mail do manifestante.
                    </p>
                  </td>
                </tr>

                {/* Rodapé */}
                <tr>
                  <td
                    style={{
                      backgroundColor: "#334155",
                      textAlign: "center",
                      padding: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: "13px",
                        color: "#ffffff",
                        fontWeight: "500",
                      }}
                    >
                      Integral Dental - Canal Ético © {new Date().getFullYear()} |
                      Todos os direitos reservados
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
}
