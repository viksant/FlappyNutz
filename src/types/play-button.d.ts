import PlayButton from '../model/btn-play';

declare module '../model/btn-play' {
  interface PlayButton {
    x: number;
    y: number;
    width: number;
    height: number;
  }
} 