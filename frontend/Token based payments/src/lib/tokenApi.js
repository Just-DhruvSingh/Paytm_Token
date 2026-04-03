const API_PORT = import.meta.env.VITE_TOKEN_API_PORT || "8000";

function sanitizeBaseUrl(value) {
  if (!value) {
    return "";
  }

  const trimmedValue = value.trim().replace(/\/+$/, "");

  if (
    trimmedValue.endsWith("/api/token") ||
    trimmedValue === "/api/token"
  ) {
    return trimmedValue;
  }

  if (/^https?:\/\//.test(trimmedValue) || trimmedValue.startsWith("/")) {
    return `${trimmedValue}/api/token`;
  }

  return trimmedValue;
}

function getDefaultBaseUrl() {
  if (typeof window !== "undefined" && window.location.protocol === "https:") {
    return "/api/token";
  }

  return `http://localhost:${API_PORT}/api/token`;
}

const BASE_URL = sanitizeBaseUrl(import.meta.env.VITE_TOKEN_API_BASE_URL) || getDefaultBaseUrl();

async function requestJson(url, options) {
  let response;

  try {
    response = await fetch(url, options);
  } catch (error) {
    throw new Error(
      "Unable to reach the token API. Check the deployed backend URL and CORS settings."
    );
  }

  return parseResponse(response);
}

async function parseResponse(response) {
  const rawBody = await response.text();
  let data = {};

  if (rawBody) {
    try {
      data = JSON.parse(rawBody);
    } catch {
      data = {
        message: rawBody
      };
    }
  }

  if (!response.ok) {
    throw new Error(data.message || data.error || "Something went wrong");
  }

  return data;
}

export async function fetchTokens() {
  return requestJson(BASE_URL);
}

export async function createToken(payload) {
  return requestJson(`${BASE_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
}

export async function fetchToken(tokenId) {
  return requestJson(`${BASE_URL}/${tokenId}`);
}

export async function redeemToken(payload) {
  return requestJson(`${BASE_URL}/redeem`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
}
