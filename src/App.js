import './styles/styles.scss'
import { Component } from 'react';
import {user_data} from './firebase';
import Main from './components/main';
import Header from './components/header'
import { collection, getFirestore } from 'firebase/firestore';

const colref = collection(getFirestore(), "Users");
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
