import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return <SignIn afterSignInUrl={'/new-user'} redirectUrl={'/new-user'} />;
}
