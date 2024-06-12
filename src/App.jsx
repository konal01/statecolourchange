import { useState } from 'react'


function App() {
  const [color,setColor] = useState("#2A3439")

  return (
    <>
     <div id= "choosecolour" className="w-screen h-screen duration-200 font-custom flex items-center justify-center text-5xl " style={{backgroundColor: color}}><div className='px-10 flex align-middle'>choose your colour</div>
     </div>
      <div className='fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-4' >
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>
            <button onClick={()=> setColor("#E2CFEA")} className="outline-none padding-4 rounded-full text-white shadow-lg" 
            style={{backgroundColor:"#E2CFEA"}}>Thistle
            </button>
            <button onClick={()=> setColor("#a06cd5")} className="outline-none padding-4 rounded-full text-white shadow-lg" 
            style={{backgroundColor:"#a06cd5"}}>Amethyst
            </button>
            <button onClick={()=> setColor("#6247aa")} className="outline-none padding-4 rounded-full text-white shadow-lg" 
            style={{backgroundColor:"#6247aa"}}>Royal Purple
            </button>
            <button onClick={()=> setColor("#102B3F")} className="outline-none padding-4 rounded-full text-white shadow-lg" 
            style={{backgroundColor:"#102B3F"}}>Prussian blue
            </button>

          </div>
      </div>
    </>
  );
}

export default App
