import { http } from "@tauri-apps/api";

export const buscarInformacoesProduto = async ({ cookie, url }) => {
  const client = await http.getClient();

  const headers = {
    cookie,
    referer: url,
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    origin: "https://www.nike.com.br",
  };

  const { data } = await client.post(
    "https://www.nike.com.br/Requisicao/Ajax",
    null,
    { headers, timeout: 60000 }
  );
  // if (!data || !data.Carrinho_Resumo) throw Error();
  return data;
};
