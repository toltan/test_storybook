import React, { useState, useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const IndexMenu: React.FC = () => {
  const [startDate, setStartDate] = useState(null);
  const [strD, setStrD] = useState("日付を選択してください");
  const [sql, setSql] = useState("");

  const updateD = useCallback(
    (e) => {
      console.dir(e);
      setStartDate(e);
      const dateString = `${e.getFullYear()}/${
        e.getMonth() + 1
      }/${e.getDate()}`;
      setStrD(dateString);
    },
    [setStartDate],
  );

  const changeOtherDate = useCallback(() => {
    console.log("jfjdkjakj");
    setStrD("fjkdjfksajfkdaj");
  }, [setStrD]);

  const createSQL = useCallback(() => {
    const list: Array<string> = [];
    for (let i = 0; i < 70; i++) {
      list.push(
        `'${i + 1}e00', 'テスト', '太郎${
          i + 1
        }', 1, 1, '20210101', 1, '20210101', 1, '20210101', 1, '20210101', 1`,
      );
    }
    const sql = `
    INSERT INTO [dbo][003_学生管理] (
      [学籍番号],
      [氏名（姓）],
      [氏名（名）],
      [GWSアカウント作成対象区分],
      [GWSアカウント更新対象区分],
      [停止グループ1メール送付日],
      [停止グループ1メール送付状態区分],
      [停止グループ2メール送付日],
      [停止グループ2メール送付状態区分],
      [GWSアカウント停止予定日],
      [GWSアカウント停止対象区分],
      [GWSアカウント削除予定日],
      [GWSアカウント削除対象区分]
    )
    VALUES (
      ${list.join("\n")}
    )`;
    setSql(sql);
  }, []);

  return (
    <div>
      <h1>Index Menu</h1>
      <DatePicker
        selected={startDate}
        onChange={updateD}
        customInput={<button>{strD}</button>}
      />
      <button onClick={changeOtherDate}>{strD}</button>
      <button onClick={createSQL}>set sql</button>
      <pre>{sql}</pre>
    </div>
  );
};

export default IndexMenu;
