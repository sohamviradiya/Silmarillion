import './styles/styles.scss'
import { Component } from 'react';
import Main from './components/main';
import Header from './components/header'
class App extends Component {
     constructor(props) {
          super(props);
     }
     render() {
          return (
               <div>
                    <Header />
                    <Main visible={true} />
               </div>
          )
     }
}

export default App;
