import { http } from "@tauri-apps/api";

export const comprarProduto = async ({
  cookie,
  cardInformations,
  deliveryInformations,
}) => {
  const client = await http.getClient();
  const headers = {
    cookie,
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    origin: "https://www.nike.com.br",
    referer: "https://www.nike.com.br/checkout",
  };
  const payload = `MeioPagamentoId=1&ClearsaleFingerprint=&TipoVale=&SalvarCartao=0&CartaoCreditoId=${cardInformations.id}&UltimosDigitos=${cardInformations.lastDigits}&EnderecoId=${deliveryInformations.id}&Utm%5BUtmSource%5D=Direct&Utm%5BUtmMedium%5D=&Utm%5BUtmTerm%5D=&Utm%5BUtmCp%5D=&Utm%5BUtmContent%5D=&Utm%5BUtmCampaign%5D=&Bandeira=${cardInformations.brand}&Bandeira_2=&Nome=&Nome_2=&NumCartao1=&NumCartao1_2=&ValidadeMesAno=%2F&ValidadeMesAno2=null%2Fnull&CodSeguranca=&CodSeguranca_2=&Parcelamento=1&Parcelamento_2=&DocumentoPortador=&DocumentoPortador2=&DoisCartoes=0&ValorCartao_1=&ValorCartao_2=&ShippingType=Normal`;
  const response = await client.post(
    "https://www.nike.com.br/Pagamento/gravarPedido",
    { type: "Text", payload },
    {
      headers,
      timeout: 60000,
    }
  );

  // const response = await axios({
  //   method: "post",
  //   url: "https://www.nike.com.br/Pagamento/gravarPedido",
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
