import bot from "../icons/bot.png";
import user from "../icons/user.png";

import "./messageModule.css";

export default function Message({ role, content }) {
  return (
    <div className="messageWrapper">
      {role === "assistant" ? (
        <>
          <div>
            <img src={bot} className="avatar" alt="profile avatar" />
          </div>
          <div>
            <p>{content}</p>
          </div>
        </>
      ) : (
        <>
          <div className="userText">
            <p>{content}</p>
          </div>
          <div>
            <img src={user} className="avatar" alt="profile avatar" />
          </div>
        </>
      )}
    </div>
  );
}
