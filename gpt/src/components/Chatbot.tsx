import { useState } from "react";

import Loader from "./Loader";

export default function Chat() {
  const [result, setResult] = useState("");
  const [prompt, setPrompt] = useState("");
  const [load, setLoad] = useState(false);

  const apiSubmit = async () => {
    setLoad(true);
    setResult("");

    // ⚠️ It's not safe to expose the API key in the frontend. This is just for demo purposes.
    const openaiApiKey = import.meta.env.PUBLIC_OPENAI_API_KEY;

    // https://platform.openai.com/docs/api-reference/chat/create
    const openaiChatUrl = "https://api.openai.com/v1/chat/completions";

    const body = {
      model: "gpt-3.5-turbo-16k",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 1024,
      temperature: 0.7,
    };

    const response = await fetch(openaiChatUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiApiKey}`,
      },
      body: JSON.stringify(body),
    });

    const { choices } = await response.json();
    const choicesFirstResponse = choices[0].message.content;

    if (choicesFirstResponse !== "") {
      setResult(choicesFirstResponse);
      setLoad(false);
      setPrompt("");
    }
  };

  return (
    <div className="max-w mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-6xl font-medium text-gray-900">ChatBot GPT</h2>
      </div>
      <div className="border-t border-gray-200">
        <div className="px-4 py-5 sm:p-6">
          <div className="mb-4">
            <textarea
              className="border-2 border-pink-500 rounded-md w-full py-2 px-3"
              rows={4}
              placeholder="Write the prompt here..."
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          <div>
            <button
              className="px-4 py-2 text-white bg-pink-500 rounded-md hover:bg-pink-600 focus:outline-none"
              onClick={apiSubmit}>
              Send
            </button>
          </div>
          {load && <Loader />}
          <p>{result}</p>
        </div>
      </div>
    </div>
  );
}
