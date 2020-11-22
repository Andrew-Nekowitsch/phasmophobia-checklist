import React from 'react';
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';

export default function Icons(props) {

  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
  <div>
    <Icon className={props.name} />
  </div>
  );
}