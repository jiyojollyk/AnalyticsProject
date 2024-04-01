import { Client, Databases, Query } from "appwrite";

export const client = new Client()
.setEndpoint("https://cloud.appwrite.io/v1")
.setProject("660267fc1a382de83e84");

export const databases = new Databases(client);