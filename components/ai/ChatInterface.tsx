"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const starterMessages = [
  { from: "ai", text: "Hi! Tell me your goal for today: energy, flexibility, weight loss, or recovery." },
  { from: "user", text: "I want a gentle routine after work." },
  { from: "ai", text: "Try 8 minutes mobility, 12 minutes slow flow, and 5 minutes breathing. Keep dinner light and protein-rich." }
];

export function ChatInterface() {
  const [messages, setMessages] = useState(starterMessages);
  const [text, setText] = useState("");

  function sendMessage() {
    if (!text.trim()) return;
    setMessages([...messages, { from: "user", text }, { from: "ai", text: "Lovely. I will adapt your next class and nutrition cue around that." }]);
    setText("");
  }

  return (
    <div className="panel-surface flex min-h-[68vh] flex-col p-4">
      <div className="flex-1 space-y-4 overflow-y-auto p-2">
        {messages.map((message, index) => (
          <div className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`} key={`${message.text}-${index}`}>
            <div className={`max-w-[82%] rounded-3xl px-5 py-3 text-sm font-semibold leading-6 ${message.from === "user" ? "bg-ink text-white" : "bg-lavender-50 text-ink"}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        <input className="h-12 min-w-0 flex-1 rounded-2xl border border-lavender-100 px-4 outline-none focus:ring-4 focus:ring-rosefit-100" value={text} onChange={(event) => setText(event.target.value)} placeholder="Ask about workouts, food, or recovery..." />
        <Button type="button" onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
}
