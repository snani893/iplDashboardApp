import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamCardsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardsData()
  }

  getTeamCardsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedList = teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamCardsData: updatedList, isLoading: false})
  }

  render() {
    const {teamCardsData, isLoading} = this.state

    return (
      <div className="container">
        <div className="image-and-heading-container">
          <img
            className="ipl-image"
            alt="ipl Logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="teams-container">
            {teamCardsData.map(eachCard => (
              <TeamCard key={eachCard.id} eachCardDetails={eachCard} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
