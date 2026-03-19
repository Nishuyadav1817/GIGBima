import React from "react";
import "./App.css";

const BASIC = () => {

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const payNow = async () => {

    const loaded = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!loaded) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    const res = await fetch("http://localhost:16016/buy-plan/123");
    const data = await res.json();

    const options = {
      key: "YOUR_KEY_ID",
      amount: data.order.amount,
      currency: "INR",
      order_id: data.order.id,
      name: "Premium Plan",
      description: "Plan Purchase",
      theme: {
        color: "#5bbcff"
      },
      handler: function (response) {
        alert("Payment Successful!");
        console.log(response);
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="pay-container">
      <h2 className="pay-title">Upgrade Your Plan</h2>

      <button className="pay-btn" onClick={payNow}>
        Buy Plan
      </button>

    </div>
  );
};

export default BASIC;