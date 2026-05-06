import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { searchRelevantDocs } from '@/lib/rag';
import { SYSTEM_PROMPT } from '@/lib/medical-data';

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    // Get the user's last question
    const lastMessage = messages[messages.length - 1];
    const userQuery = lastMessage.content;

    // Retrieve relevant medical documents
    const context = searchRelevantDocs(userQuery, 3);

    // Format the system prompt with context
    const systemPrompt = SYSTEM_PROMPT.replace('{context}', context).replace('{question}', userQuery);

    // Stream the response using AI SDK
    const result = streamText({
      model: openai('gpt-4o-mini'),
      system: systemPrompt,
      messages: messages.map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      })),
    });

    // Return the streamed response
    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
