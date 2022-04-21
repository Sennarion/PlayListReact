import { useState, useEffect } from 'react';
import { songList } from './songs';
import SongList from './components/SongList';
import Input from './components/Input';
import Counter from './components/Counter';
import classes from './App.module.css';

function App() {
  const [songs, setSongs] = useState(songList);
  const [song, setSong] = useState({
    songName: '',
    songRelease: '',
    songAuthor: '',
    songAlbum: ''
  });

  const LOCAL_STORAGE_KEY = 'PlayListApp';

  useEffect(() => {
    const storedSongs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedSongs) {
      setSongs(storedSongs)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(songs))
  }, [songs])

  function addNewSong(e) {
    e.preventDefault();
    if (song.songName && song.songAuthor && song.songRelease && song.songAlbum) {
      setSongs([...songs, {
        id: generateId(),
        songName: song.songName,
        releaseDate: song.songRelease,
        author: song.songAuthor,
        albumName: song.songAlbum
      }]);
      setSong({
        songName: '',
        songRelease: '',
        songAuthor: '',
        songAlbum: ''
      })
    }
  }

  function generateId() {
    if (songs.length) {
      return songs[songs.length - 1].id + 1
    }
    return 1
  }

  function deleteSong(id) {
    setSongs(songs.filter(song => song.id !== id))
  }

  function likeSong(id) {
    setSongs(songs.map(song => {
      if (id === song.id) {
        return { ...song, isLiked: !song.isLiked }
      }
      return song;
    }))
  }

  return (
    <div className={classes.App}>
      <h2>PlayList</h2>
      <Input
        songs={songs}
        song={song}
        setSong={setSong}
        addNewSong={addNewSong}
      />
      <SongList
        songs={songs}
        deleteSong={deleteSong}
        likeSong={likeSong}
      />
      <Counter songs={songs} />
    </div>
  );
}

export default App;