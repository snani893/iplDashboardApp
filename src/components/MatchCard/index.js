import './index.css'

const MatchCard = props => {
  const {eachMatchCard} = props
  const {competingTeamLogo, matchStatus, result, competingTeam} = eachMatchCard
  let status
  if (matchStatus === 'Won') {
    status = 'match-status-won'
  } else {
    status = 'match-status-loss'
  }
  return (
    <div className="match-card-container">
      <img
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
        className="logo-image"
      />
      <p className="team-text">{competingTeam}</p>
      <p className="result-text">{result}</p>
      <p className={status}>{matchStatus}</p>
    </div>
  )
}
export default MatchCard
