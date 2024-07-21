import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: [], isLoading: true}

  componentDidMount() {
    this.getIdSpecificDetails()
  }

  getIdSpecificDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamMatchesData: updatedData, isLoading: false})
  }

  render() {
    const {teamMatchesData, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchesData
    const updatedMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.data,
      competinTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const updatedRecentMatchesList = recentMatches.map(eachMach => ({
      umpires: eachMach.umpires,
      result: eachMach.result,
      manOfTheMatch: eachMach.man_of_the_match,
      id: eachMach.id,
      date: eachMach.date,
      venue: eachMach.venue,
      competingTeam: eachMach.competing_eam,
      competingTeamLogo: eachMach.competing_team_logo,
      firstInnings: eachMach.first_innings,
      secondInnings: eachMach.second_innings,
      matchStatus: eachMach.match_status,
    }))
    const backgroundColor = ['#a4261d', '#5755a7', '#da237b', '#f7db00']
    const colorIndex = Math.floor(Math.randon() * backgroundColor.length)
    return (
      <div className={`team-matches-container ${colorIndex}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img
              alt="team banner"
              src={teamBannerUrl}
              className="team-banner-img"
            />
            <p className="latest-matches-text">Latest Matches</p>
            <LatestMatch updatedMatchDetails={updatedMatchDetails} />
            <ul className="match-card-container">
              {updatedRecentMatchesList.map(eachMatchCard => (
                <MatchCard
                  eachMatchCard={eachMatchCard}
                  key={eachMatchCard.id}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default TeamMatches
