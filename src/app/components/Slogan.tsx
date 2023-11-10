import { ArrowUpRightSquare, Building, GithubIcon, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Slogan() {
  return (
    <>
      <div className="flex h-[212] max-w-4xl items-center justify-center p-10">
        <Image src={'/avatar.png'} width={148} height={148} alt="" />
        <div>
          <div className="ml-8 flex justify-between">
            <div className="text- text-2xl text-basetitle">Cameron</div>
            <div className="flex flex-row gap-2 text-blue">
              <Link href={'/'}>GITHUB</Link>
              <ArrowUpRightSquare />
            </div>
          </div>
          <div className="ml-8 mt-2 flex max-w-2xl text-base text-basetext">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            animi voluptatibus minus et, dolor sunt perferendis. Cupiditate
          </div>
          <div className="ml-8 mt-6 flex flex-col justify-start lg:flex-row">
            <div className="flex gap-2 ">
              <div className="rounded-full bg-baselabel">
                <GithubIcon color="#112131" />
              </div>
              <h2 className="text-base text-basesubtitle">cameronwill</h2>
            </div>
            <div className="ml-6 flex gap-2">
              <Building className="rounded-full text-baselabel" />
              <h2 className="text-base text-basesubtitle">rocketseat</h2>
            </div>
            <div className="ml-6 flex gap-2 text-base text-basesubtitle">
              <Users className="text-baselabel" />
              <h2 className="text-base text-basesubtitle">32 seguidores</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
