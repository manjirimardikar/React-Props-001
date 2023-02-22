
import './App.css';
import Card from './Component/Card';

function App() {
  return (
    <div className="App">
     <Card colorcode="#FF6663" name= "Pink"/>
    <Card colorcode="#333333" name= "Gray"/> 
    <Card colorcode="#000000" name= "Black"/> 
    <Card colorcode="#38BB14" name= "Green"/>
    <Card colorcode="#C90B0B" name= "Red"/>
    <Card colorcode="#FF8000" name= "Orange"/>
    <Card colorcode="#FFF500" name= "Yellow"/>
    <Card colorcode="#CCCCCC" name= "Light-Gray"/>
    <Card colorcode="#7E41A2" name= "Purple"/>
    <Card colorcode="#C14911" name= "Brown"/>
    </div>
  );
}

export default App;
