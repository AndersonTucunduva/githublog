export default function Search() {
  return (
    <>
      <div className="mt-20 flex items-center justify-between">
        <div className="text-white">Publicações</div>
        <div className="text-white">6 publicações</div>
      </div>
      <div className="mt-4 flex-1">
        <input
          type="text"
          placeholder="Buscar conteúdo"
          className="h-12 w-full rounded-md border-baseborder bg-baseinput placeholder:text-baselabel"
        />
      </div>
    </>
  )
}
