"use client";
import { IconMessageCircle } from "@tabler/icons-react";

export default function ChatbotButton() {
    return (
        <button className="fixed bottom-4 right-4">
            <IconMessageCircle size={24} />
        </button>
    );
}
