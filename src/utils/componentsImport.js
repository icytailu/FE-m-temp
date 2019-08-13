import Vue from "vue";

const requireComponent = require.context(
  "../components/",
  true,
  /^.*\.vue$/
  // 找到components文件夹下以.vue命名的文件
);
export default requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  if (fileName.endsWith(".vue")) {
    //  + 1 代表不包过当前的  /
    const beginSlice = fileName.lastIndexOf("/") + 1;
    const endSlice = fileName.lastIndexOf(".vue");
    const componentName = fileName.slice(beginSlice, endSlice);
    Vue.component(componentName, componentConfig.default || componentConfig);
  }
});
