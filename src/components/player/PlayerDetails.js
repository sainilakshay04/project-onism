function PlayerDetails(props) {
    return (
    <div className="player-details">
      <h3 className="song-title">{props.song.title}</h3>
      <h4 className="song-artist">{props.song.artist}</h4>
    </div>
    );
  }
  
export default PlayerDetails;