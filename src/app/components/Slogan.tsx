'use client'

import { ArrowUpRightSquare, Building, GithubIcon, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface userInfoProps {
  avatar_url: string
  bio: string
  company: string
  login: string
  html_url: string
  name: string
  followers: number
}

export default function Slogan() {
  const [user, setUser] = useState({} as userInfoProps)

  async function getInfo() {
    const response = await api.get('/users/AndersonTucunduva')

    setUser(response.data)
  }

  useEffect(() => {
    getInfo()
  }, [])

  return (
    <div className="flex h-[212] max-w-4xl items-center justify-center bg-baseprofile p-10">
      <Image src={user.avatar_url} width={148} height={148} alt="" />
      <div className="bg-baseprofile">
        <div className="ml-8 flex flex-col justify-between bg-baseprofile lg:flex-row">
          <div className="bg-baseprofile text-2xl text-basetitle">
            {user.name}
          </div>
          <div className="flex flex-row gap-2 bg-basepost text-blue">
            <Link href={'/'} className="flex gap-2 bg-basepost">
              GITHUB
            </Link>
            <ArrowUpRightSquare />
          </div>
        </div>
        <div className="ml-8 mt-2 flex max-w-2xl bg-baseprofile text-base text-basetext">
          {user.bio}
        </div>
        <div className="ml-8 mt-6 flex flex-col justify-start bg-baseprofile lg:flex-row">
          <div className="flex gap-2 bg-baseprofile">
            <div className="bg-baseprofile">
              <GithubIcon className=" rounded-full bg-basespan text-baselabel" />
            </div>
            <h2 className="bg-baseprofile text-base text-basesubtitle">
              {user.login}
            </h2>
          </div>
          <div className="flex gap-2 bg-baseprofile lg:ml-6">
            <Building className="rounded-full bg-baseprofile text-baselabel " />
            <h2 className="bg-baseprofile text-base text-basesubtitle">
              {user.company}
            </h2>
          </div>
          <div className="flex gap-2 bg-baseprofile  text-base text-basesubtitle lg:ml-6">
            <Users className="bg-baseprofile text-baselabel" />
            <h2 className="bg-baseprofile text-base text-basesubtitle">
              {user.followers} seguidores
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
