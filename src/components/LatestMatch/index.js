import './index.css'

const LatestMatch = props => {
  const {updatedMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = updatedMatchDetails
  return (
    <div className="latest-match-container">
      <div className="left-container">
        <h1 className="competin-team-heading">{competingTeam}</h1>
        <p className="date-text">{date}</p>
        <p className="text">{venue}</p>
        <p className="text">{result}</p>
      </div>
      <div className="competing-team-logo-container">
        <img
          alt={`latest match ${competingTeam}`}
          src={competingTeamLogo}
          className="competing-team-logo"
        />
      </div>
      <div className="right-container">
        <p className="text">First Innings</p>
        <p className="text">{firstInnings}</p>
        <p className="text">Second Innings</p>
        <p className="text">{secondInnings}</p>
        <p className="text">Man Of The Match</p>
        <p className="text">{manOfTheMatch}</p>
        <p className="text">Umpires</p>
        <p className="text">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
