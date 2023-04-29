import { FewShotPromptTemplate, PromptTemplate } from "langchain/prompts";

/**
 * Few Shot Prompt: Pass a few examples to the LLM to help it generate better responses
 */

const run = async () => {
  const examples = [
    { country: "United States", capital: "Washingtong D.C." },
    { country: "Canada", capital: "Ottawa" },
  ];

  const exampleTemplate = "Country: {country}\nCapital: {capital}\n";
  const examplePrompt = new PromptTemplate({
    inputVariables: ["country", "capital"],
    template: exampleTemplate,
  });

  const fewShotPrompt = new FewShotPromptTemplate({
    examples,
    examplePrompt,
    /** The prefix is some text that goes before the examples in the prompt. Usually, this consists of instructions */
    prefix: "What is the capital city of the country below?",
    /** The suffix is some text that goes after the examples in the prompt. Usually this is where the user input will go */
    suffix: "Country: {country}\nCapital:",
    inputVariables: ["country"],
    /** The example seperator is the string we will use to join the prefix, examples, and suffix together */
    exampleSeparator: "\n\n",
    /** the template format is the formatting method to use for the template. Should usually be f-string */
    templateFormat: "f-string",
  });

  const res = await fewShotPrompt.format({ country: "Malaysia" });
  console.log(res);
};

run();
