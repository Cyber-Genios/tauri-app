export const getFatorDuploID = async ({ data, tamanho }) => {
  const productDetails = JSON.parse(data.DetalheProduto).variacoesProduto;
  const inputRegex = `<input type="radio" class="tamanho__item_pdp js-tamanho__item_pdp" data-tamanho="${tamanho}"(.*?)(.*?)>`;
  const linkProdutoRegex = `value="(.*?)"`;
  const [inputRegexResult] = productDetails.match(inputRegex);
  const [codigoProdutoRegexResult, value] =
    inputRegexResult.match(linkProdutoRegex);
  const productId = value.split("-").pop();
  return productId;
};
