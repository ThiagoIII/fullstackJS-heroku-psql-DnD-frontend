import React from 'react'
import DCQ from '../pages/DiscoverCharsAndAdvs'
import renderer from 'react-test-renderer'


const testRenderer = renderer.create(<DCQ />);
const testInstance = testRenderer.root;


test('test', ()=>{
	expect(testInstance.findByType('h1').type).toBe('h1');
})

