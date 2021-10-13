import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from '../components/Content/Profile/ProfileInfo/ProfileStatus/ProfileStatus'

describe('ProfileStatus component', () => {
    test('Status from props should be in the state', () => {
        const component = create(<ProfileStatus status="TEST STATUS"/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('TEST STATUS')
    })
    test('After creation span should be displayed', () => {
        const component = create(<ProfileStatus status="TEST STATUS"/>)
        const root = component.root
        const span = root.findByType('span')
        expect(span).not.toBeNull()
    })
    test('After creation input should not be displayed', () => {
        const component = create(<ProfileStatus status="TEST STATUS"/>)
        const root = component.root
        expect(() => { const input = root.findByType('input')}).toThrow()
    })
    test('After creation span with correct status should be displayed', () => {
        const component = create(<ProfileStatus status="TEST STATUS"/>)
        const root = component.root
        const span = root.findByType('span')
        expect(span.children[0]).toBe('TEST STATUS')
    })
    test('Input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status="TEST STATUS"/>)
        const root = component.root
        const span = root.findByType('span')
        span.props.onDoubleClick()
        const input = root.findByType('input')
        expect(input.props.value).toBe('TEST STATUS')
    })
    test('Callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="TEST STATUS" updateUserStatus={mockCallback}/>)
        const instance = component.getInstance()
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})
