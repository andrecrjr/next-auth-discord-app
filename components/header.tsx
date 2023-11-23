import React from "react";
import { Button } from "./ui/button";
import { getCurrentUser } from "@/lib/auth/session";
import { Avatar, AvatarImage } from "./ui/avatar";

export interface IDiscordUser{
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

const HeaderUser = ({name, email, image}:IDiscordUser) =>{
  
  return <section className="flex space-between"><p>{name}</p>{image && <Avatar><AvatarImage  src={image}/></Avatar>}</section>
}

export default async function Header() {

 const data = await getCurrentUser()

  return    (<header className="flex items-center justify-between px-8 py-4 border-b border-red-500">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Discord Concerts
        </h1>
       { !!data?.session ? <HeaderUser {...data.session}/> :<Button variant="destructive" color="red" size="lg">
          Login
        </Button>}
      </header>);
}
