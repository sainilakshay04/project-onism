function PlayerDetails(props) {
    return (
    <div className="player-details">
      <div className="song-title">{props.song.title}</div>
      <div className="song-artist">{props.song.artist}</div>
    </div>
    );
  }
  
export default PlayerDetails;