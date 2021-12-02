import { http } from "@tauri-apps/api";
import { getFatorDuploID } from "./getFatorDuploID";
import { getProdutoID } from "./getProdutoID";

export const buscarInformacoesProduto = async ({
  cookie,
  url,
  tamanho,
  getTwoFactorId,
}) => {
  const client = await http.getClient();

  const headers = {
    cookie,
    referer: url,
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    origin: "https://www.nike.com.br",
  };

  const { data } = await client.post(
    "https://www.nike.com.br/Requisicao/Ajax",
    { type: "Text", payload: "" },
    { headers, timeout: 10000 }
  );

  if (!data || !data.Carrinho_Resumo) throw Error();

  const produtoId = await getProdutoID({ data, tamanho });

  if (getTwoFactorId) {
    const fatorDuploId = await getFatorDuploID({ data, tamanho });
    return { produtoId, fatorDuploId };
  }

  return produtoId;
};

// http.getClient().then((client) => {
//   console.log(client);
//   client
//     .post(
//       "https://www.nike.com.br/Requisicao/Ajax",
//       {
//         type: "Text",
//         payload: "",
//       },
//       {
//         headers: {
//           cookie,
//           referer: "https://www.nike.com.br",
//           origin: "https://www.nike.com.br",
//         },
//       }
//     )
//     .then((response) => console.log(response))
//     .catch((e) => console.log(e));
// });
