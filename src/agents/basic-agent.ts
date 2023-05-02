import "dotenv/config";
import { OpenAI } from "langchain/llms/openai";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";

/**
 * Agents are like bots/personal assistants that can take actions
 * using external tools based on the instructions from the LLM
 */

const run = async () => {
  const model = new OpenAI({ temperature: 0 });
  /**
   * A tool is a function that performs a specific duty
   * SerpAPI for example accesses Google Search results in real-time
   */
  const tools = [new SerpAPI(), new Calculator()];

  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    // A framework to decide what tool to use based on tool's description
    agentType: "zero-shot-react-description",
  });

  const input =
    "What are the top 3 macbooks in terms of value for price, with a comparison between their prices and specifications?";

  console.log("Executing input: " + input);

  const result = await executor.call({ input });

  console.log("Output: ", result.output);
};

run();
