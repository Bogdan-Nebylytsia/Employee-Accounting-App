import './employers-list-item.css'

const EmployersListItem = (props) => {

   const { name, salary, increase, rise, onDelete, onToggleProps, onApdateSalary } = props;

   let ListClassNames = "list-group-item d-flex justify-content-between";

   if (rise) {
      ListClassNames += " like"
   }

   if (increase) {
      ListClassNames += " increase"
   }

   return (
      <li className={ListClassNames}>
         <span className="list-group-item-label"
            data-toggle = "rise"
            onClick={onToggleProps}>{name}</span>
         <input type="text" className="list-group-item-input"
            defaultValue={salary + "$"} onChange={onApdateSalary}
         />
         <div className="d-flex justify-content-center align-items-center">
            <button type='button'
               className="btn-cookie btn-sm"
               data-toggle = "increase"
               onClick={onToggleProps}>
               <i className="fas fa-cookie"></i>
            </button>

            <button type="button"
               className="btn-trash btn-sm "
               onClick={onDelete}
            >
               <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
         </div>
      </li>
   );

};

export default EmployersListItem;