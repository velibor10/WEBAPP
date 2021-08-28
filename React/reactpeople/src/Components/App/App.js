import { useState } from 'react';
import { Footer } from '../Footer/fotter';
import { Header } from '../Header/header';
import { MainSection } from '../MainSection/mainSection';
import './App.css';

function App() {

  // STATE

  // State for following state of userList elements

  let userListStorage= sessionStorage.getItem("userListVisibility");
  if(!userListStorage) {
    userListStorage = "block";
  }

  let userCard = "hide";
  if(userListStorage === "hide") {
    userCard = "block";
  }

  const [userListVisibility, setVisibilityOfUserList] = useState(userListStorage);

  // State for following state of userCard elements

  const [ userCardVisibility, setVisibilityOfUserCards ] = useState(userCard)

  // State of userData

  const [isRefresh, setRefreshState] = useState(true);
  

  //FUNCTIONS

  // UserList prop function 

  const userListProps = userListVisibility => setVisibilityOfUserList(userListVisibility);

   // UserList prop function 

  const userCardProps = userCardVisibility => setVisibilityOfUserCards(userCardVisibility);

  // User data prop function

  const refreshProps = isRefresh => setRefreshState(isRefresh);


  // RENDER

  // let userListStorage = sessionStorage.getItem("userListVisibility");

  // if(userListStorage!= "undefined" && userListStorage != userListVisibility) {
  //     setVisibilityOfUserList(userListStorage);
  // }


  return (
    <div className="App">
      <Header userListVisibility = {userListProps} 
      stateOfUserList ={userListVisibility}
      userCardVisibility = {userCardProps}
      stateOfUserCard = {userCardVisibility}
      refreshState = {isRefresh}
      setRefreshState = {refreshProps}
      />
      <MainSection 
      visibilityOfUserList = {userListVisibility}
      visibilityOfUserCards = {userCardVisibility}
      refreshStatus={isRefresh}
       />
      <Footer />
    </div>
  );
}

export default App;

