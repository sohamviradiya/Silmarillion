import './styles/styles.scss'
import { Component } from 'react';
import Main from './components/main';
class App extends Component {
     constructor(props) {
          super(props);
     }
     render() {
          return(
               <Main visible={true} />
          )
     }
}

export default App;
