import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' // SUT: Subject under testing (sujeto de testeo)

test("CityInfo render", async () => {
    // AAA (estandar con el que se escriben los test)
    // Arrange -> Preparar las cosas para que el test funcione
    // Act -> Ejecutar el test
    const city = "Buenos Aires"
    const country = "Argentina"
    // Render: renderiza el componente y retorna una serie de funciones
    // de las cuales utilizaremos "findAllByRole" para consultar a nuestro componente
    const { findAllByRole } = render(<CityInfo city={city} country={country}/>)
    // Assert -> Evaluar que es lo que sucedió (retorno lo que esperabamos) PASS/FAIL
    // findAllByRole nos va a buscar todos los componentes que sean "heading" (h1,h2...)
    // El resultado es un array de componentes
    const cityAndCountryComponents = await findAllByRole("heading") 
    
    // ¿Cuando el test va a ser correcto?
    // Definición:
    // Cuando el primer elemento (heading) se encuentre en la ciudad "Buenos Aires"
    // y cuando en el segundo elemento se encuentre el país "Argentina"
    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)

    // Si estas condiciones se cumplen el test estará OK (expect)
})  