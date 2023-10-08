<template>
  <header class="header">
    <h1>TODO</h1>
    <input
      class="new-todo"
      type="text"
      placeholder="Plan to do something?"
      v-focus
      v-model.trim="todo"
      @keyup.enter="add"
      @blur="add"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    add() {
      if (this.todo != "") {
        //输入非空
        const obj = {
          id: +new Date(),
          title: this.todo,
          completed: false,
        };
        //子传父修改数据
        this.$emit("addData", obj);
        // this.todoData.unshift(obj);
        //清空输入框
        this.todo = "";
      }
    },
  },
};
</script>

<style scoped>
.header h1 {
  position: absolute;
  top: -70px;
  width: 100%;
  text-align: center;
  font-size: 100px;
  font-weight: 100;
  color: rgba(175, 47, 47, 0.15);
}

.new-todo {
  padding: 16px 16px 16px 60px;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  width: 100%;
  font-size: 24px;
  line-height: 1.4em;
}

.new-todo::placeholder {
  color: #e6e6e6;
}
</style>