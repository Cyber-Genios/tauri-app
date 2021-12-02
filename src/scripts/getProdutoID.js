export const getFatorDuploID = async ({ data, tamanho }) => {
  const productDetails = JSON.parse(data.DetalheProduto).variacoesProduto;
  const inputRegex = `<input type="radio" class="tamanho__item_pdp js-tamanho__item_pdp" data-tamanho="${tamanho}"(.*?)(.*?)>`;
  const codigoProdutoRegex = `data-codigoproduto="(.*?)"`;
  const [inputRegexResult] = productDetails.match(inputRegex);
  const [codigoProdutoRegexResult, codigoProduto] =
    inputRegexResult.match(codigoProdutoRegex);
  return codigoProduto;
};
