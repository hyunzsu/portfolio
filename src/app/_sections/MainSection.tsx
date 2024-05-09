import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function MainSection() {
  return (
    <section className='bg-layout h-full'>
      <Navbar />
      <div className='p-4'>
        <div className='text-68 font-bold'>
          <span>FRONTED</span>
          <br />
          <span>DEVELOPER</span>
        </div>
        <Image
          src='/hyunzsu-photo.svg'
          alt='내 사진'
          width={550}
          height={280}
        />
      </div>
    </section>
  );
}
