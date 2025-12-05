const BASE_URL = "http://localhost:8000"; // FastAPI backend URL

export async function apiRequest(endpoint, method = "GET", body = null, token = null) {
  const headers = {
    "Content-Type": "application/json",
  };

  // If FastAPI uses JWT authentication
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const url = `${BASE_URL}${endpoint}`;
    console.log(`Making API request to: ${url}`, method, body);
    const response = await fetch(url, options);

    // If FastAPI returns an error
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.detail || "Something went wrong");
    }

    // If FastAPI returns no content (204)
    if (response.status === 204) {
      return {};
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error.message, error);
    throw error;
  }
}
