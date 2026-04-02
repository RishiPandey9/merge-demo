import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  site: process.env.NEXTAUTH_URL || 'http://localhost:3000',
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const demoEmail = process.env.DEMO_ADMIN_EMAIL;
        const demoPassword = process.env.DEMO_ADMIN_PASSWORD;

        if (!demoEmail || !demoPassword) {
          return Promise.resolve(null);
        }

        if (credentials?.email === demoEmail && credentials?.password === demoPassword) {
          return Promise.resolve({ id: 1, name: 'Admin', email: demoEmail });
        }

        return Promise.resolve(null);
      },
    }),
  ],
});
export { handler as GET, handler as POST };
