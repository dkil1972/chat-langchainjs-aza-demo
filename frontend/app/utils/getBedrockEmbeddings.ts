import "server-only";

import { BedrockEmbeddings } from "@langchain/aws";
import { BedrockRuntimeClient } from "@aws-sdk/client-bedrock-runtime";
// import { fromNodeProviderChain, fromEnv } from "@aws-sdk/credential-providers";

export async function getBedrockEmbeddings() {
  // const credentials = fromNodeProviderChain({
  //   profile: "aza-aws-dev-sso",
  // });

  // const client = new BedrockRuntimeClient({
  //   region: "eu-west-2",
  //   credentials: fromEnv(),
  // });

  // const credentials = await Auth.currentCredentials();
  console.log("access key id", process.env.AWS_ACCESS_KEY_ID);
  console.log("secret access key", process.env.AWS_SECRET_ACCESS_KEY);
  console.log("session token", process.env.AWS_SESSION_TOKEN);

  return new BedrockEmbeddings({
    model: "amazon.titan-embed-text-v2:0",
    region: "eu-west-2",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      sessionToken: process.env.AWS_SESSION_TOKEN!,
    },
  });
}
