import { Mood } from '../types';

interface MoodBarProps {
  moods: Mood[];
  activeMood: string;
  onMoodSelect: (moodId: string) => void;
  isDark: boolean;
}

export function MoodBar({ moods, activeMood, onMoodSelect, isDark }: MoodBarProps) {
  return (
    <div className={`${isDark ? 'bg-[#473C33]' : 'bg-[#EFF8FF]'} ${isDark ? 'border-[#ABC270]' : 'border-[#192853]'} border-b transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center gap-3 py-4 flex-wrap">
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => onMoodSelect(mood.id)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all transform hover:scale-105 ${
                activeMood === mood.id
                  ? isDark
                    ? 'bg-[#FEC868] text-[#473C33]'
                    : 'bg-[#FFE14E] text-[#192853]'
                  : isDark
                    ? `bg-transparent border-2 border-[#ABC270] text-[#ABC270] hover:bg-[#ABC270] hover:text-[#473C33]`
                    : `bg-transparent border-2 border-[#FFE14E] text-[#192853] hover:bg-[#FFE14E] hover:text-white`
              }`}
            >
              {mood.displayName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
