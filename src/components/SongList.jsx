import SongItem from './SongItem';
import './SongList.css';

function SongList({ songs, deleteSong, likeSong }) {
    return (
        <div className="song__list">
            <div className="song__description">
                <p>Song name</p>
                <p>Author</p>
                <p>Release date</p>
                <p>Album name</p>
            </div>
            {
                songs.length
                    ? songs.map(song =>
                        <SongItem
                            song={song}
                            key={song.id}
                            deleteSong={deleteSong}
                            likeSong={likeSong}
                        />)
                    : <h2>No music here</h2>
            }
        </div>
    );
}

export default SongList;