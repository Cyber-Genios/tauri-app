import { http } from "@tauri-apps/api";

export const buscarInformacoesEntrega = async ({ cookie }) => {
  const client = await http.getClient();

  const headers = {
    cookie,
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    origin: "https://www.nike.com.br",
  };

  const { data } = await client.post("https://www.nike.com.br/checkout", null, {
    headers,
    timeout: 60000,
  });

  const inputCepRegex = `<input type="hidden" id="calcularFreteCallback"(.*?)>`;
  const valorCepRegex = `value="(.*?)"`;
  const [inputCepRegexResult] = data.match(inputCepRegex);
  const [ignore, deliveryAddress] = inputCepRegexResult.match(valorCepRegex);

  const inputAddressIdRegex = `<input type="hidden" id="user-shipping-address-id"(.*?)>`;
  const valorAddressIdRegex = `value="(.*?)"`;
  const [inputAddressIdRegexResult] = data.match(inputAddressIdRegex);
  const [ignoreToo, deliveryId] =
    inputAddressIdRegexResult.match(valorAddressIdRegex);

  // if (!data || !deliveryAddress || !deliveryId) throw Error();

  return {
    id: deliveryId,
    address: deliveryAddress,
  };
};
