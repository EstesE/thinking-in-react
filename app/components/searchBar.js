import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
  return (
    <Form>
      <FloatingLabel
        controlId="floatingInput"
        label="Search..."
        className="mb-3"
      >
        <Form.Control type="text" placeholder="fruit" value={filterText} onChange={(e) => onFilterTextChange(e.target.value)} />
      </FloatingLabel>
      <label>
        <Form.Check 
          type="switch"
          id="custom-switch"
          label="In Stock Only"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
      </label>
    </Form>
  );
};

export default SearchBar;