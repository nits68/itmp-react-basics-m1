const OraCard = (props) => {
    return (
      <article className="ora">
        <header>
          <h3>{props.oraSzam}</h3>
          <button className="icon-button">📝</button>
          <button className="icon-button" onClick={props.onKartyaTorles}>
            🗑️
          </button>
        </header>
        <h4>{props.cim}</h4>
        {props.children}
      </article>
    );
  };
  
  export default OraCard;
