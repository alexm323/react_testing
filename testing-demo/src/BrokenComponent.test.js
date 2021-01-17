import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';
import BrokenComponent from './BrokenComponent';


test('Render a brokenComponent without crashing', () => {
    render(<BrokenComponent />)
})


