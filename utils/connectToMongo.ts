import clientPromise from "../lib/mongodb";

export const connectToMongo = async () => {
    const client = await clientPromise;
    return client.db("streamo");
};