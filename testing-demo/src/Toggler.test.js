import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Toggler from './Toggler';


test('Render a Toggler without crashing', () => {
    render(<Toggler />)
})

// test("It should start showing", () => {
//     const { getByText } = render(<Toggler />)
//     const heading = getByText("Hello World")
//     expect(heading).toHaveClass('Toggler-text')
//     expect(heading).toBeInTheDocument()
// })
test("It should toggle", () => {
    const { getByText } = render(<Toggler />);
    // Select our header with this text
    const heading = getByText("Hello World");
    // make sure it has the following class
    expect(heading).toHaveClass('Toggler-text');
    // the hello world header should be in the doc
    expect(heading).toBeInTheDocument();
    // now we click
    fireEvent.click(getByText('Toggle'))
    // now the header should be gone
    expect(heading).not.toBeInTheDocument();


})