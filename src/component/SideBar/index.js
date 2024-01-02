import { MdQuestionMark } from "react-icons/md";
import { CgWorkAlt } from "react-icons/cg"
import { TiDocumentAdd } from "react-icons/ti";
import { BsTags } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { TbBadge } from "react-icons/tb";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaStackExchange } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import {
  SidebarContainer,
  UnorderedList,
  Listitem,
  Itemtext,
  Image,
  Span,Logo,Logotext
} from './styledComponent'

const SideBar = () => (
        <SidebarContainer>
            <Logo>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg" alt="logo"/>
                <Logotext>Stack<Span>overflow</Span></Logotext>
            </Logo>
            <br/>
            <br/>
          <UnorderedList type="none">
            <Listitem>
              <MdQuestionMark />
                <Itemtext>QUESTIONS</Itemtext>
            </Listitem>
            <Listitem>
            <CgWorkAlt />
                <Itemtext>JOBS</Itemtext>
            </Listitem>
            <Listitem>
            <TiDocumentAdd />
                <Itemtext>DOCUMENTATION</Itemtext>
            </Listitem>
            <Listitem>
            <BsTags />
                <Itemtext>TAGS</Itemtext>
            </Listitem>
            <Listitem>
            <FaRegUser />
                <Itemtext>USERS</Itemtext>
            </Listitem>
            <Listitem>
            <TbBadge />
                <Itemtext>BADGES</Itemtext>
            </Listitem>
            <Listitem>
            <HiOutlineSpeakerphone />
                <Itemtext>ASK QUESTIONS</Itemtext>
            </Listitem>
            <Listitem>
            <FaStackExchange />
                <Itemtext>STACK EXCHANGE</Itemtext>
            </Listitem>
            <Listitem>
            <FaInbox />
                <Itemtext>INBOX</Itemtext>
            </Listitem>
          </UnorderedList>
         
        </SidebarContainer>
)

export default SideBar
