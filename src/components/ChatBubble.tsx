export function ChatBubble({ text }: { text: string }) {
  return (
    <p className="bg-main rounded-2xl rounded-bl-none px-4 py-2 text-start whitespace-pre-line text-white">
      {text}
    </p>
  );
}
