import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { GrFormView } from "react-icons/gr";
import './index.css'

const Query=props=>{
    const {item}=props
    const {title,tags,isAnswered,lastActivityDate,creationDate,userName,views,answer,votes}=item
    const time=(creationDate-lastActivityDate)/1000
    
    return(
        <li className="ItemContainer">
            <div className="LeftContainer">
            <h1>{title}</h1>
            <div className="TagsContainer">
                <button className="tags">{tags[0]}</button>
                <button className="tags">{tags[1]}</button>
                <button className="tags">{tags[2]}</button>
            </div>
            <div className="timeContainer">
                <p className="userInfo">{isAnswered ? "answered" : "modified"}</p>
                <p className="userInfo">{time} min ago</p>
                <p className="userInfo">{userName}</p>
            </div>
            </div>

            <div className="RightContainer">
                <div className="votes">
                    <p className="votesInfo">{votes}</p>
                    <p className="votesInfo">votes</p>
                    <FaRegThumbsUp />
                </div>
                <div className="votes">
                    <p className="votesInfo">{answer}</p>
                    <p className="votesInfo">answers</p>
                    <FaRegMessage />

                </div>
                <div className="votes">
                    <p className="votesInfo">{views}</p>
                    <p className="votesInfo">views</p>
                    <GrFormView />
                </div>

            
            </div>
        </li> 
    )
}

export default Query