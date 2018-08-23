<template>
  <div class="app container">
      <AppInput v-model="input" plcHolder="Add task"/>
      <button @click="addTodo">Prideti</button> // tas pats kaip ir v-on:click="addTodo()"
      <ul>
          <li v-for="(task, index) in todo" v-bind:key="index">
              <s v-if="task.done">{{task.value}}</s>
              <template v-else>{{task.value}}</template>
              <button @click="setTaskDone(index)">X</button>
          </li>
      </ul>

      <div class="add_new_card">
          <AppInput v-model="newSrc" plcHolder="Add link"/>
          <AppInput v-model="newTitle" plcHolder="Add title"/>
          <AppButton @click.native="addNewCard">Sukurti</AppButton>
      </div>

      <div class="card-container" v-for="(card, index) in cards" :key="index">
          <AppCard :img-src="card.newSrc" :title="card.newTitle"/>
      </div>

      <!-- <div class="card-container">
          <AppCard img-src="https://pbs.twimg.com/profile_images/794708906094317572/Bb8lpZ2t_400x400.jpg" title="TJ"/>
      </div> -->
    <test1 @bla="updateTitle($event)" :title="title"/>
    <test2 :title="title"/>

  </div>
</template>


<script>

import AppInput from './components/AppInput';
import AppCard from './components/AppCard';
import AppButton from './components/AppButton';
import test1 from './components/test1';
import test2 from './components/test2'

export default {
  components: {
    AppInput,
    AppCard,
    AppButton,
    test1,
    test2
  },
  data () {
      return {
          input: '',
          newSrc: '',
          newTitle: '',
          cards: [],
          todo: [],
          title: 'test title'
      }
  },
  methods: {
      addNewCard () {
          if (this.newSrc.length > 2 && this.newTitle.length > 0) {
              this.cards.push({
                newSrc: this.newSrc,
                newTitle: this.newTitle
            });
            this.newSrc = '';
            this.newTitle = '';
          console.log(this.cards);
        } else {
            console.log('Insert image link and title');
        }
      },
      addTodo () {
          if (this.input.length > 1) {
              this.todo.push({
                  done: false,
                  value: this.input
                  });
              console.log(this.todo);
              this.input = '';
          } else {
              console.log('Add task')
          }
      },
      setTaskDone (i) {
          this.todo[i].done = true;
      },
      updateTitle (blabla) {
          this.title = blabla;
      }
  }
}

</script>

<style lang="scss" scoped>
    .app {
        padding-top: 50px;
    }
    .add_new_card {
        width: 400px;
        margin: 50px auto;
    }
    .card-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
