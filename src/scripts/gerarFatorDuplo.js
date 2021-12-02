import { http } from "@tauri-apps/api";

export const gerarFatorDuplo = async ({ cookie, referer, productId }) => {
  const client = await http.getClient();
  const headers = {
    cookie,
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    origin: "https://www.nike.com.br",
    referer,
  };
  const payload = `CelularCliente=${executionParams.phoneNumber}&ProdutoId=${productId}`;
  const { data } = await client.post(
    "https://www.nike.com.br/auth/two-factor/generate",
    { payload },
    { headers, timeout: 60000 }
  );
  // const { data } = await axios({
  //   method: "post",
  //   url: "https://www.nike.com.br/auth/two-factor/generate",
  //   headers,
  //   data: dataRequest,
  //   timeout: 60000,
  // });

  // if (!data || !data.valid) {
  //   throw Error();
  // }

  return;
};
