import { useState } from 'react';
import { Footer } from '../Footer/fotter';
import { Header } from '../Header/header';
import { MainSection } from '../MainSection/mainSection';
import './App.css';

function App() {

  // STATE

  // State for following state of userList elements

  const [userListVisibility, setVisibilityOfUserList] = useState("block");

  // State for following state of userCard elements

  const [ userCardVisibility, setVisibilityOfUserCards ] = useState("hide")

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
