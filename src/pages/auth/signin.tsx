import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { NextPageContext } from "next";
import { Provider } from "next-auth/providers";
import { getCsrfToken, getProviders, getSession, signIn } from "next-auth/react";

export default function SignIn({ providers, csrfToken }:
  { providers: Provider; csrfToken: string }) {

  if (!providers) return <Loading />

  return (
    <>
      <Header />
      <form method="post" action="/api/auth/signin/email">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Email address
          <input type="email" id="email" name="email" />
        </label>
        <button type="submit">Sign in with Email</button>
      </form>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
      <Footer />
    </>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const csrfToken = await getCsrfToken(context);
  const providers = await getProviders();
  const { req, res } = context;

  const session = await getSession({ req });

  if (session) {
    return { redirect: { destination: '/profile' } }
  }

  return { props: { providers, csrfToken } };
}