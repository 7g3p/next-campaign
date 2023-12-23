'use client';
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

console.log(router);
  return (
    <main>
      <h1>Main Page of the App</h1>
      <div>
        <ul>
          <li onClick={() => router.push("/home")}>Home</li>
          <li onClick={() => router.push("/login")}>Login</li>
          <li onClick={() => router.push("/signup")}>Sign-up</li>
        </ul>
      </div>
    </main>
  )
}
