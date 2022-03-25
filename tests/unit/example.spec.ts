import {nextTick} from 'vue'
import {mount} from '@vue/test-utils'
import Timeline from '../../src/components/Timeline.vue'
import {today, thisWeek} from '../../src/mocks'

describe('Timeline',()=>{

  /*
    TO RUN A SPECIFIC TEST
    ADD it.only() 
   */


  it('renders todays post by default',() => {
    const wrapper = mount(Timeline)

    console.log(wrapper.html());
    expect(wrapper.html()).toContain(today.created.format('Do MMM YYYY'))
  })

  it.only('It updates when the period is clicked', async() => {
    const wrapper = mount(Timeline)

    // ! ERROR
    wrapper.find('[data-test="This Week"]').trigger('click')
    
    await nextTick()

    // console.log(wrapper.html());
    expect(wrapper.html()).toContain(today.created.format('Do MMM YYYY'))
    expect(wrapper.html()).toContain(thisWeek.created.format('Do MMM YYYY'))
  })
})