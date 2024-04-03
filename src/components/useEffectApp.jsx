import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function Name(props) {
  return (
    <div>
      <p>{props.name}<FontAwesomeIcon icon={faCoffee} /></p>
      

    </div>
  );
}

export default Name;
