<template>
<nav class="is-primary panel">
  <span class="panel-tabs">
    <a 
    v-for="period in periods" 
    :key="period"
    :class="{'is-active':period === currentPeriod}"
    @click="setPeriod(period)"
    >
      {{ period }}
    </a>
  </span>

  {{ currentPeriod }}

  <a 
  v-for="post in posts"
  :key="post.id"
  class="panel-block"
  >
  <a>{{ post.title }}</a>
  <div>&nbsp;{{post.created.format('Do MMM YYYY')}}</div>
  </a>
</nav>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import moment from 'moment';
import { today, thisWeek, thisMonth, thisYear} from '../mocks'

type Period = 'Today' | 'This Week' | 'This Month' | 'This Year'

export default defineComponent({
  name: "Timeline",

  setup(){
    const periods = ['Today','This Week', 'This Month', 'This Year']
    const currentPeriod = ref<Period>('Today')
    const posts = computed(()=>{
      return [today, thisWeek, thisMonth, thisYear].filter(post => {
        // return post.title.match('This Month') 
        if (currentPeriod.value === 'Today') {
          return post.created.isAfter(moment().subtract(1,'day'))
        }

        if (currentPeriod.value === 'This Week') {
          return post.created.isAfter(moment().subtract(1,'week'))
        }

        if (currentPeriod.value === 'This Month') {
          return post.created.isAfter(moment().subtract(1,'month'))
        }
        
        if (currentPeriod.value === 'This Year') {
          return post.created.isAfter(moment().subtract(1,'year'))
        }
      
        return false
      })
    })
   
    const setPeriod = (period:Period)=>{
      currentPeriod.value = period
    }

    return{
      posts,
      periods,
      setPeriod,
      currentPeriod,
    }
  }

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
