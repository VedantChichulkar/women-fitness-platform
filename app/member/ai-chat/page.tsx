import { ChatInterface } from "@/components/ai/ChatInterface";
import { PanelHeader } from "@/components/layout/PanelHeader";

export default function MemberAiChatPage() {
  return (
    <>
      <PanelHeader eyebrow="Member panel" title="AI Wellness Chat" />
      <ChatInterface />
    </>
  );
}
