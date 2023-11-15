'use client'

import Header from '@/app/components/Header'
import SloganPost from '../components/SloganPost'
import PostComp from '../components/PostComp'
import { useParams } from 'next/navigation'
import { api } from '@/app/lib/axios'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useEffect, useState } from 'react'

interface PostProps {
  html_url: string
  title: string
  comments: number
  createdAt: string
  body: string
  login: string
}

export default function Post() {
  const [post, setPost] = useState({} as PostProps)
  const paramns = useParams()

  async function getPost() {
    const response = await api.get(
      `/repos/AndersonTucunduva/githublog/issues/${paramns.id}`,
    )
    console.log(response)
    const {
      html_url,
      title,
      comments,
      created_at,
      body,
      user: { login },
    } = response.data

    const createdAt = formatDistanceToNow(new Date(created_at), {
      addSuffix: true,
      locale: ptBR,
    })

    setPost({
      html_url,
      title,
      comments,
      createdAt,
      body,
      login,
    })
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div>
      <div className="z-10 m-auto max-w-full lg:max-w-6xl">
        <Header />
      </div>
      <div className="z-20 m-auto max-w-4xl rounded-xl">
        <SloganPost
          login={post.login}
          createdAt={post.createdAt}
          comments={post.comments}
          title={post.title}
          htmlUrl={post.html_url}
        />
      </div>
      <div className="m-auto max-w-md rounded-xl bg-basepost lg:max-w-4xl">
        <PostComp summary={post.body} />
      </div>
    </div>
  )
}
