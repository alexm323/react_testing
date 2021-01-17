import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';


test('Render a counter without crashing', () => {
    render(<Counter />)
})


// test("playing with queries", () => {

//     const { getAllByText, getByText, queryByText, getByPlaceholderText, getByLabelText } = render(<Counter />)

//     console.log(getAllByText(`count`, { exact: false }))
//     // console.log(queryByText(`count`, { exact: false }))
//     // console.log(getByPlaceholderText('username'))
//     console.log(getByLabelText('Username'))
// })

test("button clicks", () => {
    const { getByText, debug } = render(<Counter />)
    // debug();
    const h2 = getByText(`Current count: 0`)
    const btn = getByText('Add')
    fireEvent.click(btn);
    // debug();
    expect(h2).toHaveTextContent('1');
    expect(h2).not.toHaveTextContent('0');
})