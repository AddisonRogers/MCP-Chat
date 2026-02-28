import Message from '@/components/ui/message.tsx';
import type { LLMMessage } from '@/types/LLMMessage.ts';

interface chatMessagesProps {
  messages: LLMMessage[];
}

function chatMessages(props: chatMessagesProps) {
  const { messages } = props;

  return (
    <div className='h-full overflow-y-scroll p-4'>
      {messages.map((msg, index) => (
        <Message
          key={index}
          role={msg.sender === 'User' ? 'user' : 'assistant'}
          content={msg.text}
        />
      ))}
    </div>
  );
}

export default chatMessages;
