import { useState } from "react";

export default function Dalle() {
  const [url, setUrl] = useState("");
  const [prompt, setPrompt] = useState("");

  const apiSubmit = async () => {
    console.log("apiSubmit");
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-6xl font-medium text-gray-900">Dall-E Generator</h2>
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
          <img src={url} alt="" className="mt-4" />
        </div>
      </div>
    </div>
  );
}
