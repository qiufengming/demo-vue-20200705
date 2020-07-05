// 暴露给用户使用，借此触发mutations中的方法，保存数据（可执行异步操作）


// 触发保存菜单栏的路径方法
export const savePath = ({ commit }, payload) => {
    commit('savePath', payload);
};
   
// 触发获取当前点击的数据源方法
export const saveCurrDbSource = ({ commit }, payload) => {
    commit('saveCurrDbSource', payload);
};
   
// 触发获取当前点击的元数据方法
export const saveCurrJobData = ({ commit }, payload) => {
    commit('saveCurrJobData', payload);
};
   
// 触发获取所有数据源方法
export const saveDbSource = ({ commit }, payload) => {
    commit('saveDbSource', payload);
};
   
// 触发保存搜索后选择单条元数据方法
export const saveSelectJobMeta = ({ commit }, payload) => {
    commit('saveSelectJobMeta', payload);
};
   
// 触发保存搜索专题数据方法
export const saveSpecialSubject = ({ commit }, payload) => {
    commit('saveSpecialSubject', payload);
};
   
// 触发保存复制元数据方法
export const saveDuplicateJobMeta = ({ commit }, payload) => {
    commit('saveDuplicateJobMeta', payload);
};


/*
// 方法一： 通过context上下文用来触发事件
export const saveDbSource = (context, payload) => {
    context.commit('saveDbSource', payload);
};
  
// 方法二：通过 commit 触发事件
export const saveDbSource = ({ commit }, payload) => {
   commit('saveDbSource', payload);
};
*/
