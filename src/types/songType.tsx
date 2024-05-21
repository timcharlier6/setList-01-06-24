export interface Song {
  id: number,
  "Song Title": string,
  "Artist Name": string,
  BPM: number,
  Key: string,
  Lyrics: string,
  URL: string,
}

export interface Data {
  songs: Song[];
}

export interface TableProps {
  songs: Song[];
}


export interface ModalProps {
  songs: Song[];
}

export interface RowProps {
  song: Song,
  index: number,
}
