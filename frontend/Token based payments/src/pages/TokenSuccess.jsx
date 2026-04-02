import { useLocation, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";

function TokenSuccess() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const qrRef = useRef();

  if (!state) return <p>No token data</p>;

  // 📥 Download QR
  const downloadQR = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const url = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = url;
    link.download = "token-qr.png";
    link.click();
  };

  return (
    <div className="flex justify-center bg-gray-300 min-h-screen py-6">

      {/* 📱 PHONE FRAME */}
      <div className="w-[390px] bg-[#f5f7fb] rounded-[35px] shadow-xl overflow-hidden">

        {/* 🔵 HEADER */}
        <div className="bg-[#00baf2] text-white p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Payment Token</h1>
          <button onClick={() => navigate("/")} className="text-sm">
            Home
          </button>
        </div>

        {/* 🧾 CONTENT */}
        <div className="p-4">

          {/* ✅ SUCCESS TEXT */}
          <div className="text-center mb-4">
            <h1 className="text-lg font-bold text-green-600">
              ✅ Token Created
            </h1>
            <p className="text-xs text-gray-500">
              Use this QR to pay securely
            </p>
          </div>

          {/* 🔳 QR CARD */}
          <div className="bg-white rounded-2xl shadow p-5 text-center">

            <div ref={qrRef} className="flex justify-center">
              <QRCodeCanvas
                value={JSON.stringify({
                  tokenId: state.token.tokenId,
                  amount: state.token.remainingAmount,
                })}
                size={180}
              />
            </div>

            <p className="text-sm text-gray-500 mt-3">
              Scan to Pay
            </p>

            {/* 💰 AMOUNT */}
            <p className="mt-2 text-2xl font-bold text-[#002970]">
              ₹{state.token.remainingAmount}
            </p>

            {/* 🆔 TOKEN */}
            <p className="text-xs text-gray-400 mt-2">
              Token ID
            </p>
            <p className="font-semibold text-sm break-all">
              {state.token.tokenId}
            </p>

            {/* ⏳ EXPIRY */}
            <p className="text-xs text-gray-400 mt-2">
              Expires
            </p>
            <p className="text-xs text-gray-600">
              {new Date(state.token.expiresAt).toLocaleString()}
            </p>

          </div>

          {/* 📥 DOWNLOAD BUTTON */}
          <button
            onClick={downloadQR}
            className="w-full bg-[#002970] text-white py-3 rounded-full mt-5 shadow"
          >
            Download QR
          </button>

          {/* 🔘 BACK */}
          <button
            onClick={() => navigate("/")}
            className="w-full border border-gray-300 py-3 rounded-full mt-3"
          >
            Back to Home
          </button>

        </div>
      </div>
    </div>
  );
}

export default TokenSuccess;