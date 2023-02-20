import midtransClient from "midtrans-client";

const checkout = () => {
  let snap = new midtransClient.Snap({
    // Set to true if you want Production Environment (accept real transaction).
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
  });

  function buatPesanan(e) {
    let parameter = {
      transaction_details: {
        order_id: "YOUR-ORDERID-123456",
        gross_amount: 106000,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        first_name: "budi",
        last_name: "pratama",
        email: "budi.pra@example.com",
        phone: "08111222333",
      },
    };
    snap.createTransaction(parameter).then((transaction) => {
      // transaction token
      let transactionToken = transaction.token;
      alert("transactionToken:", transactionToken);
    });
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
