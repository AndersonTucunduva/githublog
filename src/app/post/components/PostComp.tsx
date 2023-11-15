import Markdown from 'react-markdown'

interface summaryProps {
  summary: string
}

export default function Post({ summary }: summaryProps) {
  return (
    <div className="flex flex-col p-8">
      <div className="mb-6 text-basetext">
        <Markdown>{summary}</Markdown>
      </div>
    </div>
  )
}
