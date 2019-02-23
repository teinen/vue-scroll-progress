import { shallowMount } from '@vue/test-utils'
import VueSeekBar from '@/components/VueSeekBar.vue'

const mockProps = {
  color: '#42b983',
  opacity: '0.8',
  height: '5',
}

describe('VueSeekBar.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(VueSeekBar, {
      propsData: mockProps,
    })
    expect(wrapper).toMatchSnapshot()
  })

  it('has correct color props', () => {
    const wrapper = shallowMount(VueSeekBar, {
      propsData: mockProps,
    })
    expect(wrapper.props().color).toBe('#42b983')
  })

  it('has correct opacity props', () => {
    const wrapper = shallowMount(VueSeekBar, {
      propsData: mockProps,
    })
    expect(wrapper.props().opacity).toBe('0.8')
  })

  it('has correct height props', () => {
    const wrapper = shallowMount(VueSeekBar, {
      propsData: mockProps,
    })
    expect(wrapper.props().height).toBe('5')
  })
})
