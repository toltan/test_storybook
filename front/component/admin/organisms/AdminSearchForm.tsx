import React, { memo } from "react";

import Input from "@/component/common/molecules/Input";
import Button from "@/component/common/molecules/Button";

interface AdminSearchInterface {
  code: string;
  record: string;
  updateCode: React.ChangeEventHandler<HTMLInputElement>;
  searchCode: React.MouseEventHandler<HTMLButtonElement>;
}

const AdminSearchForm: React.FC<AdminSearchInterface> = memo(
  ({ code, record, updateCode, searchCode }) => {
    return (
      <div className="content">
        <Input
          divClass=""
          inputValue={code}
          inputEvent={updateCode}
          name="code"
          labelClass=""
          labelText="コード(前方一致)"
        />
        <Input
          divClass=""
          inputValue={record}
          inputEvent={updateCode}
          name="recode"
          labelClass=""
          labelText="コード(前方一致)"
        />
        <Button
          divClass=""
          labelClass=""
          labelText=""
          buttonEvent={searchCode}
          buttonText="検索"
        />
      </div>
    );
  },
);

AdminSearchForm.displayName = "AdminSearchForm";

export default AdminSearchForm;
