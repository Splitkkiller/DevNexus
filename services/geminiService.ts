
import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY not found in environment variables.");
    // We don't return null here to allow the code to proceed to the catch block 
    // if the key is missing but some shim exists, or just fail gracefully later.
    // However, strictly following the prompt, we must use new GoogleGenAI({ apiKey: process.env.API_KEY });
    // If process.env.API_KEY is undefined, new GoogleGenAI will likely throw or the first call will fail.
  }
  // Safely handle potentially undefined key for TypeScript, though at runtime it might be empty
  return new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
};

export const askGeminiAboutHtml = async (question: string, contextDocName?: string): Promise<string> => {
  const ai = getAiClient();
  
  const model = "gemini-2.5-flash";
  
  let prompt = `You are an expert senior frontend engineer and HTML documentation assistant. 
  Answer the user's question about HTML clearly, concisely, and professionally.
  Use Markdown for formatting. Code blocks should be formatted with the language (e.g., \`\`\`html).
  
  User Question: ${question}`;

  if (contextDocName) {
    prompt = `You are an expert senior frontend engineer assisting a user who is currently looking at documentation for the <${contextDocName}> tag.
    Answer their question specifically in the context of this tag if relevant, or general HTML knowledge if not.
    Keep it concise and helpful.
    
    User Question: ${question}`;
  }

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });
    return response.text || "No response generated.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // Handle the specific "API key not valid" error to be user friendly
    if (error.message && (error.message.includes("API key not valid") || error.message.includes("400"))) {
        return "⚠️ **Configuration Error**: The AI service is unable to connect because the API Key is invalid or missing in the environment settings. Please check your configuration.";
    }

    // Return the specific error message to help debugging other issues
    return `Error: ${error.message || "Failed to fetch response from Gemini."}`;
  }
};
