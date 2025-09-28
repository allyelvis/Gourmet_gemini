import { GoogleGenAI, Type } from "@google/genai";
import { CartItem } from '../types';
import { MENU_ITEMS } from '../constants';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface Suggestion {
  itemName: string;
  reason: string;
}

export const getChefSuggestion = async (cartItems: CartItem[]): Promise<Suggestion | null> => {
  if (cartItems.length === 0) {
    return null;
  }

  const cartItemNames = cartItems.map(item => item.name);
  const availableItems = MENU_ITEMS
    .filter(item => !cartItemNames.includes(item.name))
    .map(item => item.name)
    .join(', ');

  const itemNamesInCart = cartItems.map(item => `${item.quantity}x ${item.name}`).join(', ');
  
  const prompt = `
    You are a world-class chef named "Chef Gemini". A customer has the following items in their online order cart: ${itemNamesInCart}.
    Based on these items, suggest one complementary dish or drink from the following list of available items to complete their meal: ${availableItems}.
    Provide your response as a JSON object with two keys: "itemName" (the exact name of the suggested item from the list) and "reason" (a short, friendly, and enticing explanation for why it's a good pairing).
    Address the customer directly in your reasoning.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            itemName: {
              type: Type.STRING,
              description: "The exact name of the suggested menu item.",
            },
            reason: {
              type: Type.STRING,
              description: "The explanation for why the item is a good suggestion.",
            },
          },
          required: ["itemName", "reason"],
        },
      },
    });
    
    const jsonText = response.text.trim();
    const suggestion: Suggestion = JSON.parse(jsonText);
    return suggestion;

  } catch (error) {
    console.error("Error fetching suggestion from Gemini API:", error);
    return null;
  }
};
