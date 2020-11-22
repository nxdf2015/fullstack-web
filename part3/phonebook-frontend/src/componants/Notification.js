import React, { useEffect, useState } from "react";
const Notification = (props) => {
    
  const [visible, setVisible] = useState(props.visible);
  useEffect(() => {
    setVisible(true);
  }, [props.id]);

  setTimeout(() => {
   
    setVisible(false)}, 2000);
  if (!visible) return null;
  return (
    visible && (
      <div className={`notification ${props.type }`}>
        {props.message}
      </div>
    )
  );
};
export default Notification;
