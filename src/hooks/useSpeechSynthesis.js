import { useCallback } from "react";

export const useSpeechSynthesis = () => {
    const speak = useCallback((text) => {
        if (!text) return;

        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }, []);

    return speak
}
