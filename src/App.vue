<template>
  <div>
    <div id="todoapp">
      <TodoHeader @addData="todoData.unshift($event)"></TodoHeader>
      <router-view
        :baseData="todoData"
        @delData="handleDel"
        @changeState="handleChange"
        :left="left"
      ></router-view>
      <TodoFooter
        :todoData="todoData"
        @clearCompleted="handleClear"
        :left="left"
      ></TodoFooter>
    </div>

    <MyFooter></MyFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
// import TodoContent from "./components/TodoContent.vue";
import TodoFooter from "./components/TodoFooter.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  components: {
    TodoHeader,
    // TodoContent,
    TodoFooter,
    MyFooter,
  },
  data() {
    return {
      todoData: JSON.parse(localStorage.getItem("todoDataForVue")) || [],
    };
  },
  computed: {
    left() {
      //计算未完成事项数量
      return this.todoData.reduce(
        (acc, cur) => acc + (cur.completed === false ? 1 : 0),
        0
      );
    },
  },
  methods: {
    // handleAdd(e) {
    //   console.log(e);
    // },
    handleDel(id) {
      this.todoData = this.todoData.filter((item) => item.id != id);
    },
    handleChange(index) {
      this.todoData[index].completed = !this.todoData[index].completed;
    },
    handleClear() {
      this.todoData = this.todoData.filter((item) => item.completed === false);
    },
  },
  watch: {
    todoData: {
      deep: true,
      handler() {
        //检测数据变化进行本地存储
        localStorage.setItem("todoDataForVue", JSON.stringify(this.todoData));
      },
    },
  },
};
</script>

<style scoped>
#todoapp {
  margin-top: 130px;
  position: relative;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
</style>