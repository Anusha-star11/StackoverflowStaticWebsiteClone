import {Component} from 'react'
// import Cookies from 'js-cookie'
import SideBar from './component/SideBar'
import Header from './component/Header'
import RightPart from './component/RightPart'
import Query from './component/Query'
import FooterSection from './component/FooterSection'
import './App.css'
// import Cookies from 'js-cookie'




class App extends Component{
    state={
        queryList:[],
    }

    componentDidMount(){
        this.getqueryList()

    }
    
    getqueryList= async () =>{
        const url=`https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow`
        const option={
            method:'GET',
        }
        const response=await fetch(url,option)
        const data=await response.json()
        console.log(data['items'])
        const updated=data['items'].map(each=>({
            id:each.account_id,
            title:each.title,
            tags:each.tags,
            isAnswered:each.is_answered,
            lastActivityDate:each.last_activity_date,
            creationDate:each.creation_date,
            userName:each.display_name,
            views:each.view_count,
            answer:each.answer_count,
            votes:each.score,
        }))
        this.setState({queryList:updated})
        
    }

    render(){
        const {queryList}=this.state
        return(
            <>
            <SideBar/>
            <Header/>
            <RightPart/>
            <div className='middlePart'>
                <div className="questionContainer">
                    <h1 className="questionsHeading">Questions</h1>
                    <ul className='filtersList'>
                        <li className='ListItem'>Intresting</li>
                        <li className='ListItem'>hot</li>
                        <li className='ListItem'>featured</li>
                        <li className='ListItem'>week</li>
                        <li className='ListItem'>month</li>
                    </ul>
                </div>
              
            <ul className='unorderedList'>
            {queryList.map(each=>(<Query key={each.id} item={each}/>))}
            </ul>
            <div className='middlePartBottomDiv'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg" alt="logo" className="logoImage"/>
                <h1>Looking for more?</h1>
                <p>Browse the <span>complete list of questions</span>, or <span>popular tags</span>. Help us answer unswered questions</p>

            </div>
            </div>
            <div className='FooterDivision'>
            <FooterSection/>
            </div>
            </>
        )
    }
}

export default App