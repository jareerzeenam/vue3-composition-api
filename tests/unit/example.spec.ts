import {nextTick} from 'vue'
import {mount} from '@vue/test-utils'
import Timeline from '../../src/components/Timeline.vue'
import {today, thisWeek, thisMonth, thisYear} from '../../src/mocks'

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

  // Click This Week
  it('It updates when the period is clicked', async() => {
    const wrapper = mount(Timeline)

    wrapper.get('[data-test="This Week"]').trigger('click') //nextTick
    // wrapper.find('[data-test="This Week"]').trigger('click')
    
    // wait for the next frame
    await nextTick()

    // console.log(wrapper.html());
    expect(wrapper.html()).toContain(today.created.format('Do MMM YYYY'))
    expect(wrapper.html()).toContain(thisWeek.created.format('Do MMM YYYY'))
  })

  // Click This Month
  it('It updates when `This Month` is clicked', async() => {
    const wrapper = mount(Timeline)

    await wrapper.get('[data-test="This Month"]').trigger('click') //nextTick

    // console.log(wrapper.html());
    expect(wrapper.html()).toContain(today.created.format('Do MMM YYYY'))
    expect(wrapper.html()).toContain(thisWeek.created.format('Do MMM YYYY'))
    expect(wrapper.html()).toContain(thisMonth.created.format('Do MMM YYYY'))
  })

  // Click This Year
  it.only('It updates when `This Month` is clicked', async() => {
    const wrapper = mount(Timeline)

    await wrapper.get('[data-test="This Year"]').trigger('click') //nextTick

    // console.log(wrapper.html());
    expect(wrapper.html()).toContain(today.created.format('Do MMM YYYY'))
    expect(wrapper.html()).toContain(thisWeek.created.format('Do MMM YYYY'))
    expect(wrapper.html()).toContain(thisMonth.created.format('Do MMM YYYY'))
    expect(wrapper.html()).toContain(thisYear.created.format('Do MMM YYYY'))
  })
})