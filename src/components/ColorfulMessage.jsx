import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children, message } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return (
    <p style={contentStyle}>
      {children}
      {message}
    </p>
  );
};

// このファイルをexport するときはデフォルトではこれをexport する
// export default ColorfulMessage;
