import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachCardDetails} = props
  const {id, name, teamImageUrl} = eachCardDetails

  return (
    <li className="list-item">
      <Link className="link-item" to={`/ipl/${id}`}>
        <div className="card-container">
          <img alt={name} className="team-image" src={teamImageUrl} />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
