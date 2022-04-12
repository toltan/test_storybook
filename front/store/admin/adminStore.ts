import AffiliationModel from "@/model/AffiliationModel";
import * as actions from "@/store/admin/adminAction";

interface AdminState {
  list: Array<AffiliationModel>;
}
const adminState: AdminState = {
  list: [],
};
const adminReducer = (
  state: AdminState,
  action: actions.AdminActionType,
): any => {
  switch (action.type) {
    case actions.AdminKey.NewList:
      return { ...state, list: action.payload };
    case actions.AdminKey.Update:
      return {
        ...state,
        list: state.list.map((v: AffiliationModel, i: number) =>
          i === action.index ? action.payload : v,
        ),
      };
    default:
      return state;
  }
};

export { adminReducer, adminState };
