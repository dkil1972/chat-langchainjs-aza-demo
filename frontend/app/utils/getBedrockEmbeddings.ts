import "server-only";

import { BedrockEmbeddings } from "@langchain/aws";
import { BedrockChat } from "@langchain/community/chat_models/bedrock";

function getCredentials() {
  return {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    sessionToken: process.env.AWS_SESSION_TOKEN!,
  };
}

export async function getBedrockChatModel(): Promise<BedrockChat> {
  return new BedrockChat({
    model: "meta.llama3-70b-instruct-v1:0",
    region: "eu-west-2",
    credentials: getCredentials(),
  });
}

export async function getBedrockEmbeddings(): Promise<BedrockEmbeddings> {
  return new BedrockEmbeddings({
    model: "amazon.titan-embed-text-v2:0",
    region: "eu-west-2",
    credentials: getCredentials(),
  });
}
