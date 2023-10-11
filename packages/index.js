import tButton from "./button/index.js";
import tInput from "./input/index.js";
import tIcon from "./icon/index.js";
import tLink from "./link/index.js";
import tText from "./text/index.js";
import tCheckbox from "./checkbox/index.js";
import tRadiogroup from "./radiogroup/index.js";
import tRadio from "./radio/index.js";
import tSwitch from "./switch/index.js";
import tAvatar from "./avatar/index.js";
import tCard from "./card/index.js";
const install = (app) => {
  app
    .use(tButton)
    .use(tInput)
    .use(tIcon)
    .use(tLink)
    .use(tText)
    .use(tCheckbox)
    .use(tRadiogroup)
    .use(tRadio)
    .use(tSwitch)
    .use(tAvatar)
    .use(tCard);
};
const TUI = {
  install,
};
export {
  tButton,
  tInput,
  tIcon,
  tLink,
  tText,
  tCheckbox,
  tRadiogroup,
  tRadio,
  tSwitch,
  tAvatar,
  tCard,
};
export default TUI;
