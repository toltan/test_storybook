import AffiliationModel from "@/model/AffiliationModel";

export interface AdminActionType {
  type: string;
  payload?: AffiliationModel | Array<AffiliationModel>;
  index?: number;
}
export const AdminKey = {
  NewList: "newList",
  Update: "update",
} as const;
// type AdminKey = typeof AdminKey[keyof typeof AdminKey];

export const updateNewList = (
  list: Array<AffiliationModel>,
): AdminActionType => {
  return {
    type: AdminKey.NewList,
    payload: list,
  };
};
export const updateNewAffilication = (
  af: AffiliationModel,
  index: number,
): AdminActionType => {
  return {
    type: AdminKey.Update,
    index: index,
    payload: af,
  };
};
