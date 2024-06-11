import Image from "next/image";

export default function MainSection() {
  return (
    <section className="h-screen bg-layout">
      <div className="flex justify-between px-8">
        <div>
          <p className="sm:text-124 text-30 font-medium tracking-tight">
            <span>FRONTED</span>
            <br />
            <span>DEVELOPER</span>
          </p>
          <Image
            className="mt-8"
            src="/hyunzsu-photo.svg"
            alt="내 사진"
            width={550}
            height={280}
          />
        </div>
        <div className="sm:text-96 flex items-end text-30">HYUNZSU</div>
      </div>
    </section>
  );
}
