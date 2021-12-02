import { http } from "@tauri-apps/api";

export const selecionarEntrega = async ({ cookie, deliveryType }) => {
  const client = await http.getClient();
  const headers = {
    cookie,
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    origin: "https://www.nike.com.br",
  };
  const payload = `hash=&tipoEntrega=${deliveryType}`;
  const response = await client.post(
    "https://www.nike.com.br/Frete/EscolheFreteCarrinho",
    { type: "Text", payload },
    { headers, timeout: 60000 }
  );
  // const response = await axios({
  //   method: "post",
  //   url: "https://www.nike.com.br/Frete/EscolheFreteCarrinho",
  //   data: dataRequest,
  //   headers,
  //   timeout: 60000,
  // });
  const { data } = response;
  // if (!data || !data.success) {
  //   throw Error();
  // }
  return data;
};
