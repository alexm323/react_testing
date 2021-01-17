import React from 'react';
import { render, screen } from '@testing-library/react';
import FixedComponent from './FixedComponent';


test('Render a brokenComponent without crashing', () => {
    render(<FixedComponent />)
})
// snapshot test we can use test or it but they do the same thing 

test("it matches snapshot", () => {
    const { asFragment } = render(<FixedComponent />);
    expect(asFragment()).toMatchSnapshot()
})


