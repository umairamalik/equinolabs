// Fuzzy, rule-based chatbot (no AI needed)

type ChatHistory = { role: string; text: string }[];

// List of intents with keywords + responses
const intents = [
  {
    id: "greeting",
    keywords: ["hello", "hi", "hey", "good morning", "good evening"],
    response: "Hello! I'm EquiBot from Equinolabs. How can I help you today?",
  },
  {
    id: "services",
    keywords: ["services", "what do you do", "what can you do"],
    response:
      "We offer websites, web apps, software development, SEO, digital marketing, lead generation, and technical support. Want details?",
  },
  {
    id: "website",
    keywords: ["website", "web app", "landing page", "app development"],
    response:
      "We build custom websites and web apps tailored to your needs. Do you have a deadline or project idea?",
  },
  {
    id: "pricing",
    keywords: ["price", "pricing", "cost", "charge", "budget"],
    response:
      "Our pricing depends on your project scope. You can also message us on WhatsApp for a quick quote!",
  },
  {
    id: "contact",
    keywords: ["contact", "email", "phone", "reach"],
    response:
      "You can reach us at hello@equinolabs.in or call +91 88991 57496. For fastest response, WhatsApp us anytime!",
  },
  {
    id: "whatsapp",
    keywords: [
      "whatsapp",
      "chat",
      "message",
      "talk",
      "speak",
      "reach you",
      "fast reply",
      "quick response",
      "urgent",
      "need fast help",
      "contact fast",
    ],
    response:
      "Absolutely! For the fastest response from our team, tap here to chat on WhatsApp: https://wa.me/918899157496",
  },
  {
    id: "marketing",
    keywords: ["seo", "marketing", "social media", "lead generation"],
    response:
      "We offer SEO, social media management, and lead generation campaigns. Want to grow traffic or leads?",
  },
];

// Basic fuzzy scoring between input and keywords
function fuzzyScore(input: string, keyword: string): number {
  input = input.toLowerCase();
  keyword = keyword.toLowerCase();

  if (input.includes(keyword)) return 1.0;
  if (keyword.includes(input)) return 0.8;

  let score = 0;
  const words = keyword.split(" ");

  words.forEach((w) => {
    if (input.includes(w)) score += 1 / words.length;
  });

  return score;
}

// Main response function
export const generateAIResponse = async (
  userInput: string,
  history: ChatHistory
): Promise<string> => {
  const normalized = userInput.toLowerCase().trim();

  let bestIntent: any = null;
  let bestScore = 0;

  // Compare user message to all intents
  for (const intent of intents) {
    for (const keyword of intent.keywords) {
      const score = fuzzyScore(normalized, keyword);

      if (score > bestScore) {
        bestScore = score;
        bestIntent = intent;
      }
    }
  }

  // If something matches with ≥ 0.4 confidence → return that intent
  if (bestIntent && bestScore >= 0.4) {
    return bestIntent.response;
  }

  // Otherwise → fallback responses (rotating)
  const fallback = [
    "Thanks for your message — could you tell me a bit more?",
    "I’m here to help! Can you rephrase that?",
    "Got it! Could you clarify what exactly you want to know?",
    "Interesting — can you give more details?",
    "If you need a fast reply, you can also message us on WhatsApp anytime.",
  ];

  return fallback[Math.floor(Math.random() * fallback.length)];
};
