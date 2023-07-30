import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list'
import EmployersAddForm from '../employers-add-form/employers-add-form';
import './app.css';

class WhoAmI extends Component {
   constructor(props) {
      super(props);
      this.state = {
         years: 27,
         position: ""
      }
   }

   nextYear = () => {
      this.setState(state => ({
         years:  state.years + 1
      }))
   }

   commitInputChange = (e, color) => {
      console.log(color);
      this.setState({
         position: e.target.value
      })
   }

   render() {
      const { name, surname, link } = this.props;
      const { years, position } = this.state;

      return (
         <div>
            <button onClick={this.nextYear}>+++</button>
            <h1>My name is {name}, my surname - {surname}, years - {years}, position - {position}</h1>
            <a href={link}>My profile</a>
            <form>
               <span>Введите должность:</span>
               <input type="text" onChange={(e) => this.commitInputChange(e, 'some color')} />
            </form>
      </div>
      )
      
   }
}

const data = [
   { name: "John C.", salary: "800", increase: false, id: 1 },
   { name: "Alex B.", salary: "1000", increase: true, id: 2 },
   { name: "Tony K.", salary: "2500", increase: false, id: 3 }
];

function App() {
   return (
      <div className="app">
         <AppInfo />
         <div className="search-panel">
            <SearchPanel />
            <AppFilter />
         </div>
         <EmployersList data={data}/>
         
         <EmployersAddForm />
         <WhoAmI name='Bogdan' surname='Nebylytsia' link='facebook.com' />
         <WhoAmI name='John' surname='Smith' link='facebook.com'/>
      </div>
   );
}

export default App;