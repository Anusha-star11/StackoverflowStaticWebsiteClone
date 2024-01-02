import './index.css'

const ChronoCard=props=>{
    const {item}=props
    
    return(
        <div className="JobsContainer">
                <h1>{item.cardJobProfile}</h1>
                <p>{item.cardCompanyName}</p>
                <div className='locationContainer'>
                    <p>{item.cardLocation}</p>
                    <p>{item.mode}</p>
                </div>
                <button type="button">{item.tags}</button>

            </div>
    )
}

export default ChronoCard