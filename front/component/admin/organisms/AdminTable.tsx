import React, { memo } from "react";

import CheckBox from "@/component/common/molecules/CheckBox";
import AffiliationModel from "@/model/AffiliationModel";

interface AdminTableProps {
  list: Array<AffiliationModel>;
  event: React.ChangeEventHandler<HTMLInputElement>;
}

const AdminTable: React.FC<AdminTableProps> = memo(({ list, event }) => {
  return (
    <table className={list.length == 0 ? "divNone" : ""}>
      <thead>
        <tr>
          <th>所属コード</th>
          <th>所属名称</th>
          <th>階層コード1</th>
          <th>階層名1</th>
          <th>階層コード2</th>
          <th>階層名2</th>
          <th>階層コード3</th>
          <th>階層名3</th>
          <th>階層コード4</th>
          <th>階層名4</th>
          <th>階層コード5</th>
          <th>階層4集計</th>
          <th>階層5集計</th>
        </tr>
      </thead>
      <tbody>
        {list.map((a, i) => {
          return (
            <tr key={`table_${i}`}>
              <td>{a.afCode}</td>
              <td>{a.afName}</td>
              <td>{a.hiCode1}</td>
              <td>{a.hiName1}</td>
              <td>{a.hiCode2}</td>
              <td>{a.hiName2}</td>
              <td>{a.hiCode3}</td>
              <td>{a.hiName3}</td>
              <td>{a.hiCode4}</td>
              <td>{a.hiName4}</td>
              <td>{a.hiCode5}</td>
              <td>{a.hiName5}</td>
              <td>
                <CheckBox
                  checked={a.hiFlag4}
                  changeEvent={event}
                  divClass=""
                  index={i}
                  labelClass=""
                  labelText="第4階層"
                  name="hiFlag4"
                />
              </td>
              <td>
                <CheckBox
                  checked={a.hiFlag5}
                  changeEvent={event}
                  divClass=""
                  index={i}
                  labelClass=""
                  labelText="第5階層"
                  name="hiFlag5"
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
});

AdminTable.displayName = "AdminTable";

export default AdminTable;
