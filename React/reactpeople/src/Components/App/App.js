import { useState } from 'react';
import { Footer } from '../Footer/fotter';
import { Header } from '../Header/header';
import { MainSection } from '../MainSection/mainSection';
import './App.css';

function App() {

  // STATE

  // Function for following state of userList elements

  const [userListVisibility, setVisibilityOfUserList] = useState("block");

  // Function for following state of userCard elements

  const [ userCardVisibility, setVisibilityOfUserCards ] = useState("hide")

  // UserList prop function 

  //FUNCTIONS

  const userListProps = userListVisibility => setVisibilityOfUserList(userListVisibility)

   // UserList prop function 

  const userCardProps = userCardVisibility => setVisibilityOfUserCards(userCardVisibility)

  // RENDER

  return (
    <div className="App">
      <Header userListVisibility = {userListProps} 
      stateOfUserList ={userListVisibility}
      userCardVisibility = {userCardProps}
      stateOfUserCard = {userCardVisibility}
      />
      <MainSection 
      visibilityOfUserList = {userListVisibility}
      visibilityOfUserCards = {userCardVisibility}
       />
      <Footer />
    </div>
  );
}

export default App;
