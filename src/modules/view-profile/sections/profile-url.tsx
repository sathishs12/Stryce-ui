import { Copy, Link } from "lucide-react"

interface ProfileUrlProps {
  username?: string
}

export default function ProfileUrl({ username = "johndoe" }: ProfileUrlProps) {
  const url = `Stryce.com/@${username}`

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://${url}`)
  }

  return (
    <div className="w-full rounded-[18px] border border-gray-100 shadow-sm bg-white p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="bg-red-50 p-1.5 rounded-lg">
          <Link className="w-4 h-4 text-red-500" />
        </div>
        <h2 className="font-bold text-[14px] text-gray-900">Profile URL</h2>
      </div>

      <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2.5 bg-gray-50">
        <span className="text-[13px] text-gray-500 flex-1 truncate">{url}</span>
        <button onClick={handleCopy} className="p-1 rounded-full hover:bg-gray-200 transition-colors" title="Copy URL">
          <Copy className="w-3.5 h-3.5 text-gray-400" />
        </button>
      </div>

      <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">
        Public Profile URL is always viewable. Only contact details are behind the paywall.
      </p>
    </div>
  )
}