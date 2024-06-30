import { createThirdwebClient, defineChain, getContract } from "thirdweb";
import GameTokenDispensor from "../GameTokenDispensor.json";

const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;

if (!clientId) {
  throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
  clientId,
});

const chain = defineChain(84532);

export const gameTokenContract = getContract({
  client,
  address: GameTokenDispensor.address,
  chain,
});

export const usdcContract = getContract({
  client,
  address: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
  chain,
});
