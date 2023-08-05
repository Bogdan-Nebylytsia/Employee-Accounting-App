import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list'
import EmployersAddForm from '../employers-add-form/employers-add-form';
import './app.css';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            { name: "John C.", salary: "800", increase: false, rise: true, id: 1 },
            { name: "Alex B.", salary: "1000", increase: true, rise: false, id: 2 },
            { name: "Tony K.", salary: "2500", increase: false, rise: false, id: 3 }
         ],
         term: "",
         filter: ""
      }
      this.maxId = 4;
   }

   deleteItem = (id) => {
      this.setState(state => {
         return {
             data: state.data.filter(item => item.id !== id)
         }
      })
   }

   addItem = (name, salary) => {
      
      this.setState(state => {
         const newArr = [...state.data, { name: name, salary: salary, increase: false, rise: false, id: this.maxId++ }];

         return {
             data: newArr
         }
        
      })
   }

   onToggleProps = (id, props) => {
      this.setState(({ data }) => ({
         data: data.map(item => {
            if (item.id === id) {
               return {...item, [props]: !item[props]}
            }

            return item
         })
      }))
   }

   searchEmp = (items, term) => {
      if (term.length === 0) {
         return items;
      }

      return items.filter(item => {
        return item.name.indexOf(term) > -1
      })
   }

   onApdateSearch = (term) => {
      this.setState({term})
   }

   filterPost = (items, filter) => {
      switch (filter) {
         case "rise":
            return items.filter(item => item.rise)
         case "moreThen1000":
            return items.filter(item => item.salary >1000)
      
         default:
            return items
      }
   }

   onFilterSelect = (filter) => {
      this.setState({filter})
   }

   apdateSalary = (id, salary) => {
      this.setState(({ data }) => ({
         data: data.map(item => {
            if (item.id === id) {
               return ({ ...item, salary:salary})
            }

            return item
         })
      }))
   }

   render() {
      const { data, term, filter } = this.state;
      const emploees = this.state.data.length;
      const increased = this.state.data.filter(item => item.increase).length
      const visableData = this.filterPost(this.searchEmp(data, term), filter);

      return (
         <div className="app">
            <AppInfo
               increased= {increased}
               emploees= {emploees}
            />
            <div className="search-panel">
               <SearchPanel onApdateSearch={ this.onApdateSearch } />
               <AppFilter filter={filter}
                  onFilterSelect={this.onFilterSelect}
               />
            </div>
            <EmployersList
               data={visableData}
               onDelete={this.deleteItem}
               onToggleProps={this.onToggleProps}
               apdateSalary={this.apdateSalary}
            />

            <EmployersAddForm
               data={data}
               onAdd={this.addItem}
            />
         </div>
      );
   }
}


export default App;