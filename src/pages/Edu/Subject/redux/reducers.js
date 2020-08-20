import {
  GET_SUBJECT_LIST,
  GET_SEC_SUBJECT_LIST,
  GET_UPDATE_SUBJECT_LIST,
  GET_REMOVE_SUBJECT_LIST,
} from "./constants";

const initSubjectList = {
  total: 0, // 总数
  items: [], // 课程分类数据
};

export default function subjectList(prevState = initSubjectList, action) {
  switch (action.type) {
    case GET_SUBJECT_LIST:
      // action.data
      /**
       * {
       *  total: 0,
       *  items: [{
       *     _id: xxx,
       *     title: yyy,
       *     parentId: 0
       *     children:[]  如果数据中有children属性,并且值是数组.那么table组件就会自动给每一行添加一个可展开按钮
       *  }]
       * }
       */
      // console.log(action.data)
      action.data.items.forEach((item) => {
        item.children = [];
      });

      return action.data;

    case GET_SEC_SUBJECT_LIST:
      // 修改数据,添加到redux中
      // action.data可以获取到对应的一级课程分类的所有二级课程分类
      // console.log(action.data)
      // action.data返回的是对象. total和items. items使我们要用的二级课程数据
      const SecItems = action.data.items;
      // console.log(SecItems)
      // 二级课程分类数据,应该添加到对应的一级课程的children属性里面
      // prevState.items 是所有一级课程分类数据
      // items[0].parentId 是对应的一级课程分类的id
      const FisItems = prevState.items;

      //遍历所有一级课程分类

      SecItems.length &&
        FisItems.forEach((item) => {
          if (item._id === SecItems[0].parentId) {
            // 找到指定的一级课程分类
            item.children = SecItems;
          }
        });
      // if (SecItems.length) {
      //   FisItems.forEach(item => {
      //     if (item._id === SecItems[0].parentId) {
      //       // 找到指定的一级课程分类
      //       item.children = SecItems
      //     }
      //   })
      // }

      return {
        ...prevState,
        items: FisItems,
      };
    case GET_UPDATE_SUBJECT_LIST:
      prevState.items.forEach((item) => {
        if (item._id === action.data.id) {
          item.title = action.data.title;
          return;
        }
        item.children.forEach((secItem) => {
          if (secItem._id === action.data.id) {
            secItem.title = action.data.title;
            return;
          }
        });
      });
      return { ...prevState };
    case GET_REMOVE_SUBJECT_LIST:
      const FisState = prevState;
      FisState.items.forEach((item, index) => {
        if (item._id === action.data.id) {
          FisState.items.splice(index, 1);
          return;
        }
        item.children.forEach((child, index) => {
          if (child._id === action.data.id) {
            item.children.splice(index, 1);
            return;
          }
        });

        return { FisState };
      });
    default:
      return prevState;
  }
}
