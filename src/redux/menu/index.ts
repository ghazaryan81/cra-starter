// =========================== Types =======================
export interface IDataItem {
 id: number;
 label: string;
 slug: string;
}

export interface IInitState {
 data: IDataItem[];
 load: boolean;
 error: string;
}

export interface IAction {
 type: string;
 payload?: { data: IDataItem[] } | { error: string };
}

// --------------------------- State -------------------------
export const initState: IInitState = { data: [], load: false, error: "" };

// -------------------------- Action Type --------------------
export const at = {
 read: {
  request: "request",
  success: "success",
  failure: "failure",
 },
};

// -------------------------- Reducer ------------------------
export function reducer(state: IInitState = initState, action: any) {
 const newState = { ...state };
 switch (action.type) {
  case at.read.request: { return newState; }
  case at.read.success: { newState.data = action.payload.data; return newState; }
  case at.read.failure: { newState.error = action.payload.error; return newState; }
  default: return newState;
 }
}

// -------------------------- Action Creator -----------------
export const readRequestAC = ()                  => ({ type: at.read.request });
export const readSuccessAC = (data: IDataItem[]) => ({ type: at.read.success, payload: { data: data } });
export const readFailureAC = (error: any)        => ({ type: at.read.failure, payload: { error: error } });

// -------------------------- Fetch --------------------------
export const fetching = async (dispatch: any) => {
 dispatch(readRequestAC());
 let response;
 try {
  response = await fetch("http://localhost:4002/menu");
 } catch (error: any) {
  dispatch(readFailureAC(error));
 }
 if (response?.ok) {
  dispatch(readSuccessAC(await response.json()));
 } else {
  dispatch(readFailureAC(response?.status));
 }
};
