import React from 'react'
import { render } from '@testing-library/react'
import Weather from './Weather'

test('Weather render sunny', async () => {

    // AAA
    const { findByRole } = render(<Weather temperature={10} state="sunny"/>)

    const temp = await findByRole("heading")
 
    expect(temp).toHaveTextContent("10")
})
// TODO test Weather render cloudy