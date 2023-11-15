'use client'

import { useContext } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Slogan from './components/Slogan'
import Summary from './components/Summary'
import { ApiContext } from './context/context'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export default function Home() {
  const { posts } = useContext(ApiContext)

  return (
    <div>
      <div className="z-10 m-auto max-w-full lg:max-w-6xl">
        <Header />
      </div>
      <div className="z-20 m-auto max-w-md rounded-xl bg-baseprofile  lg:max-w-4xl">
        <Slogan />
      </div>
      <div className="m-auto max-w-sm lg:max-w-4xl">
        <Search total={posts.length} />
      </div>
      <div className="m-auto mt-12 grid max-w-sm grid-cols-2 gap-8 lg:max-w-4xl">
        {posts &&
          posts.map((post) => {
            const createdAt = formatDistanceToNow(new Date(post.created_at), {
              addSuffix: true,
              locale: ptBR,
            })
            return (
              <Summary
                key={post.number}
                title={post.title}
                body={post.body}
                number={post.number}
                createdAt={createdAt}
              />
            )
          })}
      </div>
    </div>
  )
}
