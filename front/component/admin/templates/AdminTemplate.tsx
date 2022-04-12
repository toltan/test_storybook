import React, { memo } from "react";

interface AdminTemplateProps {
  children: {
    header?: JSX.Element;
    search?: JSX.Element;
    table?: JSX.Element;
    footer?: JSX.Element;
  };
}

export interface AdminTemplateChildren {
  header?: JSX.Element;
  search?: JSX.Element;
  table?: JSX.Element;
  footer?: JSX.Element;
}

const AdminTemplate: React.FC<AdminTemplateProps> = memo(({ children }) => {
  console.log("templates");
  return (
    <>
      {children.header}
      {children.search}
      {children.table}
      {children.footer}
    </>
  );
});

AdminTemplate.displayName = "AdminTemplate";

export default AdminTemplate;
