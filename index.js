const { signTransaction, verifyMessage } = require("./utils");

function enrty() {
  const keys_demo = {
    publicKey: "B62qj6z7oseWTr37SQTn53mF8ebHn45cmSfRC58Sy52wG6KcaPZNWjw",
    privateKey: "EKEbCJg2MihaoHNUZSyxqtCf8aC4kNA4R9NCjrMXzyweB1AKXMji",
  };
  const signMessage_demo = `Click "Sign" to sign in. No password needed!

  This request will not trigger a blockchain transaction or cost any gas fees.
  
  I accept the Auro Test zkApp Terms of Service: https://test-zkapp.aurowallet.com
  
  address: ${keys_demo.publicKey}
  iat: ${new Date().getTime()}`;

  const signParasm = {
    message: signMessage_demo,
  };

  const signRes = signTransaction(keys_demo.privateKey, signParasm);
  //  The server can use the signature information returned in the signature result
  const verifyRes = verifyMessage(
    keys_demo.publicKey,
    signRes.signature,
    signRes.data
  );
  console.log(verifyRes);
}
enrty();
