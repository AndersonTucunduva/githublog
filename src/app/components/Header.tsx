import Image from 'next/image'

export default function Header() {
  return (
    <>
      <div>
        <Image
          src={'/Cover.png'}
          width={1920}
          height={296}
          alt=""
          priority
          className="lg:scale-100"
        />
      </div>
    </>
  )
}
