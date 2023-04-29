import "dotenv/config";
import { OpenAI } from "langchain/llms/openai";

const run = async () => {
  // temp controls how random/creative the res is. It ranges from 0 <-> 1
  const model = new OpenAI({ temperature: 0.1 });

  const res = await model.call("What is the national dish of Malaysia?");
  console.log({ res });
};

run();
