import { useState } from 'react'
import './app.scss'
function App() {
  const [messages, setMessages] = useState([ {
    role: "model",
    content: "Hello, how can I help you?"
  }, {
    role: "user",
    content: "Hello, how are you?"
  }, {
    role: "model",
    content: "I am fine, thank you!"
  }, {
    role: "user",
    content: "What is your name?"
  }, {
    role: "model",
    content: "I am a chatbot."
  }, {
    role: "user",
    content: "What can you do?"
  }, {
    role: "model",
    content: "I can chat with you."
  }
  ])
  return (
    <main>
      <section>
        <div className='conversation-area'>

          <div className='messages'>
            {
              messages.map(message => {
                return (
                  <div className='message'>
                    {message.content}
                  </div>
                )
              })
            }
          </div>

          <div className='input-area'>
            <input type="text" placeholder='Message LLm' />
            <button>Send</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
