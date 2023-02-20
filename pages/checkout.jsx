import midtransClient from "midtrans-client";

const checkout = () => {
  //   const midtransClient = require("midtrans-client");
  // Create Snap API instance
  let snap = new midtransClient.Snap({
    isProduction: false,
    clientKey: "Mid-client-te1kB6Thrh7Mmbnu",
    serverKey: "Mid-server-pRP89888xUbmHxTtScJd4AaO",
  });

  let parameter = {
    transaction_details: {
      order_id: "test-transaction-123",
      gross_amount: 200000,
    },
    credit_card: {
      secure: true,
    },
  };

  snap.createTransaction(parameter).then((transaction) => {
    // transaction token
    console.log(transaction);
    let transactionToken = transaction.token;
    console.log("transactionToken:", transactionToken);
  });

  function buatPesanan(e) {
    alert("Buat Pesanan");
  }
  return (
    <div>
      <h1>Checkout Produk</h1>
      <h3>Rp.302.000</h3>
      <button onClick={buatPesanan}>Buat Pesanan</button>
    </div>
  );
};

export default checkout;
