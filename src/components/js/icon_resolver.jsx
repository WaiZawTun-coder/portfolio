import React from "react";

import * as Icons from "@mui/icons-material";

const IconResolver = ({ iconName, ...props }) => {
  const IconComponent = Icons[iconName];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent {...props} className={props.className} />;
};

export default IconResolver;
