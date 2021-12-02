import { http } from "@tauri-apps/api";

export const limparCarrinho = async ({ cookie, productId }) => {
  const client = await http.getClient();
  const headers = {
    cookie,
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    origin: "https://www.nike.com.br",
  };
  const payload = `Codigo=${productId}&SiteId=106&customid=`;
  const response = await client.post(
    "https://www.nike.com.br/Carrinho/Excluir",
    { type: "Text", payload },
    { headers, timeout: 60000 }
  );
  // const response = await axios({
  //   method: "post",
  //   url: "https://www.nike.com.br/Carrinho/Excluir",
  //   headers,
  //   data: dataRequest,
  //   timeout: 60000,
  // });
  const { data } = response;
  // if (!data || !data.success) {
  //   throw Error();
  // }
  return data;
};
