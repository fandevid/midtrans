import axios from "axios";
import midtransClient from "midtrans-client";

export async function getServerSideProps() {
  let snap = new midtransClient.Snap({
    isProduction: false,
    clientKey: "SB-Mid-client-NkjrkemgHGwWQ-M1",
    serverKey: "SB-Mid-server-mXb_D8mFlPQNihU74XM4oRjf",
  });

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

  const trancsaction = await snap.createTransaction(parameter).catch((err) => {
    return null;
  });
  if (trancsaction)
    return {
      redirect: {
        destination: trancsaction.redirect_url,
      },
    };

  return {
    props: {},
  };
}

const checkout = () => {
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
