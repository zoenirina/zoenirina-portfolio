

export default function ServiceCard({ icon, slogan, title, description }) {
  return (
    <div
      className="
        relative cursor-pointer w-full
        bg-white/5 backdrop-blur-sm filter text-gray-900 border border-gray-300
        rounded-lg shadow-xl p-8
        transition-colors duration-300
        dark:backdrop-blur-sm
        dark:bg-gradient-to-br dark:from-[#251c3b]/20 dark:to-[#010000]/20 dark:border-[#27272a] dark:text-white
      "
    >
      <span
        className="
          absolute left-16 top-0 w-0.5 h-12 bg-gray-300
          dark:bg-white/10
        "
      />

      <div
        className="
          p-2 bg-gray-100 border border-gray-300 w-fit rounded-full relative mb-4
          dark:bg-[#0c0211] dark:border-[#27272a]
        "
      >
        <button
          className="
            inline-flex items-center justify-center whitespace-nowrap text-sm font-medium
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
            disabled:pointer-events-none disabled:opacity-50
            p-2 rounded-full
            bg-gradient-to-tl from-slate-200 via-purple-400 to-gray-300
            hover:opacity-90
            dark:from-slate-800 dark:via-violet-500 dark:to-zinc-400
          "
        >
          <span className="w-8 h-8 flex items-center justify-center text-gray-800 dark:text-white">
            {icon}
          </span>
        </button>
      </div>

      {/* Texte */}
      <p
        className="
          text-sm uppercase tracking-widest mb-2
          text-purple-600
          dark:text-[#e7aaff]
        "
      >
        {slogan}
      </p>
      <h2
        className="
          text-3xl font-bold mb-4
          text-gray-900 dark:text-white
        "
      >
        {title}
      </h2>
      <p
        className="
          mb-8
          text-gray-600 dark:text-gray-300
        "
      >
        {description}
      </p>
    </div>
  );
}

