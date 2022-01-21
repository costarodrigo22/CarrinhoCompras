import {Switch, Route} from 'react-router-dom';

import Home from './Pages/Home';
import LittleCar from './Pages/LittleCar';

export default function Routes(props){
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/car" component={LittleCar}/>
    </Switch>
  );
}