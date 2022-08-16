import { Component } from 'react';
const data = {
     "ancalagon": {
          shade: -2,
          alias: "Ancalagon the Black",
          description: "The Greatest of All Winged Dragons"
     },
     "carcharoth": {
          shade: -1,
          alias: "Carcharoth Anfauglir",
          description: "The Greatest of All Werewolves"
     },
     "feanor": {
          shade: 0,
          alias: "Feanor",
          description: "the Maker of of the Silmarils, King of Noldor"
     },
     "glaurung": {
          shade: -2,
          alias: "Glaurung the Father of Dragons",
          description: "The King of Nargothrond"
     },
     "maeglin": {
          shade: -1,
          alias: "Maeglin Eolson",
          description: "Traitor of Gondolin"
     },
     "thorondor": {
          shade: 2,
          alias: "Thorondor",
          description: "The King of the Great Eagles"
     },
     "ungoliant": {
          shade: -2,
          alias: "Ungoliant",
          description: "The Oldest Giant Spider of Arda"
     },
     "finwe": {
          shade: 2,
          alias: "Finwe",
          description: "the father of Fëanor, Fingolfin & Finarfin"
     },
     "durin": {
          shade: 1,
          alias: "Durin the Deathless",
          description: "Oldest of the Seven Dwarf Fathers"
     },
     "finarfin": {
          shade: 1,
          alias: "Finarfin Arafinwë",
          description: "Wisest of Finwë's sons"
     },
     "gothmog": {
          shade: -1,
          alias: "Gothmog the Lord of Balrogs",
          description: "High Captain of Angband"
     },
     "morgoth": {
          shade: -2,
          alias: "Morgoth Bauglir",
          description: "Melkor, The first Dark Lord"
     },
     "thuringwethil": {
          shade: -1,
          alias: "Thuringwethil",
          description: "Sauron's herald Vampire"
     },
     "beleg": {
          shade: 1,
          alias: "Beleg Cúthalion",
          description: "hingol and Companion of Túrin Turambar"
     },
     "earendil": {
          shade: 2,
          alias: "Earendil the Mariner",
          description: "Lord of Arvernien, the father Elros and Elrond"
     },
     "fingolfin": {
          shade: 1,
          alias: "Fingolfin Ñolofinwë",
          description: "the High King of the Ñoldor"
     },
     "ingwe": {
          shade: 2,
          alias: "Ingwe",
          description: "the King of the Vanyar and High King of the Elves"
     },
     "sauron": {
          shade: -2,
          alias: "Sauron Aulendil",
          description: "the Maker of the One Ring"
     },
     "turgon": {
          shade: 1,
          alias: "Turgon the Wise",
          description: "the King of Gondolin and the High King of the Ñoldor"
     },
     "beren": {
          shade: 2,
          alias: "Beren Erchamion",
          description: "Lover of Lúthien, Princess of the Sindar"
     },
     "ecthelion": {
          shade: 1,
          alias: "Ecthelion of the Fountain",
          description: "Bane of Gothmog"
     },
     "finrod": {
          shade: 1,
          alias: "Finrod Felagund",
          description: " King of Nargothrond, the Eldest Son of Finarfin"
     },
     "maedhros": {
          shade: 0,
          alias: "Maedhros the Tall",
          description: "the Eldest of the seven Sons of Fëanor"
     },
     "thingol": {
          shade: 1,
          alias: "Elu Thingol",
          description: "the Founder  King of Doriath"
     },
     "turin": {
          shade: 0,
          alias: "Túrin Turambar",
          description: "the Son of Húrin Thalion"
     }
}

function card(title, method) {
     let shade = 'secondary';

     switch (data[title].shade) {
          case 1: {
               shade = 'success';
               break;
          }
          case 2: {
               shade = 'warning';
               break;
          }
          case -1: {
               shade = 'danger';
               break;
          }
          case -2: {
               shade = 'dark';
               break;
          }
     }
     return (
          <div className="col" key={title}>
               <div className={`card bg-${shade} text-bg-${shade} container p-2`} onClick={() => { method(title) }}>
                    <img src={`/assets/${title}.jpg`} className="card-img-top" alt={title} />
                    <div className="card-body">
                         <h5 className="card-title">{data[title].alias}</h5>
                         <p className="card-text">{data[title].description}</p>
                    </div>
               </div>
          </div>
     )
}

class Main extends Component {
     constructor(props) {
          super(props);
          this.state = {
               titles: Object.keys(data),
               current: Object.keys(data).sort(() => Math.random() - 0.5).slice(0, 10),
               selected: new Set(),
               score: 0,
               highest_score: 0
          }
     }

     getState = () => (this.state.current);

     shuffle = () => {
          this.setState({ current: Object.keys(data).sort(() => Math.random() - 0.5).slice(0, 10) });
     }

     add_title = (title) => {

          let current_set = this.state.selected;
          let current_score = this.state.score;
          if (current_score > this.state.highest_score) {
               this.setState({
                    highest_score: current_score
               });
          }
          if (this.state.selected.has(title)) {
               console.log('Game Over');
               current_set.clear();
               current_score = 0;
          }
          else {
               current_set.add(title);
               current_score++;
          }
          this.setState({ selected: current_set, score: current_score });
          console.log(this.state.selected);
          this.shuffle();
     }

     render() {
          return (
               <div className="container-fluid mx-5">
                    <div className=''>Score: {this.state.score} High-score: {this.state.highest_score}</div>
                    <div className="row row-cols-1 row-cols-md-5 g-4 p-3">
                         {this.getState().map(title => card(title, this.add_title))}
                    </div>
               </div>)

     }
};

export default Main;