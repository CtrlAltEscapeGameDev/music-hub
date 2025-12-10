import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MoodBar } from './components/MoodBar';
import { HeroCard } from './components/HeroCard';
import { LikedSongs } from './components/LikedSongs';
import { Toast } from './components/Toast';
import moods from './data/moods';
import { getLikedSongs, saveLikedSongs, toggleLike, shuffleArray } from './utils/localStorage';
import { Track } from './types';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [currentMood, setCurrentMood] = useState(moods[0].id);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [queue, setQueue] = useState<Track[]>([]);
  const [likedSet, setLikedSet] = useState<Set<string>>(new Set());
  const [isLikedOpen, setIsLikedOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [allTracks, setAllTracks] = useState<Track[]>([]);

  const currentMoodData = moods.find((m) => m.id === currentMood);
  const currentTrack = queue[currentTrackIndex] || null;

  useEffect(() => {
    const liked = getLikedSongs();
    setLikedSet(liked);
    const allTracksArray = moods.flatMap((m) => m.tracks);
    setAllTracks(allTracksArray);
    if (currentMoodData) {
      setQueue(shuffleArray(currentMoodData.tracks));
      setCurrentTrackIndex(0);
    }
  }, []);

  useEffect(() => {
    if (currentMoodData) {
      setQueue(shuffleArray(currentMoodData.tracks));
      setCurrentTrackIndex(0);
    }
  }, [currentMood, currentMoodData]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleToggleLike = (trackId: string) => {
    const newSet = toggleLike(trackId, likedSet);
    setLikedSet(newSet);
    saveLikedSongs(newSet);
    const isNowLiked = newSet.has(trackId);
    showToast(isNowLiked ? 'Added to Saved' : 'Removed from Saved');
  };

  const handleMoodSelect = (moodId: string) => {
    setCurrentMood(moodId);
  };

  const handleToggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`${isDark ? 'bg-[#473C33]' : 'bg-[#EFF8FF]'} text-white min-h-screen transition-colors duration-300`}>
      <Header isDark={isDark} onToggleTheme={handleToggleTheme} onOpenLiked={() => setIsLikedOpen(true)} />
      <MoodBar moods={moods} activeMood={currentMood} onMoodSelect={handleMoodSelect} isDark={isDark} />

      <main className="max-w-3xl mx-auto px-4 py-12">
        <HeroCard
          track={currentTrack}
          isLiked={currentTrack ? likedSet.has(currentTrack.id) : false}
          onToggleLike={() => {
            if (currentTrack) handleToggleLike(currentTrack.id);
          }}
          isDark={isDark}
        />
      </main>

      <LikedSongs
        tracks={allTracks}
        isOpen={isLikedOpen}
        onClose={() => setIsLikedOpen(false)}
        onToggleLike={handleToggleLike}
        isDark={isDark}
        likedSet={likedSet}
      />

      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}

export default App;
