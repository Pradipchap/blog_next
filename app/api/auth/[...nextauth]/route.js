import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const Options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "ismith" },
        password: { label: "Password", type: "password" },
        username: {
          label: "Username",
          type: "text",
          placeholder: "John Smith",
        },
        async authorize(credentials) {
          const user = { id: 1, name: "Brett", email: "brett@gmail.com" };
          return users;
        },
      },
    }
    
    ),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  url: process.env.NEXTAUTH_URL,
};
const handler = NextAuth(Options);

export { handler as GET, handler as POST };
