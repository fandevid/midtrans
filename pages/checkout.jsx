import axios from "axios";
import midtransClient from "midtrans-client";

const checkout = () => {
  //   Create Snap API instance
  // let snap = new midtransClient.Snap({
  //   isProduction: false,
  //   clientKey: "SB-Mid-client-NkjrkemgHGwWQ-M1",
  //   serverKey: "SB-Mid-server-mXb_D8mFlPQNihU74XM4oRjf",
  // });

  let parameter = {
    transaction_details: {
      order_id: "YOUR-ORDERID-123456",
      gross_amount: 10000,
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

  // snap.createTransaction(parameter).then((transaction) => {
  //   // transaction token
  //   let transactionToken = transaction.token;
  //   console.log("transactionToken:", transactionToken);
  // });

  function buatPesanan(e) {
    var data = JSON.stringify({
      transaction_details: {
        order_id: "ORDER-101-1676979994",
        gross_amount: 10000,
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
    });

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://app.sandbox.midtrans.com/snap/v1/transactions",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Basic U0ItTWlkLXNlcnZlci1tWGJfRDhtRmxQUU5paFU3NFhNNG9SamY6",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
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
