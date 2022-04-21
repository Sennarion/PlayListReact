import SongItem from './SongItem';
import songListClasses from './SongList.module.css';

function SongList({ songs, deleteSong, likeSong }) {
    return (
        <div className={songListClasses.SongList}>
            <div className={songListClasses.SongDescription}>
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