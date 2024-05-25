// "use client";
// import { useSession, signIn, signOut } from "next-auth/react";

// export default function Component() {
//   const { data: session } = useSession();
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   );
// }

// src/app/page.js
"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [time, setTime] = useState(null);

  useEffect(() => {
    if (session) {
      // Fetch the current time from the API when the user is signed in
      fetch("/api/time")
        .then((response) => response.json())
        .then((data) => setTime(data.now))
        .catch((error) => console.error("Error fetching time:", error));
    }
  }, [session]);

  if (session) {
    return (
      <div>
        <p>Signed in as {session.user.email}</p>
        {time && <p>Current Time: {time}</p>}
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <p>Not signed in</p>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}
