// NOTE: hardcoded like the rest of the API calls for now (auth.ts, AuthModal.tsx,
// ResetPassword.tsx) — all of these should move to a single env-based base URL
// together in one pass.
const AI_ASSISTANT_ENDPOINT = "http://localhost/devnexus-api/ai_assistant.php";

export const askGeminiAboutHtml = async (question: string, contextDocName?: string): Promise<string> => {
  const token = localStorage.getItem("token");

  if (!token) {
    return "⚠️ **Sign in required**: Please log in to use the AI assistant.";
  }

  try {
    const res = await fetch(AI_ASSISTANT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ question, contextDocName }),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      if (res.status === 401) {
        return "⚠️ **Session expired**: Please log in again to use the AI assistant.";
      }
      return `⚠️ **Error**: ${data.message || "Failed to fetch response from the AI service."}`;
    }

    return data.text || "No response generated.";
  } catch (error: any) {
    console.error("AI assistant request failed:", error);
    return "⚠️ **Connection Error**: Unable to reach the AI service. Please check your connection and try again.";
  }
};
