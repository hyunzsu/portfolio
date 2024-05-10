import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="h-screen bg-black text-white">
      <div className="p-8">
        <p className="flex">
          <span className="sm:text-124 text-30 font-bold">GET T</span>
          <Image src="/about-photo.svg" alt="내 사진" width={100} height={97} />
        </p>
        <span className="sm:text-124 ml-72 text-30 font-bold tracking-tight">
          KNOW ME
        </span>
      </div>
    </section>
  );
}
