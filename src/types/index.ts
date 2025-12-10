export interface Track {
  id: string;
  title: string;
  artist: string;
  spotifyUrl: string;
  coverImage: string;
  quote: string;
}

export interface Mood {
  id: string;
  name: string;
  displayName: string;
  tracks: Track[];
}

export interface AppState {
  currentMood: string;
  currentTrackIndex: number;
  isPlaying: boolean;
  queue: Track[];
  likedSet: Set<string>;
  playHistory: Track[];
  isLoading: boolean;
}

export type Member = {
  id: string;
  name: string;
  image: string;
};
