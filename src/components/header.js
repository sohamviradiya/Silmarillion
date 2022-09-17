import { Component } from 'react';
class Headers extends Component {
     constructor(props) {
          super(props);
     }
     render() {
          return (
               <div className='bg-dark fixed-top p-3'>
                    <div className="container d-flex flex-row justify-content-between align-items-center">
                         <h1 className='text-bg-dark'> Silmarillion Memory Card Game</h1>
                         <ul className="nav ">
                              <li className="nav-item">
                                   <a className="nav-link active" aria-current="page" href="https://github.com/sohamviradiya/silmarillion">Source Code</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="https://www.theodinproject.com/lessons/node-path-javascript-memory-card">The Odin Project</a>
                              </li>
                              <li className="nav-item">
                              <a className="nav-link" href="https://reactjs.org/">React</a>
                              </li>
                              <li className="nav-item">
                              <a className="nav-link" href="https://getbootstrap.com/">Bootstrap</a>
                              </li>
                         </ul>
                    </div>
               </div>
          )
     }
}

export default Headers;