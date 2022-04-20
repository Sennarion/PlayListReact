import { useState } from 'react';
import { songList } from './songs';
import SongList from './components/SongList';
import Input from './components/Input';
import Counter from './components/Counter';
import classes from './App.module.css';

function App() {
  const [songs, setSongs] = useState(songList);

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
        return {...song, isLiked: !song.isLiked}
      }
      return song;
    }))
  }

  return (
    <div className={classes.App}>
      <h2>PlayList</h2>
      <Input
        songs={songs}
        setSongs={setSongs}
        generateId={generateId}
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