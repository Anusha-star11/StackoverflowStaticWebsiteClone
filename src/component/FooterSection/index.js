import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import './index.css'

const FooterTopItems=['about us','tour','help','blog','chat','data','legal','privacy policy','work here','advertising info','mobile','contact us','info','feedback']
const TECHNOLOGY=['Stackover flow',
    'Server Fault',
    'Super User',
    'Web Applications',
    'Ask Ubuntu',
    'Webmasters',
    'Game Development',
    'TeX - LaTex',
    '50+ more'
    ]
const LifeAndArts=['Photography',
    'Science Fiction & Fantasy',
    'Graphic Design',
    'Movies & TV',
    'Seasoned Advice(Cooking)',
    'Home Improvement',
    'Personal Finance & Money',
    '19 more'
    ]
const CultureAndRecreation=['English Llanguage & Usage',
    'Skeptics',
    'Mi Yodaya',
    'Travel',
    'Christianity',
    'Arcade',
    'Bicycles',
    '21 more'
    ]
const Science=['Mathematics',
    'Cross Validated',
    'Theoritical Comupter Science',
    'Physics',
    'Mathoverflow',
    'Chemistry',
    'Biology',
    '5 more'
    ]

const Others=['Stackapps',
    'Meta Stack Exchange',
    'Area 51',
    'Stackover Flow Careers']


const FooterSection=()=>(
    <footer className="FooterContainer">
        <div className="FooterTop">
            <div className="RightDiv">{FooterTopItems.map(each=><p className="RightDivItems">{each}</p>)}</div>
            <div className="LefttDiv">
                <FaTwitter />
                <FaFacebookF />
                <TbWorld />

            </div>
        </div>
        <div className="FooterMiddle">
            <div className="ListDiv">
                <h1 className="Heading">TECHNOLOGY</h1>
                <ul className="ULList">
                {TECHNOLOGY.map(each=><li>{each}</li>)}
                </ul>

            </div>
            <div className="ListDiv">
            <h1 className="Heading">LIFE/ARTS</h1>
                <ul className="ULList">
                {LifeAndArts.map(each=><li>{each}</li>)}
                </ul>
            </div>
            <div className="ListDiv">
            <h1 className="Heading">CULTURE/RECREATION</h1>
                <ul className="ULList">
                {CultureAndRecreation.map(each=><li>{each}</li>)}
                </ul>
            </div>
            <div className="ListDiv">
            <h1 className="Heading">SCIENCE</h1>
                <ul className="ULList">
                {Science.map(each=><li>{each}</li>)}
                </ul>
            </div>
            <div className="ListDiv">
            <h1 className="Heading">OTHERS</h1>
                <ul className="ULList">
                {Others.map(each=><li>{each}</li>)}
                </ul>
            </div>
        </div>
        <div className="FooterBottom">
            <p>site design/logo 2016 Stock Exchange Inc:user contributions licensed under cc by-sa 3.0 with attribution required</p>
        </div>

    </footer>
)

export default FooterSection