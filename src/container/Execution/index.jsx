import { useContext, useState, useEffect } from "react";
import { Context } from "../../components/Context";
import { buscarInformacoesProduto } from "../../scripts/buscarInformacoesProduto";
import { adicionarCarrinho } from "../../scripts/adicionarCarrinho";
import { buscarInformacoesEntrega } from "../../scripts/buscarInformacoesEntrega";
import { selecionarEntrega } from "../../scripts/selecionarEntrega";
import { buscarCartoes } from "../../scripts/buscarCartoes";
import { limparCarrinho } from "../../scripts/limparCarrinho";
import { gerarFatorDuplo } from "../../scripts/gerarFatorDuplo";
import { confirmarFatorDuplo } from "../../scripts/confirmarFatorDuplo";
import { comprarProduto } from "../../scripts/comprarProduto";
import { retry } from "../../utils/retry";
import { schedule } from "../../utils/schedule";
import { buscarTipoEntrega } from "../../scripts/buscarTipoEntrega";
import { CssTextField } from "../../components/CssTextField";

export const Execution = () => {
  const [execution] = useContext(Context);
  const {
    cookie,
    execDate,
    execUrl,
    execNumber,
    execPhone,
    presetDate,
    presetUrl,
    presetNumber,
  } = execution;

  const [presetMessage, setPresetMessage] = useState("");
  const [waitExecutionMessage, setWaitExecutionMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [executionMessage, setExecutionMessage] = useState("");
  const [renderTwoFactorConfirm, setRenderTwoFactorConfirm] = useState(false);
  const [twoFactorToken, setTwoFactorToken] = useState("");
  const [twoFactorSuccess, setTwoFactorSuccess] = useState(false);
  const [twoFactorGenerateSuccess, setTwoFactorGenerateSuccess] =
    useState(false);
  const [executionParams, setExecutionParams] = useState({
    productId: "",
    cardInformations: {},
    deliveryInformations: {},
  });

  const buscarInformacoesProdutoFN = async ({
    cookie,
    url,
    tamanho,
    getTwoFactorId,
  }) => {
    return await buscarInformacoesProduto({
      cookie,
      url,
      tamanho,
      getTwoFactorId,
    });
  };

  const adicionarCarrinhoFN = async ({ cookie, url, productId }) => {
    return await adicionarCarrinho({ cookie, url, productId });
  };

  const buscarInformacoesEntregaFN = async ({ cookie }) => {
    return await buscarInformacoesEntrega({ cookie });
  };

  const buscarTipoEntregaFN = async ({ cookie, cep }) => {
    return await buscarTipoEntrega({ cookie, cep });
  };

  const selecionarEntregaFN = async ({ cookie, deliveryType }) => {
    return await selecionarEntrega({ cookie, deliveryType });
  };

  const buscarCartoesFN = async ({ cookie }) => {
    return await buscarCartoes({ cookie });
  };

  const limparCarrinhoFN = async ({ cookie, productId }) => {
    return await limparCarrinho({ cookie, productId });
  };

  const gerarFatorDuploFN = async ({
    cookie,
    referer,
    productId,
    telefone,
  }) => {
    return await gerarFatorDuplo({ cookie, referer, productId, telefone });
  };

  const confirmarFatorDuploFN = async ({
    cookie,
    referer,
    productId,
    code,
  }) => {
    return await confirmarFatorDuplo({ cookie, referer, productId, code });
  };

  const comprarProdutoFN = async ({
    cookie,
    cardInformations,
    deliveryInformations,
  }) => {
    return await comprarProduto({
      cookie,
      cardInformations,
      deliveryInformations,
    });
  };

  const generateTwoFactor = async ({
    cookie,
    referer,
    productId,
    telefone,
  }) => {
    await retry(
      gerarFatorDuploFN,
      { cookie, referer, productId, telefone },
      10000,
      "Gerar código de autenticação dupla",
      setExecutionMessage,
      setErrorMessage
    );
  };

  const confirmTwoFactor = async ({ cookie, referer, productId, code }) => {
    await retry(
      confirmarFatorDuploFN,
      { cookie, referer, productId, code },
      10000,
      "Confimar código de autenticação dupla",
      setExecutionMessage,
      setErrorMessage
    );
  };

  useEffect(async () => {
    if (renderTwoFactorConfirm) {
      const response = await generateTwoFactor({
        cookie,
        referer: execUrl,
        productId: executionParams.productId,
        telefone: execPhone,
      });
      console.log(response);
      setTwoFactorGenerateSuccess(true);
    }
  }, [renderTwoFactorConfirm]);

  useEffect(async () => {
    if (twoFactorSuccess) {
      await retry(
        adicionarCarrinhoFN,
        {
          cookie,
          url: execUrl,
          productId: executionParams.productId,
        },
        10000,
        "Adicionar produto no carrinho",
        setExecutionMessage,
        setErrorMessage
      );
      await retry(
        comprarProdutoFN,
        {
          cookie,
          cardInformations: executionParams.cardInformations,
          deliveryInformations: executionParams.deliveryInformations,
        },
        10000,
        "Finalizar compra",
        setExecutionMessage,
        setErrorMessage
      );
      setExecutionMessage("Compra realizada com sucesso!");
    }
  }, [twoFactorSuccess]);

  const twoFactorConfirm = async () => {
    if (
      twoFactorGenerateSuccess &&
      twoFactorToken &&
      twoFactorToken.length === 6
    ) {
      const response = await confirmTwoFactor({
        cookie,
        referer: execUrl,
        code: twoFactorToken,
      });
      console.log(response);
      setTwoFactorSuccess(true);
      setRenderTwoFactorConfirm(false);
    }
  };

  const execute = async () => {
    // await schedule(presetDate, setPresetMessage);
    // const presetProdutoID = await retry(
    //   buscarInformacoesProdutoFN,
    //   { cookie, url: presetUrl, tamanho: presetNumber },
    //   10000,
    //   "Buscar informações do produto de preset",
    //   setExecutionMessage,
    //   setErrorMessage
    // );

    // await retry(
    //   adicionarCarrinhoFN,
    //   {
    //     cookie,
    //     url: presetUrl,
    //     productId: presetProdutoID,
    //   },
    //   10000,
    //   "Adicionar produto preset no carrinho",
    //   setExecutionMessage,
    //   setErrorMessage
    // );

    // const deliveryInfo = await retry(
    //   buscarInformacoesEntregaFN,
    //   { cookie },
    //   10000,
    //   "Buscar informações de entrega",
    //   setExecutionMessage,
    //   setErrorMessage
    // );

    // setExecutionParams({
    //   ...executionParams,
    //   deliveryInformations: deliveryInfo,
    // });

    // const deliveryType = await retry(
    //   buscarTipoEntregaFN,
    //   { cookie, cep: deliveryInfo.address },
    //   10000,
    //   "Buscar tipo de entrega",
    //   setExecutionMessage,
    //   setErrorMessage
    // );

    // await retry(
    //   selecionarEntregaFN,
    //   { cookie, deliveryType },
    //   10000,
    //   "Selecionar entrega",
    //   setExecutionMessage,
    //   setErrorMessage
    // );

    // const cardInformations = await retry(
    //   buscarCartoesFN,
    //   { cookie },
    //   10000,
    //   "Buscar informações do cartão",
    //   setExecutionMessage,
    //   setErrorMessage
    // );

    // setExecutionParams({ ...executionParams, cardInformations });

    // await retry(
    //   limparCarrinhoFN,
    //   { cookie, productId: presetProdutoID },
    //   10000,
    //   "Limpar carrinho",
    //   setExecutionMessage,
    //   setErrorMessage
    // );

    await schedule(execDate, setWaitExecutionMessage);

    const { produtoId, fatorDuploId } = await retry(
      buscarInformacoesProdutoFN,
      { cookie, url: execUrl, tamanho: execNumber, getTwoFactorId: true },
      10000,
      "Buscar informações do produto",
      setExecutionMessage,
      setErrorMessage
    );

    console.log(produtoId, fatorDuploId);

    setExecutionParams({ ...executionParams, productId: produtoId });

    const adicionarCarrinhoResponse = await retry(
      adicionarCarrinhoFN,
      {
        cookie,
        url: execUrl,
        productId: produtoId,
      },
      10000,
      "Adicionar produto no carrinho",
      setExecutionMessage,
      setErrorMessage
    );

    console.log(adicionarCarrinhoResponse);

    if (
      !adicionarCarrinhoResponse?.success ||
      adicionarCarrinhoResponse?.twoFactorAuth
    ) {
      setRenderTwoFactorConfirm(true);
    } else {
      await retry(
        comprarProdutoFN,
        {
          cookie,
          cardInformations: executionParams.cardInformations,
          deliveryInformations: executionParams.deliveryInformations,
        },
        10000,
        "Finalizar compra",
        setExecutionMessage,
        setErrorMessage
      );
      setExecutionMessage("Compra realizada com sucesso!");
    }
  };

  useEffect(() => {
    execute();
  }, []);

  const renderPresetMessage = () => {
    return presetMessage ? <>Preset em {presetMessage}</> : <></>;
  };

  const renderWaitExecutionMessage = () => {
    return waitExecutionMessage ? (
      <>Execução em {waitExecutionMessage}</>
    ) : (
      <></>
    );
  };

  const renderErrorMessage = () => {
    return errorMessage ? (
      <div>
        <p style={{ color: "#000000" }}>Falha em {errorMessage}</p>
      </div>
    ) : (
      <></>
    );
  };

  const renderExecutionMessage = () => {
    return executionMessage ? <>{executionMessage}</> : <></>;
  };

  return (
    <>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>Executando</div>
      {renderPresetMessage()}
      {renderErrorMessage()}
      {renderExecutionMessage()}
      {renderWaitExecutionMessage()}
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        {renderTwoFactorConfirm && (
          <div>
            <CssTextField
              id="outlined-basic"
              label="Token de Confirmação"
              variant="outlined"
              value={twoFactorToken}
              onChange={(ev) => setTwoFactorToken(ev.target.value)}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                marginTop: "20px",
                marginBottom: "20px",
                justifyContent: "center",
              }}
            >
              {twoFactorToken && twoFactorToken.length === 6 && (
                <button onClick={twoFactorConfirm}>Confimar Token</button>
              )}
              <button>Reenviar Token</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
