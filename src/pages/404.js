import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter} from 'next/router'

const NotFound = () => {
  // !VA Get the methods of the useRouter hook
  const router = useRouter();

  useEffect(() => {
    
    setTimeout(() => {
      // !VA use the push method of the useRouter hook to go back the home page after three seconds.
      router.push('/')

    }, 3000);
    // !VA Ninja doesn't add this dependency but ESLint calls it out and it appears to work with it...????
  }, [router]);


  return (
    <div className='not-found'>
      <h1>The page you&lsquo;re looking for doesn&lsquo;t appear to exist.</h1>
      <h2>You&lsquo;re being redirected automatically back to the home page...</h2>
      <p className="notfound_text">Go back to the <Link href='/'>Homepage</Link></p>
    </div>
  )
}

export default NotFound 