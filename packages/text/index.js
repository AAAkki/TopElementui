import tText from "./index.vue";
tText.install = (app) => {
  app.component(tText.name, tText);
};
export default tText;
