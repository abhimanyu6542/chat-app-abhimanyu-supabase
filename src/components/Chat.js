import { useState, useEffect } from "react";
import { supabase } from "../supabaseApi";

const Chat = () => {
  const [msg, setmsg] = useState("");
  const [username, setUsername] = useState(" ");

    const refreshPage = () => {
      window.location.reload(false);
    };

  const [fullMessage, setFullMessage] = useState([]);

  const AllMeesage = async () => {
    let { data } = await supabase.from("chat table").select("*");

    console.log(data);
    setFullMessage(data);
  };

  useEffect(() => {
    AllMeesage();
  }, []);

  const sendMessage = async (event) => {
    event.preventDefault();
    if (msg === "") {
      alert("Please Add Some Todo");
      return;
    }
    await supabase
      .from("chat table")
      .insert({ message: msg, username: username })
      .single()
      .then(({ data, error }) => {
        console.log(data, error);
        refreshPage();
        
      });
   
  };
  return (
    <>
      <div className="todotitle">
        <h1>Chat app</h1>
      </div>
      <form className="message_form">
        <input
          className="input_form"
          placeholder="UserName"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          className="input_form"
          placeholder="Add your message"
          type="text"
          value={msg}
          onChange={(e) => setmsg(e.target.value)}
        />
        <button type="submit" onClick={sendMessage} className="add_button">
          Send
        </button>
      </form>

      <h1>all message</h1> <br />
      <div className="List-view">
          {fullMessage &&
            fullMessage.map((uname) => (
                <>
              <div key={uname.id} {...uname} >{uname.username}</div> 
              <div key={uname.id} {...uname} >{uname.message}</div> 
              </>
            ))}
        </div>
    </>
  );
};
export default Chat;
