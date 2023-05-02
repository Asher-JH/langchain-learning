import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

/**
 * Gives a chain the ability to remember information from previous interactions
 * This is useful for chatbots and converstaion bots.
 *
 * `ConversationChain` is a simple type of memory that remembers all prev conversations
 * and adds them as context that is passed to the LLM.
 */

const run = async () => {
  const model = new OpenAI();
  const memory = new BufferMemory();
  const chain = new ConversationChain({ llm: model, memory });
  const firstResponse = await chain.call({ input: "Hello, I'm Asher." });
  console.log("Output: ", firstResponse);
  const secondResponse = await chain.call({ input: "What's my name?" });
  console.log("Output: ", secondResponse);
};

run();
