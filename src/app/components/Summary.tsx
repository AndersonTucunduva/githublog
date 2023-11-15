import Link from 'next/link'

interface summaryProps {
  title: string
  body: string
  createdAt: string
  number: number
}

export default function Summary({
  title,
  body,
  number,
  createdAt,
}: summaryProps) {
  return (
    <div>
      <Link href={`/post/${number}`}>
        <div className="flex max-h-64 max-w-full flex-col rounded bg-basepost p-8">
          <div className="mb-5 flex flex-col justify-between bg-basepost lg:flex-row">
            <h1 className="bg-basepost text-xl text-basetitle">{title}</h1>
            <h2 className="whitespace-nowrap bg-basepost text-sm text-basespan lg:ml-2">
              {createdAt}
            </h2>
          </div>
          <span className="overflow-hidden bg-basepost text-base text-basetext">
            {body}
          </span>
        </div>
      </Link>
    </div>
  )
}
