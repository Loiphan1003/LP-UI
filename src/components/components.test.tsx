import { describe, expect, it} from 'vitest'
import renderer from 'react-test-renderer'
import Greeting from './index';

describe('Greeting component', () => {
    it('Greeting component renders correctly', () => {
      const component = renderer.create(
        <Greeting text='Loi Phan'/>
      )
  
      const tree = component.toJSON()
  
      expect(tree).toMatchSnapshot()
    })
  
    it(' prop working', () => {
      const component = renderer.create(
        <Greeting text={'Universe'} />
      )
  
      const tree = component.toJSON()
  
      expect(tree).toMatchSnapshot()
    })
  })