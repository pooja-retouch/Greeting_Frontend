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

/**
 * Generate a greeting message using AI
 */
export async function generateGreeting(occasion, tone, details, recipientName, regenerate = false) {
  return apiRequest("/ai/generate-gemini", "POST", {
    occasion,
    tone,
    details,
    recipient_name: recipientName,
    regenerate,
  });
}

/**
 * Generate a greeting card image
 */
export async function generateCard(occasion, tone, details, name, template) {
  return apiRequest("/ai/generate-card", "POST", {
    occasion,
    tone,
    details,
    name,
    template,
  });
}

/**
 * Send greeting card via email
 */
export async function sendGreeting(senderName, senderEmail, recipientEmail, recipientName, occasion, tone, details, template, message = null, message_position = null) {
  return apiRequest("/ai/send-greeting", "POST", {
    sender_name: senderName,
    sender_email: senderEmail,
    recipient_email: recipientEmail,
    recipient_name: recipientName,
    occasion,
    tone,
    details,
    template,
    message,
    message_position,
  });
}

/**
 * Submit contact form
 */
export async function submitContactForm(contactData) {
  return apiRequest("/ai/contact", "POST", contactData);
}
