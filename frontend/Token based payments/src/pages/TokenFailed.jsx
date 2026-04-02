import { useLocation, useNavigate } from "react-router-dom";

export default function TokenFailure() {
  const { state } = useLocation();
  const navigate = useNavigate();

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

          {/* ❌ FAILURE ICON + TEXT */}
          <div className="text-center mb-5">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-red-600 text-2xl">✖</span>
            </div>

            <h1 className="text-lg font-bold text-red-600 mt-3">
              Token Generation Failed
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              {state?.message || "Something went wrong"}
            </p>
          </div>

          {/* 📋 ERROR CARD */}
          <div className="bg-white rounded-2xl shadow p-4 text-center">

            <p className="text-xs text-gray-400">
              Possible Reasons
            </p>

            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li>• Insufficient balance</li>
              <li>• Invalid input</li>
              <li>• Server issue</li>
            </ul>

          </div>

          {/* 🔁 TRY AGAIN */}
          <button
            onClick={() => navigate("/create")}
            className="w-full bg-[#002970] text-white py-3 rounded-full mt-5 shadow"
          >
            Try Again
          </button>

          {/* 🔙 BACK HOME */}
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