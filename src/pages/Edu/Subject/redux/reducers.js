import { GET_SUBJECT_LIST, GET_SecSUBJECT_LIST } from "./constants";

const init = {
  total: 0,
  items: [],
};

export default function subject(prevState = init, action) {
  switch (action.type) {
    case GET_SUBJECT_LIST:
      action.data.items.forEach((item) => (item.children = []));
      return action.data;
    case GET_SecSUBJECT_LIST:
      const FisItems = prevState.items;
      const SecItems = action.data.items;
      SecItems.length &&
        FisItems.forEach((item) => {
          if (item._id === SecItems[0].parentId) {
            item.children = SecItems;
          }
        });
      return {
        ...init,
        items: FisItems,
      };
    default:
      return prevState;
  }
}
