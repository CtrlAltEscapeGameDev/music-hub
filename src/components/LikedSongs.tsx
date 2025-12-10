import { Track } from '../types';
import { X, Heart } from 'lucide-react';

interface LikedSongsProps {
  tracks: Track[];
  isOpen: boolean;
  onClose: () => void;
  onToggleLike: (trackId: string) => void;
  isDark: boolean;
  likedSet: Set<string>;
}

export function LikedSongs({
  tracks,
  isOpen,
  onClose,
  onToggleLike,
  isDark,
  likedSet,
}: LikedSongsProps) {
  if (!isOpen) return null;

  const likedTracks = tracks.filter((t) => likedSet.has(t.id));

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      <div
        className={`relative w-full md:w-96 max-h-96 md:max-h-full md:rounded-2xl rounded-t-3xl ${isDark ? 'bg-[#473C33]' : 'bg-[#EFF8FF]'} shadow-2xl overflow-hidden transition-all duration-300`}
      >
        <div className={`sticky top-0 ${isDark ? 'bg-[#473C33] border-[#ABC270]' : 'bg-[#EFF8FF] border-[#192853]'} border-b px-6 py-4 flex items-center justify-between`}>
          <h2 className={`text-lg font-bold ${isDark ? 'text-[#FEC868]' : 'text-[#192853]'}`}>
            Liked Songs ({likedTracks.length})
          </h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors hover:bg-opacity-20 ${isDark ? 'hover:bg-[#ABC270] text-[#FEC868]' : 'hover:bg-[#FFE14E] text-[#192853]'}`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-80 md:max-h-96">
          {likedTracks.length === 0 ? (
            <div className="p-8 text-center">
              <p className={isDark ? 'text-[#ABC270]' : 'text-[#192853]'}>
                No liked songs yet. Heart your favorites!
              </p>
            </div>
          ) : (
            <div className="divide-y divide-opacity-20 px-4">
              {likedTracks.map((track) => (
                <div
                  key={track.id}
                  className={`py-4 flex items-center gap-4 ${isDark ? 'divide-[#ABC270]' : 'divide-[#192853]'}`}
                >
                  <img
                    src={track.coverImage}
                    alt={track.title}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold truncate ${isDark ? 'text-[#FEC868]' : 'text-[#192853]'}`}>
                      {track.title}
                    </p>
                    <p className={`text-sm truncate ${isDark ? 'text-[#ABC270]' : 'text-[#192853]'}`}>
                      {track.artist}
                    </p>
                  </div>
                  <button
                    onClick={() => onToggleLike(track.id)}
                    className={`p-2 rounded-full flex-shrink-0 transition-colors ${isDark ? 'hover:bg-[#ABC270] hover:bg-opacity-20' : 'hover:bg-[#FFE14E] hover:bg-opacity-20'}`}
                  >
                    <Heart
                      className="w-4 h-4 fill-[#FDA769] text-[#FDA769]"
                    />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
