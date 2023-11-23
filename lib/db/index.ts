import { PrismaClient } from "@prisma/client";

declare global {
    var cachedPrisma: PrismaClient
}

let prisma: PrismaClient;

// prisma para hot reload em dev

if(process.env.NODE_ENV === 'production'){
    prisma = new PrismaClient()
}else{
    if(!global.cachedPrisma){
        global.cachedPrisma = new PrismaClient()
    }
    prisma = global.cachedPrisma;
}

export const db = prisma