import { Avatar, IconButton, Button } from '@material-ui/core';
import styled from 'styled-components';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from "email-validator";

function Sidebar() {
    const createChat = ()=>{
        const input = prompt('Please enter an email address for user you want to chatt with');
        if(!input) return null ;
        if (EmailValidator.validate(input)){
            // we need to add chatt in to db
        }
    }
    return (
      <Container>
          <Header>
              <userAvatar/>
              <IconsContainer>
                  <IconButton><ChatIcon/></IconButton>
                  <IconButton><MoreVertIcon/></IconButton>
                  
                
              </IconsContainer>
          </Header>
          <Search>
              <SearchIcon/>
              <SearchInput placeholder="search in chats"/>
          </Search>
          <SideBarButton onClick={createChat}>Start a new chat</SideBarButton>

          {/* list of chats */}

      </Container>
    );
}

export default Sidebar

const Container = styled.div``;
const SideBarButton = styled(Button)`
    width:100%;
    &&&{
        border-top:1px solid whitesmoke;
        border-bottom:1px solid whitesmoke;
    }
    

`;
const SearchInput = styled.input`
    outline-width:0;
    flex:1;
    border:none;
`;
const Header = styled.div`
    display:flex;
    position:sticky;
    top:0;
    background-color:white;
    justify-content:space-between;
    align-items:center;
    padding:15px;
    height:80px;
    border-bottom:1px solid whitesmoke;
`;
const userAvatar = styled(Avatar)``;
const IconsContainer = styled.div``;
const Search = styled.div`
    display:flex;
    align-items:center;
    padding:5px;
    border-radius:2px;
`;

