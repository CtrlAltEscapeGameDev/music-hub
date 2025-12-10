import { Track } from '../types';
import { Heart } from 'lucide-react';

interface HeroCardProps {
  track: Track | null;
  isLiked: boolean;
  onToggleLike: () => void;
  isDark: boolean;
}

export function HeroCard({ track, isLiked, onToggleLike, isDark }: HeroCardProps) {
  if (!track) {
    return (
      <div className={`${isDark ? 'bg-[#473C33]' : 'bg-[#EFF8FF]'} rounded-3xl shadow-2xl p-8 text-center transition-colors duration-300`}>
        <p className={isDark ? 'text-[#ABC270]' : 'text-[#192853]'}>Select a mood to get started</p>
      </div>
    );
  }

  return (
    <div className={`${isDark ? 'bg-[#473C33]' : 'bg-white'} rounded-3xl shadow-2xl overflow-hidden transition-all duration-500`}>
      <div className="relative">
        <img
          src={track.coverImage}
          alt={track.title}
          className="w-full h-80 object-cover"
        />

        <button
          onClick={onToggleLike}
          className={`absolute top-4 right-4 p-3 ${isDark ? 'bg-[#FEC868]' : 'bg-white'} rounded-full shadow-lg hover:scale-110 transition-transform`}
        >
          <Heart
            className={`w-6 h-6 transition-colors ${isLiked ? 'fill-[#FDA769] text-[#FDA769]' : isDark ? 'text-[#473C33]' : 'text-gray-400'}`}
          />
        </button>
      </div>

      <div className="p-8">
        <h2 className={`text-3xl font-bold ${isDark ? 'text-[#FEC868]' : 'text-[#192853]'} mb-2`}>{track.title}</h2>
        <p className={`${isDark ? 'text-[#ABC270]' : 'text-[#192853]'} text-lg mb-6`}>{track.artist}</p>
        <p className={`${isDark ? 'text-[#ABC270]' : 'text-[#192853]'} italic text-base mb-6`}>"{track.quote}"</p>

        <div className={`${isDark ? 'bg-[#473C33]' : 'bg-gray-100'} rounded-2xl p-4`}>
          <iframe
            title={`Spotify: ${track.title}`}
            style={{ borderRadius: '12px' }}
            src={track.spotifyUrl}
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
