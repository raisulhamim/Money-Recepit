import React from 'react'
import { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    name: "",
    date: "",
    paymentMethod: "", // ✅ NEW
    reason: "",
    amount: "",
    signature: null,
    paid: false,
  });

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    setData({
      ...data,
      [name]:
        type === "file"
          ? URL.createObjectURL(files[0])
          : type === "checkbox"
          ? checked
          : value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <div className="flex gap-6">

        {/* ================= RECEIPT ================= */}
        <div className="flex w-[850px] bg-white shadow-lg border relative">

          {/* Left color strip */}
          <div className="w-4 bg-gradient-to-b from-orange-400 to-blue-700"></div>

          {/* Receipt body */}
          <div className="flex-1 p-6 text-[14px] relative">

            {/* PAID SEAL */}
            {data.paid && (
              <div className="absolute top-28 right-20 rotate-[-20deg] z-10">
                <div className="border-4 border-red-600 text-red-600 font-extrabold text-4xl px-6 py-2 rounded-full opacity-80">
                  PAID
                </div>
              </div>
            )}

            {/* Header */}
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold text-blue-800 text-lg">
                  SKILLROOM BANGLADESH IT
                </h2>
                <p className="text-xs text-gray-600">
                  Mirpur-2, Dhaka | skillroombangladesh@gmail.com
                </p>
              </div>

              <div className="text-right text-xs">
                <p>SL No: <b>110</b></p>
                <p>Date: <b>{data.date}</b></p>
              </div>
            </div>

            {/* Title */}
            <div className="text-center my-4">
              <span className="bg-blue-700 text-white px-6 py-1 font-semibold">
                MONEY RECEIPT
              </span>
            </div>

            {/* Content */}
            <div className="space-y-4">

              <div className="flex gap-2">
                <span className="w-40">Received From</span>
                <span className="flex-1 border-b border-dotted">
                  {data.name}
                </span>
              </div>

              {/* ✅ Payment Method with dotted line */}
              <div className="flex gap-2">
                <span className="w-40">Payment Method</span>
                <span className="flex-1 border-b border-dotted">
                  {data.paymentMethod}
                </span>
              </div>

              <div className="flex gap-2">
                <span className="w-40">Purpose</span>
                <span className="flex-1 border-b border-dotted">
                  {data.reason}
                </span>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <span className="w-40">Amount</span>
                <span className="border px-4 py-1 font-semibold">
                  ৳ {data.amount}
                </span>
              </div>
            </div>

            {/* Signature */}
            <div className="absolute bottom-6 right-6 text-center">
              {data.signature && (
                <img
                  src={data.signature}
                  alt="signature"
                  className="h-10 mx-auto"
                />
              )}
              <div className="border-t w-44 mt-1"></div>
              <p className="text-xs mt-1">Authorized Signature</p>
            </div>
          </div>
        </div>

        {/* ================= INPUT PANEL ================= */}
        <div className="bg-white p-4 w-[280px] rounded shadow">
          <h3 className="font-semibold mb-3">Fill Receipt</h3>

          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="input"
          />

          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="input"
          />

          {/* ✅ Payment Method Input */}
          <input
            name="paymentMethod"
            placeholder="Payment Method (Cash / Bkash / Bank)"
            onChange={handleChange}
            className="input"
          />

          <input
            name="reason"
            placeholder="Purpose"
            onChange={handleChange}
            className="input"
          />

          <input
            name="amount"
            placeholder="Amount"
            onChange={handleChange}
            className="input"
          />

          <input
            type="file"
            name="signature"
            accept="image/*"
            onChange={handleChange}
            className="mt-2 text-sm"
          />

          <label className="flex items-center gap-2 mt-3 text-sm font-medium">
            <input
              type="checkbox"
              name="paid"
              onChange={handleChange}
              className="accent-red-600"
            />
            Mark as Paid
          </label>
        </div>

      </div>
    </div>
  );
};

export default App;
