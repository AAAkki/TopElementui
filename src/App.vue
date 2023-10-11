<script setup>
import { ref } from "vue";
const val = ref("");
const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
</script>

<template>
  <div class="ui">
    <div class="tbutton">
      <t-button>Default</t-button>
      <t-button type="primary">Primary</t-button>
      <t-button type="success">Success</t-button>
      <t-button type="info">Info</t-button>
      <t-button type="warning">Warning</t-button>
      <t-button type="danger">Danger</t-button>
      <t-button plain>Plain</t-button>
      <t-button type="primary" plain>Primary</t-button>
      <t-button type="success" plain>Success</t-button>
      <t-button type="info" plain>Info</t-button>
      <t-button type="warning" plain>Warning</t-button>
      <t-button type="danger" plain>Danger</t-button>
      <t-button round>Default</t-button>
      <t-button type="primary" round>Primary</t-button>
      <t-button type="success" round>Success</t-button>
      <t-button type="info" round>Info</t-button>
      <t-button type="warning" round>Warning</t-button>
      <t-button type="danger" round>Danger</t-button>
      <t-button disabled>Default</t-button>
      <t-button type="primary" disabled>Primary</t-button>
      <t-button type="success" disabled>Success</t-button>
      <t-button type="info" disabled>Info</t-button>
      <t-button type="warning" disabled>Warning</t-button>
      <t-button type="danger" disabled>Danger</t-button>
      <t-button text>Default</t-button>
      <t-button type="primary" text>Primary</t-button>
      <t-button type="success" text>Success</t-button>
      <t-button type="info" text>Info</t-button>
      <t-button type="warning" text>Warning</t-button>
      <t-button type="danger" text>Danger</t-button>
      <t-button size="large">Default</t-button>
      <t-button type="primary" size="large">Primary</t-button>
      <t-button type="success" size="large">Success</t-button>
      <t-button type="info" size="large">Info</t-button>
      <t-button type="warning" size="large">Warning</t-button>
      <t-button type="danger" size="large">Danger</t-button>
      <t-button size="size">Default</t-button>
      <t-button type="primary" size="size">Primary</t-button>
      <t-button type="success" size="size">Success</t-button>
      <t-button type="info" size="size">Info</t-button>
      <t-button type="warning" size="size">Warning</t-button>
      <t-button type="danger" size="size">Danger</t-button>
    </div>
    <div class="tinput">
      <t-input v-model="val" placeholder="请输入...."></t-input>
      <t-input v-model="val" placeholder="请输入...." disabled></t-input>
      <t-input v-model="val" placeholder="请输入...." showPassword></t-input>
      <t-input v-model="val" placeholder="请输入...." showTextarea></t-input>
      <t-input v-model="val" placeholder="请输入...." size="large"></t-input>
      <t-input v-model="val" placeholder="请输入...." size="small"></t-input>
    </div>
    <div class="ticon">
      <t-icon type="kejian"></t-icon>
      <t-icon type="jianshao"></t-icon>
      <t-icon type="xiazai"></t-icon>
      <t-icon type="jiangxu"></t-icon>
      <t-icon type="pinglun"></t-icon>
      <t-icon type="jiesuo"></t-icon>
      <t-icon type="suo"></t-icon>
      <t-icon type="shijian"></t-icon>
      <t-icon type="qiehuan"></t-icon>
      <t-icon type="saomiao"></t-icon>
      <t-icon type="dingwei"></t-icon>
      <t-icon type="fasong"></t-icon>
      <t-icon type="tixing"></t-icon>
      <t-icon type="youjian"></t-icon>
      <t-icon type="guanbi"></t-icon>
      <t-icon type="kefu"></t-icon>
      <t-icon type="bofang"></t-icon>
    </div>
    <div class="tlink">
      <t-link href="https://www.bilibili.com/" target="_blank">Default</t-link>
      <t-link type="primary">Primary</t-link>
      <t-link type="success">Success</t-link>
      <t-link type="info">Info</t-link>
      <t-link type="warning">Warning</t-link>
      <t-link type="danger">Danger</t-link>
      <t-link href="https://www.bilibili.com/" target="_blank" disabled
        >Default</t-link
      >
      <t-link type="primary" disabled>Primary</t-link>
      <t-link type="success" disabled>Success</t-link>
      <t-link type="info" disabled>Info</t-link>
      <t-link type="warning" disabled>Warning</t-link>
      <t-link type="danger" disabled>Danger</t-link>
      <t-link notUnderline>Without Underline</t-link>
      <t-link>With Underline</t-link>
    </div>
    <div class="ttext">
      <t-text>Default</t-text>
      <t-text type="primary">Primary</t-text>
      <t-text type="success">Success</t-text>
      <t-text type="info">Info</t-text>
      <t-text type="warning">Warning</t-text>
      <t-text type="danger">Danger</t-text>
      <t-text size="large">Default</t-text>
      <t-text size="small">Default</t-text>
      <t-text truncated>Default Default Default</t-text>
    </div>
    <div class="tcheckbox">
      <t-checkbox :checked="checked1" label="Option 1"></t-checkbox>
      <t-checkbox :checked="checked2" label="Option 2"></t-checkbox
      ><t-checkbox :checked="checked3" label="Option 3"></t-checkbox>
      <t-checkbox :checked="checked4" label="Option 4"></t-checkbox>
      <t-checkbox
        :checked="checked1"
        label="Option 5"
        size="large"
      ></t-checkbox>
      <t-checkbox
        :checked="checked2"
        label="Option 6"
        size="small"
      ></t-checkbox>
      <t-checkbox :checked="checked1" label="Option 7" disabled></t-checkbox>
    </div>
    <div class="tradio">
      <t-radio-group
        ><t-radio label="1" checked>Option 1</t-radio>
        <t-radio label="2">Option 2</t-radio>
      </t-radio-group>
      <t-radio-group
        ><t-radio label="3" checked size="large">Option 3</t-radio>
        <t-radio label="4" size="large">Option 4</t-radio>
      </t-radio-group>
      <t-radio-group
        ><t-radio label="5" checked size="small">Option 5</t-radio>
        <t-radio label="6" size="small">Option 6</t-radio>
      </t-radio-group>
      <t-radio-group
        ><t-radio label="1" checked disabled>Option 1</t-radio>
        <t-radio label="2" disabled>Option 2</t-radio>
      </t-radio-group>
      <t-radio-group
        ><t-radio label="8" checked border>Option 1</t-radio>
        <t-radio label="9" border>Option 2</t-radio>
      </t-radio-group>
    </div>
    <div class="tswitch">
      <t-switch oncolor="#ff4949" offcolor="#13ce66"></t-switch>
      <t-switch></t-switch>
      <t-switch disabled></t-switch>
      <t-switch activeText="Open" inactiveText="Close" size="large"></t-switch>
      <t-switch activeText="Open" inactiveText="Close"></t-switch>
      <t-switch activeText="Open" inactiveText="Close" size="small"></t-switch>
    </div>
    <div class="tavatar">
      <t-avatar
        size="50"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        state="fill"
      ></t-avatar>
      <t-avatar
        size="30"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      ></t-avatar>
      <t-avatar
        size="80"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      ></t-avatar>
      <t-avatar
        size="50"
        src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
      ></t-avatar>
      <t-avatar
        size="30"
        src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
      ></t-avatar>
      <t-avatar
        size="80"
        src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
      ></t-avatar>

      <div class="tavatar-fit">
        <t-avatar
          size="80"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          state="fill"
        ></t-avatar>
      </div>
      <div class="tavatar-fit">
        <t-avatar
          size="80"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          state="contain"
        ></t-avatar>
      </div>
      <div class="tavatar-fit">
        <t-avatar
          size="80"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          state="cover"
        ></t-avatar>
      </div>
      <div class="tavatar-fit">
        <t-avatar
          size="80"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          state="none"
        ></t-avatar>
      </div>
      <div class="tavatar-fit">
        <t-avatar
          size="80"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          state="scale-down"
        ></t-avatar>
      </div>
    </div>
    <div class="tcard">
      <t-card>
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <t-button class="button" text>Operation button</t-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "List item " + o }}
        </div>
      </t-card>
      <t-card>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "List item " + o }}
        </div>
      </t-card>
      <t-card class="box">
        <div>Always</div>
      </t-card>
      <t-card class="box" shadow="hover">
        <div>Hover</div>
      </t-card>
      <t-card class="box" shadow="never">
        <div>Never</div>
      </t-card>
    </div>
  </div>
</template>

<style lang="scss">
body,
html {
  user-select: none;
  
}
.ui > div {
  margin-top: 20px;
}
.tbutton {
  display: grid;
  grid-template-columns: repeat(6, 80px);
  grid-gap: 20px;
  .t-button {
    margin: auto;
  }
}
.tinput {
  display: grid;
  row-gap: 20px;
}
.ticon {
  display: grid;
  grid-template-columns: repeat(6, 80px);

  .t-icon {
    border: 1px solid #dde0e7;
    margin: 0 -1px -1px 0;
    padding: 20px;
  }
}
.tlink {
  display: grid;
  grid-template-columns: repeat(6, 100px);
  grid-gap: 20px;
  .t-link {
    margin: auto;
  }
}
.ttext {
  display: grid;
  grid-template-columns: repeat(6, 100px);
  grid-gap: 20px;
  .t-text {
    margin: auto;
  }
}
.tcheckbox,
.tradio {
  display: grid;
  grid-template-columns: repeat(2, 100px);
  grid-gap: 20px;
  .t-checkbox,
  .t-radio {
    margin: auto;
  }
}
.tswitch {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-gap: 20px;
  .t-switch {
    margin: auto;
  }
}
.tavatar {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-gap: 20px;
  &-fit {
    width: 80px;
    height: 80px;
    background-color: #c0c4cc;
  }
  .t-avatar {
    margin: auto;
  }
}
.tcard {
  .t-card {
    width: 498px;
    height: 320px;
    .card-header {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .item {
      margin: 14px 0;
      padding: 10px 20px;
      font-size: 16px;
    }
  }
  .box {
    width: 160px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 18px;
  }
}
</style>
