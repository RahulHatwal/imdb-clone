import Dropdown from "react-bootstrap/Dropdown";

function DropdownButton() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Ranking
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        <Dropdown.Item href="#/action-1" active>
          Ranking
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">IMDB Rating</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Release Date</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Number of Ratings</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Your Rating</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownButton;
