"use client";

import Image from "next/image";

interface Action {
  title: string;
  description: string;
}

interface SuggestedActionsProps {
  actions?: Action[];
  onViewAll?: () => void;
}

export default function SuggestedActions({
  actions = [],
  onViewAll,
}: SuggestedActionsProps) {
  return (
    <div className="
      w-full
      h-auto lg:h-[221px]
      rounded-2xl border border-gray-200 bg-white shadow-sm
      p-4 sm:p-5
      flex flex-col justify-between
    ">

      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <h3 className="text-xs sm:text-sm font-bold uppercase text-gray-900">
          Suggested Actions
        </h3>
         <Image
                 src="/image/suggestedactions/Vector (3).png"
                 alt="wallet icon"
                 width={14}
                 height={14}
                 className="w-[13px] h-[13px] sm:w-[14px] sm:h-[14px]"
               />
      </div>

      {/* Actions */}
      <div className="
        grid grid-cols-1 sm:grid-cols-3
        divide-y sm:divide-y-0 sm:divide-x
        divide-gray-200
        flex-1
      ">
        {actions.map((action, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center text-center px-3 py-3"
          >
            <h4 className="text-sm font-semibold text-gray-900 mb-1">
              {action.title}
            </h4>

            <p className="text-xs sm:text-sm text-gray-500 break-words">
              {action.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-4">
        <button
          onClick={onViewAll}
          className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full"
        >
          View all activity
        </button>
      </div>
    </div>
  );
}