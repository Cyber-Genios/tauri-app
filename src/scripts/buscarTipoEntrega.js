import { http } from "@tauri-apps/api";

export const buscarTipoEntrega = async ({ cookie, cep }) => {
  const client = await http.getClient();
  const headers = {
    cookie,
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    origin: "https://www.nike.com.br",
  };

  const { data } = await client.post(
    "https://www.nike.com.br/Frete/CalcularFretePromocao",
    { type: "Text", payload: `cep=${cep}` },
    { headers, timeout: 60000 }
  );

  // const { data } = await axios({
  //   method: "post",
  //   url: "https://www.nike.com.br/Frete/CalcularFretePromocao",
  //   headers,
  //   data: `cep=${cep}`,
  // });
  // if (!data || !data.success) throw Error();
  const [frete] = data.frete;
  return frete.TipoEntrega;
};
