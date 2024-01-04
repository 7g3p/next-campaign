import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  
  return (
    <main>
      <h1>Main Page of the App</h1>
      <div>
        <ul>
          <Link href="/home">Home</Link><br/>
          <Link href="/login">Login</Link><br/>
          <Link href="/signup">Sign-Up</Link><br/>
        </ul>
      </div>
    </main>
  )
}
