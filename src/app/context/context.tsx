'use client'

import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface Post {
  number: number
  body: string
  comments: number
  created_at: string
  title: string
}

interface contextProps {
  posts: Post[]
  getPosts: (query?: string) => Promise<void>
}

export const ApiContext = createContext({} as contextProps)

interface ApiContextProviderProps {
  children: ReactNode
}

export function ApiContextProvider({ children }: ApiContextProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  const getPosts = useCallback(async (query?: string) => {
    const response = await api.get('/search/issues', {
      params: {
        q: `repo:AndersonTucunduva/githublog is:issue ${query || ''}`,
      },
    })

    setPosts(response.data.items)
  }, [])

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <ApiContext.Provider
      value={{
        posts,
        getPosts,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}
