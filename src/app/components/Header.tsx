import Image from 'next/image'

export default function Header() {
  return (
    <>
      <div>
        <Image src={'/Cover.png'} width={1280} height={296} alt="" priority />
      </div>
    </>
  )
}
