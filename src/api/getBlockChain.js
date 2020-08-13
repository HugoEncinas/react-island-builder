const getBlockChain = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const block_hash = data.hash;

  const blockDataUrl = `https://blockchain.info/rawblock/${block_hash}?cors=true`
  const blockDataResponse = await fetch(blockDataUrl);
  const singleBlock = await blockDataResponse.json();
  return singleBlock.tx;
}

export default getBlockChain;