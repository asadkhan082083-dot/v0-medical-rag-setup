'use client';

import { useChat } from 'ai/react';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Loader2, RefreshCw, Stethoscope } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  createdAt: Date;
}

export function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: '1',
        role: 'assistant',
        content: 'Hello! I&apos;m your Medical AI Assistant, powered by advanced medical knowledge. I can help you understand common health conditions, symptoms, and general medical information. You can ask me about conditions like fever, diabetes, asthma, depression, and more.\n\n⚠️ Important: This is for informational purposes only. Always consult with a healthcare professional for medical advice, diagnosis, or treatment.\n\nHow can I assist you today?',
        createdAt: new Date(),
      },
    ],
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleSubmit(e);
  };

  const handleClear = () => {
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: 'Hello! I&apos;m your Medical AI Assistant, powered by advanced medical knowledge. I can help you understand common health conditions, symptoms, and general medical information. You can ask me about conditions like fever, diabetes, asthma, depression, and more.\n\n⚠️ Important: This is for informational purposes only. Always consult with a healthcare professional for medical advice, diagnosis, or treatment.\n\nHow can I assist you today?',
        createdAt: new Date(),
      },
    ]);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border px-6 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Stethoscope className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Medical AI Assistant</h1>
            <p className="text-muted-foreground text-sm mt-0.5">Powered by GPT-4 with RAG capabilities</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-2xl ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Stethoscope className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <Card
                    className={`px-5 py-3 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-2xl rounded-tr-sm'
                        : 'bg-secondary text-secondary-foreground rounded-2xl rounded-tl-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap font-normal">{message.content}</p>
                  </Card>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-3 max-w-2xl">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Stethoscope className="w-4 h-4 text-primary" />
                  </div>
                  <Card className="bg-secondary text-secondary-foreground px-5 py-3 rounded-2xl rounded-tl-sm">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-secondary-foreground" />
                      <span className="text-sm">Analyzing medical information...</span>
                    </div>
                  </Card>
                </div>
              </div>
            )}
          </div>
          <div ref={scrollRef} />
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="bg-card border-t border-border px-6 py-6 shadow-lg">
        <div className="max-w-5xl mx-auto">
          <form onSubmit={onSubmit} className="flex gap-3">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask about symptoms, conditions, medications..."
              disabled={isLoading}
              className="flex-1 bg-input border-border rounded-full px-5"
            />
            <Button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 rounded-full"
              size="icon"
              title="Send message"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </Button>
            <Button
              type="button"
              onClick={handleClear}
              variant="outline"
              className="rounded-full"
              size="icon"
              title="Clear conversation"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Disclaimer: This is an AI assistant for informational purposes. Not a substitute for professional medical advice. Always consult a healthcare provider.
          </p>
        </div>
      </div>
    </div>
  );
}
