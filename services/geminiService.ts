import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the Gemini API client
// Ideally, the API key is provided via process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAIResponse = async (
  prompt: string,
  history: { role: string; text: string }[]
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';

    // Construct a context-aware prompt
    const systemInstruction = `
      You are EquiBot, the advanced AI assistant for Equinolabs, a premium digital agency.
      Equinolabs specializes in:
      - Websites & Web Apps
      - Software Development
      - Digital Marketing & SEO
      - Technical Support
      - Lead Generation
      - Social Media Marketing

      Tone: Professional, Innovative, Helpful, Concise.
      Goal: Help the user understand our services, or draft a project inquiry.
      If asked for pricing, say that projects are bespoke and suggest they fill out the contact form for a quote.
      Keep answers under 100 words unless asked for details.
    `;

    // Simple chat simulation using single-turn generation with context injection
    // (For a real chat app, we would use ai.chats.create, but this stateless wrapper is robust for simple widgets)
    const context = history.map(h => `${h.role}: ${h.text}`).join('\n');
    const fullPrompt = `${systemInstruction}\n\nChat History:\n${context}\n\nUser: ${prompt}\nEquiBot:`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: fullPrompt,
    });

    return response.text || "I apologize, I'm calculating the best possible response but encountered a network glitch. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try again in a moment.";
  }
};