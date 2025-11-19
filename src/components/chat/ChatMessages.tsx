import type {LLMMessage} from "@/types/LLMMessage.ts";
import Message from "@/components/ui/message.tsx";

interface chatMessagesProps {
    messages: LLMMessage[];
}

function chatMessages(props: chatMessagesProps) {
    const {messages} = props;

    return (
        <div className="h-full overflow-y-scroll p-4">
            {messages.map((msg, index) => (
                <Message
                    key={index}
                    role={msg.sender === "User" ? "user" : "assistant"}
                    content={msg.text}
                />
            ))}
        </div>
    );
};

export default chatMessages;