const name = 'Klitchka';
const x = true;

export const Header = () => {
  return (
    <header>
        <h1>Hello {name}</h1>
        <h2>Are you happy? {x ? 'Sí' : 'No'}</h2>
    </header>
  )
}
