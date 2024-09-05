import {PrismaClient} from '@prisma/client';

const prismaClientSingleton = () => {
    return new PrismaClient();
}

type PrismaClientSinglton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
    primsa: PrismaClientSinglton | undefined;
}

const prisma = globalForPrisma.primsa ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.primsa = prisma;
