import { http } from "@tauri-apps/api";

export const buscarCartoes = async ({ cookie }) => {
  const client = await http.getClient();
  const headers = {
    cookie,
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    origin: "https://www.nike.com.br",
  };

  const { data } = await client.post(
    "https://www.nike.com.br/Checkout/VerificaCartoesSalvos",
    { type: "Text", payload: "" },
    { headers, timeout: 60000 }
  );

  // const requestResponse = await axios({
  //   method: "post",
  //   url: "https://www.nike.com.br/Checkout/VerificaCartoesSalvos",
  //   headers,
  //   timeout: 60000,
  // });
  // if (!data || !data.success) {
  //   throw Error();
  // }
  const [firstCard] = data?.dados;
  const response = {
    brand: firstCard.Bandeira,
    id: firstCard.CartaoCreditoId,
    lastDigits: firstCard.UltimosDigitos,
  };
  return response;
};
