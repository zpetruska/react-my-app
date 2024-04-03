import './App.css';
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import {useState} from "react";

function App() {
  const [ isModalVisible, setIsModalVisible ] = useState(false);
  function showModalHandler() {
    setIsModalVisible(true)
  }
  function hideModalHandler() {
    setIsModalVisible(false)
  }
  return (
    <>
    <MainHeader onCreatePost={showModalHandler}/>
    <main>
      <PostsList isPosting={isModalVisible} onClosePosting={hideModalHandler}/>
    </main>
    </>
  );
}

export default App;
