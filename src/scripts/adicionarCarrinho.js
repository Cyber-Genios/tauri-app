import { http } from "@tauri-apps/api";

export const adicionarCarrinho = async ({
  cookie,
  productId,
  referer,
  twoFactorId,
}) => {
  const client = await http.getClient();
  const headers = {
    cookie,
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    origin: "https://www.nike.com.br",
    referer,
  };
  const payload = `EPrincipal=${productId}&EAcessorio%5B%5D=&ECompreJunto%5B%5D=&AdicaoProdutoId=&Origem=&SiteId=106&g-recaptcha-response=`;

  const { data } = await client.post(
    "https://www.nike.com.br/Carrinho/Adicionar",
    { type: "Text", payload },
    { headers, timeout: 10000 }
  );

  // const { data } = await axios({
  //   method: "post",
  //   url: "https://www.nike.com.br/Carrinho/Adicionar",
  //   data: dataRequest,
  //   headers,
  //   timeout: 60000,
  // });

  // if (!data.success && data.twoFactorAuth) {
  //   const twoFactor = async () =>
  //     await executeOrLog(
  //       twoFactorGenerate,
  //       {
  //         cookie,
  //         referer,
  //         productId: twoFactorId,
  //       },
  //       null,
  //       "Gerar código de autenticação dupla"
  //     );
  //   await infineRetry(
  //     twoFactor,
  //     null,
  //     5000,
  //     "Gerar código de autenticação dupla"
  //   );
  //   const code = readlineSync.question("Codigo de autenticação: \n", {
  //     limit: (input) => input.length === 6,
  //     limitMessage: "Codigo de autenticação deve ter 6 caracteres",
  //   });

  //   const twoFactorConfirm = await executeOrLog(
  //     twoFactorConfirm,
  //     {
  //       cookie,
  //       referer,
  //       productId: twoFactorId,
  //       code,
  //     },
  //     null,
  //     "Confirmar Código de autenticação"
  //   );

  //   await infineRetry(
  //     twoFactor,
  //     null,
  //     5000,
  //     "Confirmar Código de autenticação"
  //   );
  // }

  // if (!data) {
  //   throw Error();
  // }

  return data;
};
