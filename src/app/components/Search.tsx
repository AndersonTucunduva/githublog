'use client'

import { useContext } from 'react'
import { ApiContext } from '../context/context'

interface searchProps {
  total: number
}

export default function Search({ total }: searchProps) {
  const { getPosts } = useContext(ApiContext)

  return (
    <div>
      <div className="mt-20 flex items-center justify-between">
        <div className="text-white">Publicações</div>

        <div className="text-white">{total} publicações</div>
      </div>
      <div className="mt-4 flex-1">
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onBlur={(e) => getPosts(e.target.value)}
          className="h-12 w-full rounded-md border-baseborder bg-baseinput text-basetext placeholder:text-baselabel"
        />
      </div>
    </div>
  )
}
