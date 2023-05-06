// import logo from './logo.svg';
import './App.css';
import Wrapper from './component/Wrapper';
import Interface from './component/Interface';
import Button from './component/Button';
import ButtonBox from './component/ButtonBox';
import CalcProvider from './context/CalcContext';
const btnValues = [
  ["AC","+-","%","/",],
  [7,8,9,"x"],
  [4,5,6,"-"],
  [1,2,3,"+"],
  [0, '.' ,"="],
];

function App() {
  return (
    <CalcProvider  >
      <Wrapper>
        <Interface/>
        
        <ButtonBox>
          {btnValues.flat().map((btn,i)=>(
          <Button value={btn}
          key={i} />))}
        </ButtonBox>

      
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
