import {Chrono} from 'react-chrono'
import ChronoCard from '../ChronoCard'
import './index.css'

const items = [
    {
      id:1,
      cardJobProfile: 'Frontend Developer with Anguler',
      cardCompanyName: 'Wallet Hub',
      cardLocation:'Washington DC',
      mode:"Remote",
      tags:"Angular js",
    },
    {
        id:2,
        cardJobProfile: 'Frontend Developer with Anguler',
        cardCompanyName: 'Wallet Hub',
        cardLocation:'Washington DC',
        mode:"Remote",
        tags:"Angular js",
      },
      {
        id:3,
        cardJobProfile: 'Frontend Developer with Anguler',
        cardCompanyName: 'Wallet Hub',
        cardLocation:'Washington DC',
        mode:"Remote",
        tags:"Angular js",
      },
  ]


const RightPart=()=>(
    <div className="rightContainer">
        <h1>Looking out for...</h1>
        <div className="chrono-container">
        <Chrono mode="VERTICAL" items={items} borderLessCards="true" >
           {items.map(each=>(<ChronoCard item={each} key={each.id}/>))} 


        </Chrono>
        </div>

    </div>
)


export default RightPart