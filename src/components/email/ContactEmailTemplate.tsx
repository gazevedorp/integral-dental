interface ContactEmailTemplateProps {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

export function ContactEmailTemplate(props: ContactEmailTemplateProps) {
  const { nome, email, telefone, assunto, mensagem } = props;

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Novo Contato - Integral Dental</title>
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#f0f9ff",
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
            backgroundColor: "#f0f9ff",
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
                      background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
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
                      Novo Contato Recebido
                    </h1>
                    <p
                      style={{
                        margin: "8px 0 0 0",
                        fontSize: "14px",
                        color: "#e0f2fe",
                      }}
                    >
                      Integral Dental - Formulário de Contato
                    </p>
                  </td>
                </tr>

                {/* Conteúdo principal */}
                <tr>
                  <td style={{ padding: "30px" }}>
                    <h2
                      style={{
                        fontSize: "20px",
                        marginBottom: "24px",
                        color: "#0284c7",
                        textAlign: "left",
                        borderBottom: "2px solid #0ea5e9",
                        paddingBottom: "10px",
                      }}
                    >
                      Informações do Contato
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
                            Assunto:
                          </td>
                          <td
                            style={{
                              padding: "12px 0",
                              color: "#1e293b",
                              fontSize: "14px",
                            }}
                          >
                            <span
                              style={{
                                backgroundColor: "#e0f2fe",
                                color: "#0284c7",
                                padding: "4px 12px",
                                borderRadius: "12px",
                                fontSize: "13px",
                                fontWeight: "600",
                              }}
                            >
                              {assunto}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div
                      style={{
                        backgroundColor: "#f8fafc",
                        padding: "20px",
                        borderRadius: "8px",
                        borderLeft: "4px solid #0ea5e9",
                      }}
                    >
                      <h3
                        style={{
                          margin: "0 0 12px 0",
                          fontSize: "16px",
                          color: "#0284c7",
                          fontWeight: "bold",
                        }}
                      >
                        Mensagem:
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
                      E-mail gerado automaticamente pelo site Integral Dental.
                      <br />
                      Favor responder diretamente para o e-mail do cliente.
                    </p>
                  </td>
                </tr>

                {/* Rodapé */}
                <tr>
                  <td
                    style={{
                      backgroundColor: "#0ea5e9",
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
                      Integral Dental © {new Date().getFullYear()} | Todos os
                      direitos reservados
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
