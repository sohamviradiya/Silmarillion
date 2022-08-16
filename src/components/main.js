import { Component } from 'react';
import ancalagon_img from '../assets/ancalagon.jpg'
import carcharoth_img from '../assets/carcharoth.jpg'
import feanor_img from '../assets/feanor.jpg'
import glaurung_img from '../assets/glaurung.jpg'
import maeglin_img from '../assets/maeglin.jpg'
import thorondor_img from '../assets/thorondor.jpg'
import ungoliant_img from '../assets/ungoliant.jpg'
import finwe_img from '../assets/finwe.jpg'
import durin_img from '../assets/durin.jpg'
import finarfin_img from '../assets/finarfin.jpg'
import gothmog_img from '../assets/gothmog.jpg'
import morgoth_img from '../assets/morgoth.jpg'
import thuringwethil_img from '../assets/thuringwethil.jpg'
import beleg_img from '../assets/beleg.jpg'
import earendil_img from '../assets/earendil.jpg'
import fingolfin_img from '../assets/fingolfin.jpg'
import ingwe_img from '../assets/ingwe.jpg'
import sauron_img from '../assets/sauron.jpg'
import turgon_img from '../assets/turgon.jpg'
import beren_img from '../assets/beren.jpg'
import ecthelion_img from '../assets/ecthelion.jpg'
import finrod_img from '../assets/finrod.jpg'
import maedhros_img from '../assets/maedhros.jpg'
import thingol_img from '../assets/thingol.jpg'
import turin_img from '../assets/turin.jpg'
const data = {
     "ancalagon": {
          shade: -2,
          alias: "Ancalagon the Black",
          description: "The Greatest of All Winged Dragons",
          img: ancalagon_img
     },
     "carcharoth": {
          shade: -1,
          alias: "Carcharoth Anfauglir",
          description: "The Greatest of All Werewolves",
          img: carcharoth_img
     },
     "feanor": {
          shade: 0,
          alias: "Feanor",
          description: "the Maker of of the Silmarils, King of Noldor",
          img: feanor_img
     },
     "glaurung": {
          shade: -2,
          alias: "Glaurung the Father of Dragons",
          description: "The King of Nargothrond",
          img: glaurung_img
     },
     "maeglin": {
          shade: -1,
          alias: "Maeglin Eolson",
          description: "Traitor of Gondolin",
          img: maeglin_img
     },
     "thorondor": {
          shade: 2,
          alias: "Thorondor",
          description: "The King of the Great Eagles",
          img: thorondor_img
     },
     "ungoliant": {
          shade: -2,
          alias: "Ungoliant the deviour",
          description: "The Oldest Giant Spider of Arda",
          img: ungoliant_img
     },
     "finwe": {
          shade: 2,
          alias: "Finwe",
          description: "the father of Fëanor, Fingolfin & Finarfin",
          img: finwe_img
     },
     "durin": {
          shade: 1,
          alias: "Durin the Deathless",
          description: "Oldest of the Seven Dwarf Fathers",
          img: durin_img
     },
     "finarfin": {
          shade: 1,
          alias: "Finarfin Arafinwë",
          description: "Wisest of Finwë's sons",
          img: finarfin_img
     },
     "gothmog": {
          shade: -1,
          alias: "Gothmog the Lord of Balrogs",
          description: "High Captain of Angband",
          img: gothmog_img
     },
     "morgoth": {
          shade: -2,
          alias: "Morgoth Bauglir",
          description: "Melkor, The first Dark Lord",
          img: morgoth_img
     },
     "thuringwethil": {
          shade: -1,
          alias: "Thuringwethil",
          description: "Sauron's herald Vampire",
          img: thuringwethil_img
     },
     "beleg": {
          shade: 1,
          alias: "Beleg Cúthalion",
          description: "hingol and Companion of Túrin Turambar",
          img: beleg_img
     },
     "earendil": {
          shade: 2,
          alias: "Earendil the Mariner",
          description: "Lord of Arvernien, the father Elros and Elrond",
          img: earendil_img
     },
     "fingolfin": {
          shade: 1,
          alias: "Fingolfin Ñolofinwë",
          description: "the High King of the Ñoldor",
          img: fingolfin_img
     },
     "ingwe": {
          shade: 2,
          alias: "Ingwe",
          description: "the King of the Vanyar and High King of the Elves",
          img: ingwe_img
     },
     "sauron": {
          shade: -2,
          alias: "Sauron Aulendil",
          description: "the Maker of the One Ring",
          img: sauron_img
     },
     "turgon": {
          shade: 1,
          alias: "Turgon the Wise",
          description: "the King of Gondolin and the High King of the Ñoldor",
          img: turgon_img
     },
     "beren": {
          shade: 2,
          alias: "Beren Erchamion",
          description: "Lover of Lúthien, Princess of the Sindar",
          img: beren_img
     },
     "ecthelion": {
          shade: 1,
          alias: "Ecthelion of the Fountain",
          description: "Bane of Gothmog",
          img: ecthelion_img
     },
     "finrod": {
          shade: 1,
          alias: "Finrod Felagund",
          description: " King of Nargothrond, the Eldest Son of Finarfin",
          img: finrod_img
     },
     "maedhros": {
          shade: 0,
          alias: "Maedhros the Tall",
          description: "the Eldest of the seven Sons of Fëanor",
          img: maedhros_img
     },
     "thingol": {
          shade: 1,
          alias: "Elu Thingol",
          description: "the Founder  King of Doriath",
          img: thingol_img
     },
     "turin": {
          shade: 0,
          alias: "Túrin Turambar",
          description: "the Son of Húrin Thalion",
          img: turin_img
     }
}

function card(title, method) {
     let shade = 'secondary';

     switch(data[title].shade){
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
          default:
               break;
     }
     return (
          <div className="col" key={title}>
               <div className={`card bg-${shade} text-bg-${shade} container p-2`} onClick={() => { method(title) }}>
                    <img src={data[title].img} className="card-img-top" alt={title} />
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