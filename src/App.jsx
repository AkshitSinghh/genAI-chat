import { useState } from "react";

import Message from "./components/messageModule";
import Input from "./components/inputBox";

import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async () => {
    const prompt = {
      role: "user",
      content: input,
    };

    setMessages([prompt, ...messages]);
    setInput("");
  };

  return (
    <>
      <h3 className="Title">Socratic Teacher</h3>
      <div className="App">
        <div className="Column">
          <div className="Content messageContent">
            {messages.map((el, i) => {
              return <Message key={i} role={el.role} content={el.content} />;
            })}
          </div>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onClick={input ? handleSubmit : undefined}
          />
        </div>

        <div className="Column">
          <h3 className="Title">Related Topics</h3>
          <div className="Content">
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
