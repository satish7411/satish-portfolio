import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCommentDots, FaPaperPlane, FaTimes } from "react-icons/fa";

const BOT_NAME = "Satish C";

const welcomeMessage =
  "Hi there! 👋 I'm Satish C, a Java Full Stack Developer. \nAsk me anything about my skills, projects, or experience!";

const quickReplies = ["🛠️ Skills", "💼 Projects", "🎓 Education", "📞 Contact", "💡 Experience"];

const normalize = (text) => text.toLowerCase().trim();

const getBotReply = (input) => {
  const value = normalize(input);

  if (value === "🛠️ skills" || value.includes("skills")) {
    return (
      "I'm skilled in:\n" +
      "- Languages: Java, Python, JavaScript, SQL\n" +
      "- Frontend: React.js, HTML, CSS, Tailwind CSS\n" +
      "- Backend: Spring Boot, RESTful APIs\n" +
      "- Database: MySQL, PostgreSQL\n" +
      "- Tools: Docker, Git, VS Code, IntelliJ IDEA"
    );
  }

  if (value === "💼 projects" || value.includes("projects")) {
    return (
      "Here are my main projects:\n" +
      "- 📚 College Library Management System (Java, Spring Boot, MySQL)\n" +
      "- 🎭 Deep Fake Detection (Python, TensorFlow, OpenCV)\n" +
      "- 🌾 Farm2Market (React, Node.js, MongoDB)\n" +
      "- 🏠 Home Automation System (Java, MQTT, IoT)\n" +
      "Check the Projects section to see them all!"
    );
  }

  if (value === "🎓 education" || value.includes("education")) {
    return (
      "My education:\n" +
      "- 🎓 B.E in Computer Science — City Engineering College, Bengaluru (2021–2025) | CGPA: 7.89\n" +
      "- 📗 PUC Science — SetruGuru Shantappa College (2019–2021) | 68.5%\n" +
      "- 📘 SSLC — Sasya Shyamala High School (2018–2019) | 73.05%"
    );
  }

  if (value === "💡 experience" || value.includes("experience")) {
    return (
      "My work experience:\n" +
      "- 🤖 AI-ML Engineer Intern — Rooman Technologies (Sep 2024 – Feb 2025)\n" +
      "- 🔤 NLP Intern — IBM (Sep 2022 – Oct 2022)\n" +
      "- 📊 Data Analyst Intern — Ipec Solutions (Apr 2025 – Jun 2025)"
    );
  }

  if (value === "📞 contact" || value.includes("contact")) {
    return (
      "You can reach me here:\n" +
      "- 📧 Email: satishsatish8078@gmail.com\n" +
      "- 💼 LinkedIn: linkedin.com/in/satish711\n" +
      "- 🐙 GitHub: github.com/satish7411\n" +
      "I'd love to connect with you!"
    );
  }

  return (
    "Thanks for your message! 😊 \nFor more details, feel free to email me at \n" +
    "satishsatish8078@gmail.com or connect on LinkedIn!"
  );
};

const TypingIndicator = () => (
  <div className="mb-3 max-w-[85%] rounded-2xl bg-blue-500 px-4 py-3">
    <div className="flex items-center gap-2">
      {[0, 1, 2].map((i) => (
        <motion.span
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className="h-2 w-2 rounded-full bg-white"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
        />
      ))}
    </div>
  </div>
);

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState([]);

  const bottomRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  const initialMessages = useMemo(
    () => [
      { id: "welcome", from: "bot", text: welcomeMessage },
      { id: "quickReplies", from: "quick", text: "" },
    ],
    []
  );

  useEffect(() => {
    if (isOpen && !hasOpenedOnce) {
      setHasOpenedOnce(true);
      setMessages(initialMessages);
    }
  }, [hasOpenedOnce, initialMessages, isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, []);

  const sendUserMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { id: `${Date.now()}-user`, from: "user", text: trimmed }]);
    setInput("");

    setIsTyping(true);
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      const reply = getBotReply(trimmed);
      setMessages((prev) => [...prev, { id: `${Date.now()}-bot`, from: "bot", text: reply }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickReply = (label) => {
    sendUserMessage(label);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen ? (
          <motion.section
            key="chatbot-panel"
            className="fixed bottom-24 right-6 z-50 flex h-[480px] w-72 flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900 md:w-80"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <header className="rounded-t-2xl bg-blue-500 p-4 text-white">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-white font-bold text-blue-500">
                    S
                  </div>
                  <div>
                    <p className="font-bold leading-tight">{BOT_NAME}</p>
                    <div className="mt-0.5 flex items-center gap-2 text-xs">
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                      <span>Online</span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="text-white"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                >
                  <FaTimes />
                </button>
              </div>
            </header>

            <div className="flex-1 overflow-y-auto bg-gray-50 p-4 dark:bg-slate-950">
              {messages.map((m) => {
                if (m.from === "quick") {
                  return (
                    <div key={m.id} className="mb-4 flex flex-wrap gap-2">
                      {quickReplies.map((label) => (
                        <button
                          key={label}
                          type="button"
                          onClick={() => handleQuickReply(label)}
                          className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs text-blue-600 transition hover:bg-blue-50 dark:border-slate-800 dark:bg-slate-900 dark:text-blue-300 dark:hover:bg-slate-800"
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  );
                }

                const isUser = m.from === "user";
                return (
                  <div
                    key={m.id}
                    className={[
                      "mb-3 max-w-[85%] whitespace-pre-line px-4 py-2 text-sm",
                      isUser
                        ? "ml-auto rounded-2xl rounded-tr-none border border-gray-200 bg-white text-gray-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                        : "rounded-2xl rounded-tl-none bg-blue-500 text-white",
                    ].join(" ")}
                  >
                    {m.text}
                  </div>
                );
              })}

              {isTyping ? (
                <>
                  <TypingIndicator />
                  <p className="mb-2 text-xs text-gray-500 dark:text-slate-400">Satish is typing...</p>
                </>
              ) : null}

              <div ref={bottomRef} />
            </div>

            <form
              className="flex items-center gap-2 border-t border-gray-100 bg-white p-3 dark:border-slate-800 dark:bg-slate-900"
              onSubmit={(e) => {
                e.preventDefault();
                sendUserMessage(input);
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendUserMessage(input);
                }}
                placeholder="Type a message..."
                className="flex-1 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 focus:outline-none focus:border-blue-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />
              <button
                type="submit"
                className="grid h-9 w-9 place-items-center rounded-full bg-blue-500 text-white transition hover:bg-blue-600"
                aria-label="Send message"
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </motion.section>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-blue-500 text-white shadow-lg transition hover:bg-blue-600"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaCommentDots className="text-xl" />}
      </button>
    </>
  );
};

export default FloatingChatButton;
