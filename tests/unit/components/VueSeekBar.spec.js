import { shallowMount } from '@vue/test-utils'
import VueSeekBar from '@/components/VueSeekBar.vue'

const mockProps = {
  color: '#42b983',
  opacity: '0.8',
  height: '5',
}

describe('VueSeekBar.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(VueSeekBar, { props: mockProps })
    expect(wrapper).toMatchSnapshot()
  })
})
