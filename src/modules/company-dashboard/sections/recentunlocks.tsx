"use client"

type UnlockStatus = "Hired" | "Shortlisted" | "Contacted"

interface UnlockRecord {
  id: string
  name: string
  role: string
  status: UnlockStatus
  date: string
  price: number
}

const STATUS_STYLES: Record<UnlockStatus, string> = {
  Hired: "border-[#22C55E] text-[#22C55E]",
  Shortlisted: "border-[#F59E0B] text-[#F59E0B]",
  Contacted: "border-[#1E1B4B] text-[#1E1B4B]",
}

const MOCK_DATA: UnlockRecord[] = [
  { id: "1", name: "Aditi Rao", role: "Engineering", status: "Hired", date: "Oct 24, 2023", price: 149 },
  { id: "2", name: "Rahul Sharma", role: "Product", status: "Shortlisted", date: "Oct 24, 2023", price: 149 },
  { id: "3", name: "Sania Mirza", role: "Design", status: "Contacted", date: "Oct 24, 2023", price: 149 },
 { id: "4", name: "Aditi Rao", role: "Engineering", status: "Hired", date: "Oct 24, 2023", price: 149 },
 { id: "5", name: "Aditi Rao", role: "Engineering", status: "Hired", date: "Oct 24, 2023", price: 149 },
 
]

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold">
      {initials}
    </div>
  )
}

export default function RecentUnlocks({ data = MOCK_DATA }) {
  return (
    <div className="w-full h-auto lg:h-[354px] rounded-2xl bg-white border border-[#CBCBCB] overflow-hidden">

      {/* Header */}
      <div className="px-4 sm:px-6 py-3 border-b border-[#CBCBCB]">
        <p className="text-sm sm:text-base font-medium text-black">
          Recent Unlocks
        </p>
      </div>

      {/* TABLE WRAPPER (SCROLLABLE BOTH WAYS) */}
      <div className="max-h-[300px] overflow-auto scrollbar-modern">

        <div className="min-w-[700px]">
          <table className="w-full">
            
            {/* Header */}
            <thead className="bg-[#F5F5F5] sticky top-0 z-10">
              <tr>
                {["Talent", "Role", "Status", "Date", "Price"].map((col) => (
                  <th
                    key={col}
                    className="text-left px-4 sm:px-6 py-3 text-xs text-black/50 font-medium"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="border-t border-[#E5E5E5]">

                  {/* Talent */}
                  <td className="px-4 sm:px-6 py-3">
                    <div className="flex items-center gap-3">
                      <Avatar name={row.name} />
                      <span className="text-sm">{row.name}</span>
                    </div>
                  </td>

                  {/* Role */}
                  <td className="px-4 sm:px-6 py-3">
                    <span className="px-3 py-1 rounded-full bg-[#E5E5E5] text-xs">
                      {row.role}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-4 sm:px-6 py-3">
                    <span
                      className={`px-3 py-1 rounded-full border text-xs ${STATUS_STYLES[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="px-4 sm:px-6 py-3 text-sm text-black/50">
                    {row.date}
                  </td>

                  {/* Price */}
                  <td className="px-4 sm:px-6 py-3 text-sm font-semibold text-[#ED1D25]">
                    ${row.price}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  )
}