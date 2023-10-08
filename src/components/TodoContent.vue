<template>
  <section class="main">
    <input
      type="checkbox"
      class="toggle-all"
      id="toggle-all"
      v-model="toggleAll"
    />
    <label for="toggle-all" v-show="left > 0"> 反转所有事项的完成情况 </label>
    <ul class="list">
      <li
        v-for="(item, index) in todoData"
        :key="item.id"
        :class="{ completed: item.completed }"
      >
        <div class="view">
          <input
            type="checkbox"
            class="toggle"
            v-model="item.completed"
            @click="changeState(index)"
          />
          <label>{{ item.title }}</label>
          <button class="destroy" @click="del(item.id)">X</button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    todoData: Array,
    left: Number,
  },
  methods: {
    del(id) {
      this.$emit("delData", id);
      // this.todoData = this.todoData.filter((item) => item.id != id);
    },
    changeState(index) {
      //改变当前id的事项状态
      this.$emit("changeState", index);
      // this.todoData[index].completed = !this.todoData[index].completed;
    },
  },
  computed: {
    toggleAll: {
      get() {
        if (this.todoData.length === 0) return false; //如果当前没有事项就不显示
        //箭头根据当下未完成事项的数量点亮
        return this.left === 0;
      },
      set(value) {
        //根据当前计算属性的值渲染所有事项状态
        this.todoData.forEach((item) => (item.completed = value));
      },
    },
  },
};
</script>

<style scoped>
.main {
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
}

.toggle-all {
  width: 1px;
  height: 1px;
  opacity: 0;
  position: absolute;
  bottom: 100%;
  right: 100%;
}

.toggle-all:checked + label:before {
  transition: color 0.4s;
  color: #737373;
}

.toggle-all + label {
  width: 34px;
  height: 60px;
  font-size: 0;
  position: absolute;
  left: 0;
  top: -66px;
}

.toggle-all + label::before {
  content: "❯";
  font-size: 22px;
  color: #e6e6e6;
  position: absolute;
  left: 70%;
  top: 40%;
  transform: rotate(90deg);
}

.list li {
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
}

.list .toggle {
  text-align: center;
  margin: auto 0;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  border: none;
  opacity: 0;
  appearance: none;
}

.list li label {
  display: block;
  padding: 15px 15px 15px 60px;
  line-height: 1.2;
  word-break: break-all;
  transition: color 0.4s;
}

.list li .toggle + label {
  background-image: url(../image/icon_gk8jm4im6sp/weixuanzhong.png);
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 7%;
  transition: all 0.4s;
}

.list li .toggle:checked + label {
  background-image: url(../image/icon_gk8jm4im6sp/xuanzhong.png);
  background-repeat: no-repeat;
  background-position: 3px center;
  background-size: 10%;
}

.list li.completed label {
  color: #d9d9d9;
  text-decoration: line-through;
}

.list li .destroy {
  display: none;
  position: absolute;
  margin: auto 0;
  top: 0;
  bottom: 0;
  right: 10px;
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  appearance: none;
  border: 0;
  background: none;
  cursor: pointer;
}

.list li:hover .destroy {
  display: block;
}

.list li .destroy:hover {
  transition: all 0.4s;
  color: brown;
}

.list li.editing {
  border-bottom: none;
  padding: 0;
}

.list li.editing .edit {
  display: block;
  width: 506px;
  padding: 12px 16px;
  margin: 0 0 0 43px;
  font-size: 24px;
  line-height: 1.2;
  box-shadow: inset 0 0px 10px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid black;
}

.list li.editing .view {
  display: none;
}
</style>