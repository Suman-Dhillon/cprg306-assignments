"use client";

import { useUserAuth } from "./_utils/auth-context";
 
export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try{
      await gitHubSignIn();
    } catch (error) {
      console.log('Error signing in with GitHub: ', error);
    }
  };

  const handleSignOut = async () => {
    try{
      await firebaseSignOut();
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  }

 
  return (
    <div>
      {user ? (
        <div>
          <h1 class="text-4xl font-bold mb-5">Shopping List App</h1>
          <div class="text-lg">
            <p>Signed in as ({user.email})</p>
            <p><button onClick={handleSignOut} class="text-lg hover:underline">Sign out</button></p>
            <a class="text-lg hover:underline" href="/week8/shopping-list">Continue to your Shopping List</a>
          </div>
        </div>
      ) : (
        <div>
          <h1 class="text-4xl font-bold mb-5">Shopping List App</h1>
          <button onClick={handleSignIn} class="text-lg">Sign in with GitHub</button>
        </div>
      )}
    </div>
  );
}
 
