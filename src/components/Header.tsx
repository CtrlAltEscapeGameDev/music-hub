import { Music, Heart, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenLiked: () => void;
}

export function Header({ isDark, onToggleTheme, onOpenLiked }: HeaderProps) {
  return (
    <header className={`sticky top-0 z-50 ${isDark ? 'bg-[#473C33]' : 'bg-[#EFF8FF]'} bg-opacity-95 backdrop-blur-sm ${isDark ? 'border-[#ABC270]' : 'border-[#192853]'} border-b transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Music className={`w-8 h-8 ${isDark ? 'text-[#FEC868]' : 'text-[#FFE14E]'}`} />
          <span className={`text-xl font-bold ${isDark ? 'text-[#ABC270]' : 'text-[#192853]'}`}>Octavia</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenLiked}
            className={`p-2 rounded-full transition-all transform hover:scale-110 ${isDark ? 'hover:bg-[#ABC270] hover:bg-opacity-20 text-[#FEC868]' : 'hover:bg-[#FFE14E] hover:bg-opacity-20 text-[#192853]'}`}
            title="Liked Songs"
          >
            <Heart className="w-5 h-5" />
          </button>

          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-full transition-all transform hover:scale-110 ${isDark ? 'hover:bg-[#ABC270] hover:bg-opacity-20 text-[#FEC868]' : 'hover:bg-[#FFE14E] hover:bg-opacity-20 text-[#192853]'}`}
            title="Toggle Theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}
