import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  
  return (
    <main>
      <h1>Main Page of the App</h1>
      <div>
      </div>
    </main>
  )
}


/* METADATA TYPES */
// 1. Static Metadata
/*
export const metadata = {
  title: 'Home',
};
// Output: 
<head>
  <title>Head</title>
</head>
*/

// 2. Dynamic Metadata
/*
export async function generateMetadata({params, searchParams}){
  const product = await getProduct(params.id);
  return {title: product.title};
}
// Output:
<head>
  <title>Unique Product Name</title>
</head>
*/