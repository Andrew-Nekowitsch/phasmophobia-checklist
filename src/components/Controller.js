import React from "react";
import FaIcon from "./Icon";
import IconButton from "@material-ui/core/IconButton";

export default function Controls() {
  const [state, setState] = React.useState({
    found: false,
    notfound: false,
  });

  const handleCheckmark = () => {
    setState({ ...state, notfound: false });
    setState({ ...state, found: true });
};
  const handleXmark = () => {
      setState({ ...state, found: false });
      setState({ ...state, notfound: true });
  };

  return (
    <div>
      <IconButton onClick={() => handleCheckmark()} style={{padding: '0px'}}>
        <FaIcon name="fas fa-check" />
      </IconButton>
      <IconButton onClick={() => handleXmark()}>
        <FaIcon name="fas fa-times" />
      </IconButton>
    </div>
  );
}
