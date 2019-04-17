const request = require('request');
const TronWeb = require('tronweb');

const fullNode = 'https://api.shasta.trongrid.io';
const solidityNode = 'https://api.shasta.trongrid.io';
const eventServer = 'https://api.shasta.trongrid.io/';
const privateKey = '8D6E9754A5307A9C548BC82F06C8719621141628D9DCE1FBD4BAC800FB21FE06';
const wallet = 'TRrQc2Tdtt7y3zAS9wKmqiZciEkhCowFrA';

const tronWeb = new TronWeb(
    fullNode,
    solidityNode,
    eventServer,
    privateKey
);

const controller ={

    makeNewAddress: async ()=> {

        let temp = await TronWeb.createAccount();


        var newPrivateKey = temp.privateKey;
        var newPublicKey = temp.publicKey;
        var newBase58Address = temp.address.base58;
        var newHexAddress = temp.address.hex;

        console.log(temp);

        console.log(newPrivateKey);
        console.log(newPublicKey);
        console.log(newBase58Address);
        console.log(newHexAddress);

    },

    getTrxBalance: async (address)=> {
            
        try{
            const balance = await tronWeb.trx.getBalance(address);
            console.log({ balance });
            }
        catch(error){
            console.log(error);
        }
    },

    getWallet: ()=> {
        console.log(wallet);
    },

    transfer: async(privateKey, to, amount)=> {

        const send = await tronWeb.trx.sendTransaction(to, amount, privateKey);
        console.log(send);
    }


};

controller.makeNewAddress();
//controller.getTrxBalance(wallet);
//controller.getWallet();
//controller.transfer(privateKey,'TPWVCJfHe3rKkaMXjw96jyTSbuFsrR9dC4','100');



