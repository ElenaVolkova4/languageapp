import React from 'react';

import './Button_actions.scss';

const ButtonEdit = props => {
  return (
    <div
      className="buttonEdit button_actions"
      onClick={props.onClick}
      title="редактировать"
    >
      &#128396;
    </div>
  );
};

export default ButtonEdit;
