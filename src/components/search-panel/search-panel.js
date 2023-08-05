import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
   constructor(props) {
      super(props);
      this.state = {
         term: "",
         filter: "all"
      }
   }

   onApdateSearch = (e) => {
      const term = e.target.value;
      this.setState({ term })
      this.props.onApdateSearch(term)
   }

   render() {
      return (
         <input
            type="text"
            className="form-control"
            placeholder="Найти сотрудника"
            value={this.state.term}
            onChange={this.onApdateSearch}
         />
      );
   }

}

export default SearchPanel;