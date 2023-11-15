import {
  ArrowBigLeftDash,
  ArrowUpRightSquare,
  Calendar,
  GithubIcon,
  MessageCircle,
} from 'lucide-react'
import Link from 'next/link'

interface sloganPostProps {
  login: string
  createdAt: string
  comments: number
  title: string
  htmlUrl: string
}

export default function SloganPost({
  login,
  createdAt,
  comments,
  title,
  htmlUrl,
}: sloganPostProps) {
  return (
    <div className="flex h-[212] max-w-4xl flex-col justify-between rounded-lg bg-baseprofile p-10">
      <div className="flex justify-between bg-baseprofile text-blue">
        <Link href="/" className="flex bg-baseprofile text-xs">
          <ArrowBigLeftDash className="mr-2 h-[16px] w-[16px] bg-baseprofile" />
          VOLTAR
        </Link>
        <Link href={`${htmlUrl}`} className="flex gap-2 bg-baseprofile text-xs">
          VER NO GITHUB
          <ArrowUpRightSquare className="h-[14px] w-[14px] bg-baseprofile" />
        </Link>
      </div>

      <h1 className="mt-5 bg-baseprofile text-2xl text-basetitle">{title}</h1>

      <div className="mt-2 flex gap-8 bg-baseprofile text-base  text-baselabel">
        <span className="flex bg-baseprofile">
          <GithubIcon className=" mr-2 rounded-full bg-basespan text-baselabel" />
          {login}
        </span>
        <span className="flex bg-baseprofile">
          <Calendar className="mr-2 rounded-full bg-baseprofile text-baselabel" />
          {createdAt}
        </span>
        <span className="flex bg-baseprofile">
          <MessageCircle className="mr-2 rounded-full bg-baseprofile text-baselabel" />
          {comments} comentarios
        </span>
      </div>
    </div>
  )
}
