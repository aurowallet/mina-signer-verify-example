const Client = require("mina-signer");

var client;

function getSignClient() {
  client = new Client({ network: "mainnet" });
  return client;
}

function verifyMessage(publicKey, signature, verifyMessage) {
  let verifyResult;
  try {
    const nextSignature =
      typeof signature === "string" ? JSON.parse(signature) : signature;
    let signClient = getSignClient();
    const verifyBody = {
      data: verifyMessage,
      publicKey: publicKey,
      signature: nextSignature,
    };
    verifyResult = signClient.verifyMessage(verifyBody);
  } catch (error) {
    verifyResult = { message: String(error) };
  }
  return verifyResult;
}

function signTransaction(privateKey, params) {
  let signResult;
  try {
    let signClient = getSignClient();
    let signBody = params.message;
    signResult = signClient.signTransaction(signBody, privateKey);
  } catch (err) {
    signResult = { message: String(err) };
  }
  return signResult;
}

module.exports = { signTransaction, verifyMessage };
