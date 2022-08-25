import Button from 'react-bootstrap/Button';
import './Links.css'

function LinksComponent(props) {
  return (
    <>
      <Button className="links-btn"  >{props.btn}</Button>{' '}
    </>
  );
}

export default LinksComponent;