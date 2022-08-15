import { Component } from 'react';
const data = {

}

function card(title) {

     return (
          <div className="col" key={title}>
               <div className="card bg-dark text-bg-dark container p-2">
                    <img src={`/assets/${title}.jpg`} style={{ width: '16rem', height: '16rem' }} className="card-img-top" alt={title} />
                    <div className="card-body">
                         <h5 className="card-title">{title}</h5>
                         <p className="card-text">{title}</p>
                    </div>
               </div>
          </div>
     )
}

class Main extends Component {
     constructor(props) {
          super(props);
          this.state = {
               titles: ["ancalagon", "draugluin", "feanor", "glaurung", "maeglin", "thorondor", "ungliont",
                    "bane", "durin", "finarfin", "gothmog", "morgoth", "thuringwethil",
                    "beleg", "earendil", "fingolfin", "ingwe", "sauron", "turgon",
                    "beren", "ecthelion", "finrod", "maedhros", "thingol", "turin"]
          }
     }

     getState() {
          return this.state.titles.sort(() => Math.random() - 0.5).slice(0, 10);
     }
     render() {
          return (
               <div className="container-fluid mx-5">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                         {this.getState().map(title => card(title))}
                    </div>
               </div>)

     }
};

export default Main;