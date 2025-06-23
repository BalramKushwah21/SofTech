import Link from 'next/link';
import Image from 'next/image';
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="header" /> {/* Top border strip */}
      <nav>
        {/* Logo */}
        <div className='logo'>
          <Link href="/">
          <Image src="/Coching Logo.jpg" 
          alt='Career Caoching'
          width="80"
          height="80"
          />
          </Link>
        </div>

        
          <Link href="/" className=' heading'>CAREER COACHING</Link>

        
        <div className='menu'>

          <Link href="/">Home</Link>
          <Link href="/MenuPage/about">About</Link>
          <Link href="/MenuPage/contact">Contact</Link>
          <Link href="/MenuPage/SignIn">Sign In</Link>
          <Link href="/MenuPage/SignUp">Sign Up</Link>
          </div>

        {/* Navigation Links */}
        <div className="class-menu">
          <Link href="/ClassPage/class8th">Class 8th</Link>
          <Link href="/ClassPage/class9th">Class 9th</Link>
          <Link href="/ClassPage/class10th">Class 10th</Link>
          <Link href="/ClassPage/class11th">Class 11th</Link>
          <Link href="/ClassPage/class12th">Class 12th</Link>
          </div>
      </nav>
          
      
    </header>
  );
}
