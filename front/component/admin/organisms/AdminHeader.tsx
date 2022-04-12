import React, { memo } from "react";

import Button from "@/component/common/molecules/Button";

interface AdminHeaderInterface {
  updateFlag: React.MouseEventHandler<HTMLButtonElement>;
}

const AdminHeader: React.FC<AdminHeaderInterface> = memo(({ updateFlag }) => {
  return (
    <header>
      <h2>タイトル</h2>
      <Button
        divClass=""
        labelClass=""
        labelText=""
        buttonEvent={updateFlag}
        buttonText="更新"
      />
    </header>
  );
});

AdminHeader.displayName = "AdminHeader";

export default AdminHeader;
