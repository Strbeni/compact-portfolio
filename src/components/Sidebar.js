import React, { useEffect, useState } from 'react';
import { collection, addDoc, Timestamp, getDocs } from "firebase/firestore";
import { db } from "../fireBaseConfig";
import { motion } from 'motion/react';

async function writeMessage(name, message) {
  try {
    await addDoc(collection(db, "shoutbox"), {
      name,
      message,
      time: Timestamp.now()
    });
    console.log("Message added successfully");
  } catch (e) {
    console.error("Error adding message: ", e);
  }
}

function Sidebar() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (name.trim() && message.trim()) {
      await writeMessage(name, message);
      setMessage(""); // Clear message box after sending
      fetchMessages(); // Refresh messages
    }
  };

  const fetchMessages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "shoutbox"));
      const fetchedMessages = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      // Optional: Sort by timestamp (latest first)
      fetchedMessages.sort((a, b) => b.time?.seconds - a.time?.seconds);
      setMessages(fetchedMessages);
    } catch (error) {
      console.error("Error getting messages: ", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <>
      <motion.div drag dragConstraints={{top:0,bottom:0,left:0,right:0}} className="bg-zinc-900 lg:col-span-1 font-light lg:row-span-5 p-6 rounded-lg border border-zinc-700 hover:border-red-600">
        <p className='text-lg font-bold font-serif'>About me</p>
        <p className='text-sm mb-6 leading-5'>Hi, I'm Strbeni, a Nodejs/Backend developer from Mohali.</p>
        <p className='text-sm'>My primary tools of choice includes:</p>
        <ul className='list-disc list-inside text-sm leading-6 mt-3'>
          <li>Javascript</li>
          <li>Python</li>
          <li>React</li>
          <li>Tailwind/Css</li>
        </ul>
        <p className='text-sm mt-2 leading-5'>Beyond coding, I'm passionate about design, illustration, animation and 3D modelling and traveling. An unusual hobby of mine is collecting vintage passports, they're interesting pieces of history to me.</p>
      </motion.div>

     <motion.div
  drag
  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
  className="lg:col-start-4 overflow-hidden row-span-3 relative h-full font-mono text-xs rounded-lg px-2 pt-6 pb-4 lg:row-span-3 bg-zinc-950 border border-zinc-800 shadow-inner"
>
  {/* Header */}
  <p className="absolute left-0 top-0 w-full text-center text-white text-[13px] font-semibold bg-zinc-900 border-b border-zinc-700 py-1 rounded-t-md">
    Shoutbox
  </p>

  {/* Input Section */}
  <div className="flex items-center gap-1 mt-4">
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="name"
      className="shoutbox-name w-full bg-zinc-800 border border-zinc-700 rounded-md px-2 py-[2px] outline-none text-white placeholder-gray-400"
    />
    <input
      type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Say something..."
      className="shoutbox-message w-full bg-zinc-800 border border-zinc-700 rounded-md px-2 py-[2px] outline-none text-white placeholder-gray-400"
    />
    <button
      onClick={handleSend}
      className="bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-white px-3 py-[2px] rounded-md"
    >
      Shout
    </button>
  </div>

  {/* Divider */}
  <div className="flex items-center gap-2 text-gray-400 text-[10px] mt-3 px-1">
    <span className="text-xs">1</span>
    <span className="flex items-center gap-1 ml-auto">
      <span>🙂</span>
      <span className="text-yellow-300">{messages.length}</span>
    </span>
  </div>

  {/* Messages */}
  <div className="mt-2 bg-zinc-900 border border-zinc-800 rounded-md p-2 text-white text-[11px] space-y-2 overflow-y-auto max-h-40 custom-scroll">
    {messages.map((msg) => (
      <div key={msg.id} className="bg-zinc-800 p-2 rounded-md">
        <p className="font-semibold text-yellow-300">{msg.name}</p>
        <p className="mt-1">{msg.message}</p>
        <div className="text-right text-gray-400 text-[10px] mt-1">
          {msg.time?.toDate().toLocaleTimeString()}
        </div>
      </div>
    ))}
  </div>
</motion.div>


    </>
  );
}

export default Sidebar;
