import { OpenAI } from "langchain/llms/openai";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {
  HumanMessage,
  ChatMessage,
  SystemMessage,
  BaseMessage,
} from "langchain/schema";

export const getServerSideProps: GetServerSideProps<{
  llmResult: string;
  chatModelResult: string;
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
  ]);

  return { props: { llmResult, chatModelResult: chatModelResponse.content } };
};

export default function Home({
  llmResult,
  chatModelResult,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 robo-font`}
    >
      <h1>LLM module</h1>
      <p>{llmResult}</p>
      <h1>Chat Model module</h1>
      <p>{chatModelResult}</p>
    </main>
  );
}
