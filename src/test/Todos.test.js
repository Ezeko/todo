import React from 'react'
import {shallow} from 'enzyme'
import Todos from '../Todos'


describe('Todos Component', ()=>{
    it('it should contain todos', ()=>{
        const Input = shallow(<Todos todos={[]} />)
        expect(Input.find('Todos.div.h1')).toBeTruthy()
    })
})