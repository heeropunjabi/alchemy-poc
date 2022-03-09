const { ethers } = require('ethers');
const axios = require('axios').default;
require('dotenv').config();


const nodeURL = process.env.HTTPS;
const ws = process.env.WS;



async function main() { 
    // const provider =
    // new ethers.providers.JsonRpcProvider(https);
  
    // const response = await provider.getBlockNumber('latest');
    // console.log(response);
    console.log('url', nodeURL);
    const response = await axios({
        url: nodeURL,
        method: 'POST',
        data: { "jsonrpc": "2.0", "method": "eth_gasPrice", "params": [], "id": 500 },
        headers:{'Content-Type': 'application/json'}
    })
    console.log('response', response.data)  

}

 main()

