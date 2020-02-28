import React from 'react'
import {shallow} from 'enzyme'
import InputField from '../InputField'


describe('Input Component', ()=>{
    it('it should contain input tags in its rendered field', ()=>{
        const Input = shallow(<InputField />)
        expect(Input.find('Input.input.text')).toBeTruthy()
    })

    it('it should contain form tag in its rendered field', ()=>{
        const Input = shallow(<InputField />)
        expect(Input.find('Input.form')).toBeTruthy()
    })
})