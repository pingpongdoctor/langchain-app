import { OpenAI } from "langchain/llms/openai";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { HumanMessage, ChatMessage, SystemMessage } from "langchain/schema";
import {
  PromptTemplate,
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "langchain/prompts";
import { LLMChain, LLMChainInput } from "langchain/chains";
import {
  BaseLanguageModel,
  BaseLanguageModelCallOptions,
} from "langchain/base_language";

export const getServerSideProps: GetServerSideProps<{
  llmResult: string;
  chatModelResult: string;
  llmChainResult: string;
}> = async () => {
  const chat = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    temperature: 0.9,
  });

  //LLM
  const llmResult = await chat.predict(
    "What would be a good company name for a company that makes colorful socks?"
  );

  //CHAT MODELS
  const chatModelResponse = await chat.predictMessages([
    new HumanMessage("Tell me a funny fact"),
    new HumanMessage("This fact should be a little creepy"),
  ]);

  //PROMPT TEMPLATE FOR LLM
  const llmTemplate = "What is a good {thing} for a boy";
  const llmPrompt = PromptTemplate.fromTemplate(llmTemplate);

  //LLM CHAIN
  const llmChain = new LLMChain({ llm: chat, prompt: llmPrompt });

  const llmChainResponse = await llmChain.call({
    thing: "name",
  });

  //PROMPT TEMPLATE FOR CHAT MODELS
  const template1 = "Tell me the benefits of this kind of sport:{sport1}";
  const template2 = "Try to compare with the benefits of {sport2}";
  const messagePrompt1 = HumanMessagePromptTemplate.fromTemplate(template1);
  const messagePrompt2 = HumanMessagePromptTemplate.fromTemplate(template2);
  const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    messagePrompt1,
    messagePrompt2,
  ]);

  const formattedPrompt = await chatPrompt.format({
    sport1: "soccer",
    sport2: "swimming",
  });

  return {
    props: {
      llmResult,
      chatModelResult: chatModelResponse.content,
      llmChainResult: llmChainResponse.text,
    },
  };
};

export default function Home({
  llmResult,
  chatModelResult,
  llmChainResult,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 robo-font`}
    >
      <h1>LLM module</h1>
      <p>{llmResult}</p>
      <h1>Chat Model module</h1>
      <p>{chatModelResult}</p>
      <h1>LLM chain</h1>
      <p>{llmChainResult}</p>
    </main>
  );
}
