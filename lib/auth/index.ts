import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

import { db } from "../db";

export const authOptions:NextAuthOptions = {
    adapter: PrismaAdapter(db as any),
    providers: [DiscordProvider({
        clientId: process.env.DISCORD_CLIENT_KEY as string,
        clientSecret:process.env.DISCORD_PRIVATE_KEY as string,
    })]
}