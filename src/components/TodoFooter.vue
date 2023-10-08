<template>
  <footer class="footer" v-show="todoData.length > 0">
    <span class="todo-count">{{ left }} items left</span>
    <ul class="filters" @click="changeFilter">
      <li>
        <router-link to="/All" class="selected">All</router-link>
      </li>
      <li>
        <router-link to="/Active">Active</router-link>
      </li>
      <li>
        <router-link to="/Completed">Completed</router-link>
      </li>
    </ul>
    <button
      class="clear-completed"
      @click="clearCompleted"
      v-show="left != todoData.length"
    >
      Clear completed
    </button>
  </footer>
</template>

<script>
export default {
  props: {
    todoData: Array,
    left: Number,
  },
  methods: {
    clearCompleted() {
      this.$emit("clearCompleted");
    },
    changeFilter(e) {
      document
        .querySelector(".footer .filters .selected")
        .classList.remove("selected");
      e.target.classList.add("selected");
    },
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding: 10px 15px;
  color: #777;
  border-top: 1px solid #e6e6e6;
}

.footer::before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.footer .filters {
  display: flex;
}

.footer .filters li a {
  position: relative;
  margin: 3px;
  padding: 3px 7px;
  border: 1px solid transparent;
  border-radius: 3px;
  color: inherit;
  z-index: 1;
}

/* .footer .filters li a.router-link-active {
  border: 1px solid rgba(175, 47, 47, 0.2);
} */

.footer .filters li a.selected {
  border: 1px solid rgba(175, 47, 47, 0.2);
}

.footer .filters li a:hover {
  border: 1px solid rgba(175, 47, 47, 0.1);
}

.footer .clear-completed {
  background: none;
  border: none;
  color: inherit;
  z-index: 1;
}

.footer .clear-completed:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>