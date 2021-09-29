import {Route,Switch} from 'react-router-dom';
import Home from "./Pages/Home";
import Create from './Pages/Create';
import Share from './Pages/Share';
import Play from './Pages/Play';
import Entry from './Pages/Entry';
import NotFound from './ErrorPage/NotFound';
import Ask1 from './Pages/QuestionPages/Ask1';
import Ask2 from './Pages/QuestionPages/Ask2';
import Ask3 from './Pages/QuestionPages/Ask3';
import Ask4 from './Pages/QuestionPages/Ask4';
import Ask5 from './Pages/QuestionPages/Ask5';
import Ask6 from './Pages/QuestionPages/Ask6';
import Ask7 from './Pages/QuestionPages/Ask7';
import Ask8 from './Pages/QuestionPages/Ask8';
import Ask9 from './Pages/QuestionPages/Ask9';
import Result from './Pages/Result';

const App = () => {
  document.title = "Buddies Book";
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/create" component={Create}/>
        <Route exact path="/share" component={Share}/>
        <Route path="/play/:name" component={Play}/>
        <Route exact path="/entry" component={Entry}/>
        <Route exact path="/ask1" component={Ask1}/>
        <Route exact path="/ask2" component={Ask2}/>
        <Route exact path="/ask3" component={Ask3}/>
        <Route exact path="/ask4" component={Ask4}/>
        <Route exact path="/ask5" component={Ask5}/>
        <Route exact path="/ask6" component={Ask6}/>
        <Route exact path="/ask7" component={Ask7}/>
        <Route exact path="/ask8" component={Ask8}/>
        <Route exact path="/ask9" component={Ask9}/>
        <Route exact path="/result" component={Result} />
        <Route component={NotFound} /> 
      </Switch>
    </>
  )
}
export default App;