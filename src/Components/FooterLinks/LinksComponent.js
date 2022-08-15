import Button from 'react-bootstrap/Button';
import './Links.css'

function LinksComponent(props) {
  return (
    <>
      <Button className="links-btn"  variant="outline-primary">{props.btn}</Button>{' '}
      
    </>
  );
}

export default LinksComponent;