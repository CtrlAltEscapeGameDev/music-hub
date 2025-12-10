const LIKED_SONGS_KEY = 'mood-music-liked';

export function getLikedSongs(): Set<string> {
  try {
    const stored = localStorage.getItem(LIKED_SONGS_KEY);
    if (stored) {
      return new Set(JSON.parse(stored));
    }
  } catch {
    console.error('Failed to load liked songs');
  }
  return new Set();
}

export function saveLikedSongs(likedSet: Set<string>): void {
  try {
    localStorage.setItem(LIKED_SONGS_KEY, JSON.stringify(Array.from(likedSet)));
  } catch {
    console.error('Failed to save liked songs');
  }
}

export function toggleLike(trackId: string, likedSet: Set<string>): Set<string> {
  const newSet = new Set(likedSet);
  if (newSet.has(trackId)) {
    newSet.delete(trackId);
  } else {
    newSet.add(trackId);
  }
  return newSet;
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
