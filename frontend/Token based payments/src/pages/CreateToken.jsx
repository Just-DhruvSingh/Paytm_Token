import { useState } from "react";
import { useNavigate } from "react-router-dom";
const BASE_URL = "http://localhost:8000/api/token";

export default function CreateToken() {
    const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");
  const [validity, setValidity] = useState("1d");
  const [tokenData, setTokenData] = useState(null);
  const [loading, setLoading] = useState(false); // ✅ FIX

 const handleCreate = async () => {
  try {
    setLoading(true);

    const res = await fetch(`${BASE_URL}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: Number(amount),
        pin,
        validity,
      }),
    });

    const data = await res.json();

    if (data.success) {
      navigate("/success", {
        state: { token: data.token },
      });
    } else {
      navigate("/failure", {
        state: { message: data.message },
      });

    }

  } catch (err) {
    navigate("/failure", {
      state: { message: "Server error" },
    });
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="flex justify-center bg-gray-300 min-h-screen py-6">

      {/* 📱 PHONE FRAME */}
      <div className="w-[390px] bg-[#f5f7fb] rounded-[35px] shadow-xl overflow-hidden">

        {/* 🔵 HEADER */}
        <div className="bg-[#00baf2] text-white p-4">
          <h1 className="text-lg font-semibold">Create Token</h1>
          <p className="text-xs opacity-80">
            Secure prepaid payments
          </p>
        </div>

        {/* 🧾 CONTENT */}
        <div className="p-4">

          {/* FORM CARD */}
          <div className="bg-white rounded-xl shadow p-4">

            {/* 💰 Amount */}
            <p className="text-sm text-gray-500 mb-1">Amount</p>
            <input
              type="number"
              placeholder="₹ Enter amount"
              className="w-full p-3 border rounded-lg mb-4 outline-none"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            {/* 🔐 PIN */}
            <p className="text-sm text-gray-500 mb-1">Set PIN</p>
            <input
              type="password"
              placeholder="Enter 4-digit PIN"
              className="w-full p-3 border rounded-lg mb-4 outline-none"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />

            {/* ⏳ VALIDITY */}
            <p className="text-sm text-gray-500 mb-2">
              Select Validity
            </p>

            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "1 Day", value: "1d" },
                { label: "7 Days", value: "7d" },
                { label: "30 Days", value: "30d" },
                { label: "365 Days", value: "365d" },
              ].map((v) => (
                <button
                  key={v.value}
                  onClick={() => setValidity(v.value)}
                  className={`p-3 rounded-lg text-sm border transition ${
                    validity === v.value
                      ? "bg-[#00baf2] text-white"
                      : "bg-white"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* 🔘 BUTTON */}
          <button
            onClick={handleCreate}
            disabled={loading}
            className="w-full bg-[#002970] text-white py-3 rounded-full mt-5 shadow"
          >
            {loading ? "Processing..." : "Generate Token"}
          </button>

          {/* 🎉 RESULT */}
          
          

        </div>
      </div>
    </div>
  );
}
