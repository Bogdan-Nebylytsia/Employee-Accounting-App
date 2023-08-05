import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css'


const EmployersList = ({ data, onDelete, onToggleProps, apdateSalary }) => {
   const elements = data.map((item) => {
      const { id, ...itemProps } = item;
      
      const onApdateSalary = (e) => {
         const salary = e.target.value.slice(0, e.target.value.length - 1);
         apdateSalary(id, salary)
      }

      return (
         <EmployersListItem
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProps={(e) => onToggleProps(id, e.currentTarget.getAttribute('data-toggle'))}
            onApdateSalary={onApdateSalary}
         />
      )
   });
   
   return (
      <ul className="app-list list-group">
         {elements}
      </ul>
   )
}

export default EmployersList;