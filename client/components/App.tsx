import { useFruits } from '../hooks/useFruits.ts'

function App() {
  const { data } = useFruits()

  return (
    <>
      <div className="app">
        <h1 className="text-3xl font-bold underline">
          Fullstack Boilerplate - with Fruits!
        </h1>
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>

        <div className=" relative w-1/3 bg-green-200 p-4 rounded-md shadow-slate-400 shadow-md  m-auto h-auto max-w-[25vmin]">
          <div className="w-full px-2 py-3 m-auto bg-white rounded-md shadow-md font-bold text-lg">header</div>
          <div className="w-full bg-white mt-3 rounded-md shadow-md h-[20em]"><img className='w-full h-full object-cover rounded-md' alt='lekkie bling ring' src='https://th.bing.com/th/id/OIP.nUmVE9om-4X-Ey4pi33wJgHaE7?rs=1&pid=ImgDetMain'></img></div>
          <div className="mt-3 h-1/3 rounded-md px-2 py-3 shadow-md bg-white">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ratione facilis, mollitia eius, veritatis possimus ullam odio magni laudantium facere voluptatum perspiciatis? Ex dolores obcaecati voluptates, quae debitis in facere.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
