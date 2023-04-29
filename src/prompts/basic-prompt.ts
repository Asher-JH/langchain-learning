import { PromptTemplate } from "langchain/prompts";

/**
 * Basic prompt: User input -> prompt -> LLM -> response
 */

/**
 * In reality you would get a users input via FE or CLI input and add it to your prompt
 * before sending it to the LLM
 */

const run = async () => {
  const template = "What is the capital city of {country}?";
  const prompt = new PromptTemplate({
    inputVariables: ["country"],
    template,
  });

  const res = await prompt.format({ country: "Malaysia" });
  console.log(res);
};

run();
