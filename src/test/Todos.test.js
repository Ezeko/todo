import React from 'react'
import {shallow} from 'enzyme'
import Todos from '../Todos'


describe('Todos Component', ()=>{
    it('it should contain todos', ()=>{
        const Input = shallow(<Todos todos='this.state.todos' />)
        expect(Input.find('Todos.div.h1')).toBeTruthy()
    })

    it('it should contain form tag in its rendered field', ()=>{
        const Input = shallow(<Todos />)
        expect(Input.find('Input.form')).toBeTruthy()
    })
})