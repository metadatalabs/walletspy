import fetch from 'node-fetch';

// Setup request options:
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

// Replace with your Alchemy API key:
const apiKey = "demo";
const baseURL = `https://eth-mainnet.alchemyapi.io/nft/v2/${apiKey}/getNFTs/`;
// Replace with the wallet address you want to query:
// const ownerAddr = "0xF5FFF32CF83A1A614e15F25Ce55B0c0A6b5F8F2c";
export async function getNFTByWallet(walletId = ownerAddr)
{
  const fetchURL = `${baseURL}?owner=${walletId}`;

  // Make the request and print the formatted response:
  const result = await fetch(fetchURL, requestOptions)
    .then(response => response.json())
    // .then(response => JSON.stringify(response, null, 2))
    .catch(error => console.log('error', error));
  return result;
}


export async function getTxnsByWallet(walletId = ownerAddr)
{
  const fetchURL = `${baseURL}?owner=${walletId}`;

  // Make the request and print the formatted response:
  const result = await fetch(fetchURL, requestOptions)
    .then(response => response.json())
    // .then(response => JSON.stringify(response, null, 2))
    .catch(error => console.log('error', error));
  return result;
}
