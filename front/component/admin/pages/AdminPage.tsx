import React, { useState, useCallback, useReducer } from "react";
import axios from "axios";

import AdminTemplate, {
  AdminTemplateChildren,
} from "../templates/AdminTemplate";
import AdminHeader from "../organisms/AdminHeader";
import AdminSearchForm from "@/component/admin/organisms/AdminSearchForm";
import AdminTable from "../organisms/AdminTable";
import CommonFooter from "@/component/common/organisms/CommonFooter";
import useUtility from "@/hooks/useUtility";
import useAxios from "@/hooks/useAxios";

import { adminReducer, adminState } from "@/store/admin/adminStore";
import * as actions from "@/store/admin/adminAction";

import AffiliationModel, {
  AffiliationInterface,
} from "@/model/AffiliationModel";

const AdminPage: React.FC = () => {
  const [util] = useUtility();
  const [ax] = useAxios();
  const [reducer, dispatch] = useReducer(adminReducer, adminState);
  // 検索フォーム
  const [code, setCode] = useState("");
  const [recode, setRecode] = useState("");
  const updateCode = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const target = e.currentTarget;
      const val: string = target.value;
      const name: string = target.name;
      if (name == "code") {
        setCode(val);
      } else if (name == "recode") {
        setRecode(val);
      }
    },
    [setCode],
  );
  const searchCode = useCallback(async (): Promise<void> => {
    if (!code) {
      // alert("naiyo");
      // return;
    }
    const url = "/";
    // await axios
    //   .get(url, {})
    //   .then((res) => {
    //     console.log(res);
    //     const resList = res.data["list"];
    //     const newList: Array<AffiliationModel> = [];
    //     resList.forEach((res: AffiliationInterface) => {
    //       const aModel: AffiliationModel = new AffiliationModel(res);
    //       newList.push(aModel);
    //     });
    //     dispatch({ type: AdminAction.NewList, payload: newList });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     ax.axiosErrorHandling(err);
    //   });

    const a: AffiliationInterface = {
      afCode: "afCode",
      afName: "afName",
      hiCode1: "hiCode1",
      hiName1: "hiName1",
      hiCode2: "hiCode2",
      hiName2: "hiName2",
      hiCode3: "hiCode3",
      hiName3: "hiName3",
      hiCode4: "hiCode4",
      hiName4: "hiName4",
      hiFlag4: true,
      hiCode5: "hiCode5",
      hiName5: "hiName5",
      hiFlag5: false,
    };
    const fff = new AffiliationModel(a);
    const b: AffiliationInterface = {
      afCode: "2afCode",
      afName: "2afName",
      hiCode1: "2hiCode1",
      hiName1: "2hiName1",
      hiCode2: "2hiCode2",
      hiName2: "2hiName2",
      hiCode3: "2hiCode3",
      hiName3: "2hiName3",
      hiCode4: "2hiCode4",
      hiName4: "2hiName4",
      hiFlag4: false,
      hiCode5: "2hiCode5",
      hiName5: "2hiName5",
      hiFlag5: false,
    };
    const ccc = new AffiliationModel(b);
    const newList = [fff, ccc];
    dispatch(actions.updateNewList(newList));
  }, [code, dispatch]);
  const search: JSX.Element = (
    <AdminSearchForm
      code={code}
      record={recode}
      updateCode={updateCode}
      searchCode={searchCode}
    ></AdminSearchForm>
  );
  // ヘッダー
  const updateFlag = useCallback(async (): Promise<void> => {
    const url = "/api/admin/";
    axios
      .put(url, {}, ax.getAxiosHeader())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        ax.axiosErrorHandling(err);
      });
  }, [ax]);
  const header: JSX.Element = (
    <AdminHeader updateFlag={updateFlag}></AdminHeader>
  );
  // テーブル
  const tableChangeEvent = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const target = e.currentTarget;
      const index = util.convertStringToInt(target.dataset.index);
      const selectModel: AffiliationModel = {
        ...reducer.list[index],
        [target.name]: target.checked,
      };
      dispatch(actions.updateNewAffilication(selectModel, index));
    },
    [reducer, util, dispatch],
  );
  const table: JSX.Element = (
    <AdminTable list={reducer.list} event={tableChangeEvent}></AdminTable>
  );
  // フッター
  const footer: JSX.Element = <CommonFooter />;
  // テンプレート
  const domChildren: AdminTemplateChildren = {
    header: header,
    search: search,
    table: table,
    footer: footer,
  };
  return <AdminTemplate>{domChildren}</AdminTemplate>;
};

export default AdminPage;
