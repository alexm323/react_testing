import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";


test('Render a brokenComponent without crashing', () => {
    render(<Card />)
})

it('should match snapshot', () => {
    const { asFragment } = render(<Card />)
    expect(asFragment()).toMatchSnapshot();
})
