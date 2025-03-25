import { InferenceClient } from "@huggingface/inference";

const client= new InferenceClient(import.meta.env.VITE_HF_API_KEY);

export async function getAIResponse(userMessage){
 try {
  const response = await client.chatCompletion({
    model: "HuggingFaceH4/zephyr-7b-beta",
    messages: [
      {
        role: "user", prompt: "Respond in Markdown format, including bullet points, headings, and bold/italic text where appropriate.",
        content: userMessage,
      },
    ],
    provider: "hf-inference",
    max_tokens: 500,
  });

  return response.choices[0]?.message?.content || "No Response from AI";
 }
 catch (error){
  console.error("API Error:", error);
  return "Sorry, something went wrong.";
 }
}