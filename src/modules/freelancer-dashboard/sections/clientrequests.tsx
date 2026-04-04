"use client";

interface ClientRequest {
  title: string;
  price: number;
}

interface ClientRequestsProps {
  requests?: ClientRequest[];
  growthPercent?: number;
}

const defaultRequests: ClientRequest[] = [
  { title: "UI Design for Landing Page", price: 120 },
  { title: "Dashboard Design",           price: 180 },
  { title: "Logo · Branding",            price: 80  },
];

export default function ClientRequests({
  requests     = defaultRequests,
  growthPercent = 12.5,
}: ClientRequestsProps) {
  return (
    /**
     * Responsive strategy:
     *  mobile  (<640px) : full-width, auto height, compact spacing
     *  sm      (≥640px) : medium spacing
     *  lg      (≥1024px): fixed 320px height to match Figma
     */
    <div
      className="
        w-full
        bg-white border border-[#e5e7eb] rounded-[16px]
        p-4 sm:p-5
        flex flex-col
        min-h-[260px] sm:min-h-[280px] lg:h-[320px] lg:min-h-0
      "
    >
      {/* ── HEADER ── */}
      <h3
        className="
          text-[13px] sm:text-[14px]
          font-[700] tracking-wide
          text-black uppercase
          mb-3 sm:mb-4
          flex-shrink-0
        "
      >
        Client Requests
      </h3>

      {/* ── REQUEST LIST ── */}
      <div className="flex flex-col flex-1 min-h-0">
        {requests.map((req, i) => (
          <div key={i}>
            <div className="flex items-center justify-between py-2.5 sm:py-3 lg:py-[14px]">

              {/* Title */}
              <span
                className="
                  text-[13px] sm:text-[14px]
                  font-[500] text-[#ED1D25]
                  hover:text-[#d91920]
                  transition-colors duration-150
                  cursor-pointer
                  pr-3
                  leading-snug
                "
              >
                {req.title}
              </span>

              {/* Price */}
              <span
                className="
                  text-[13px] sm:text-[14px]
                  font-[600] text-[#374151]
                  flex-shrink-0
                "
              >
                ${req.price}
              </span>
            </div>

            {/* Divider */}
            {i < requests.length - 1 && (
              <div className="h-px bg-[#f3f4f6]" />
            )}
          </div>
        ))}
      </div>

      {/* ── GROWTH SECTION ── */}
      <div className="mt-3 sm:mt-4 flex-shrink-0">
        <div
          className="
            text-[24px] sm:text-[26px] lg:text-[28px]
            font-[800] text-[#22c55e]
            tracking-tight leading-none
          "
        >
          +{growthPercent}%
        </div>
        <p
          className="
            text-[9px] sm:text-[10px]
            uppercase tracking-widest
            text-[#9ca3af]
            mt-1
          "
        >
          Growth Since Last Week
        </p>
      </div>
    </div>
  );
}