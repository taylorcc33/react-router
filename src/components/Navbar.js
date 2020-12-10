import { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default () => {
  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Link to="/">
          <Menu.Item
            as="div"
            name="home"
            active={activeItem === "home"}
            onClick={handleItemClick}
          />
        </Link>
        <Link to="/nate">
          <Menu.Item
            as="div"
            name="nate"
            active={activeItem === "nate"}
            onClick={handleItemClick}
          />
        </Link>
        <Link to="/ian">
          <Menu.Item
            as="div"
            name="ian"
            active={activeItem === "ian"}
            onClick={handleItemClick}
          />
        </Link>
        <Link to="/rachel">
          <Menu.Item
            as="div"
            name="rachel"
            active={activeItem === "rachel"}
            onClick={handleItemClick}
          />
        </Link>
        <Link to="/taylor">
          <Menu.Item
            as="div"
            name="taylor"
            active={activeItem === "taylor"}
            onClick={handleItemClick}
          />
        </Link>
      </Menu>
    </Segment>
  );
};
