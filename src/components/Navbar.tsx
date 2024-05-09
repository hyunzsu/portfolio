import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <header className='flex justify-between p-4'>
        <Link href='/' className='flex items-center text-36 font-semibold '>
          H.
        </Link>
        <nav className='flex items-center gap-2 font-medium'>
          <button>About,</button>
          <button>Projects,</button>
          <button>Contact</button>
        </nav>
      </header>
    </div>
  );
}
