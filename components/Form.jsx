import { useEffect, useState } from "react"

const Form = ({ handleClick, setInput }) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    setInput(value)
  }, [value])
  return (
    <div className="flex justify-center">
      <div className="mb-3 w-full">
        <form className="input-group relative flex items-stretch w-full mb-4" onSubmit={handleClick}>
          <input type="search" className="form-control relative flex-auto block w-full sm:w-[380px] px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Ex - pensil.in" aria-label="Search" aria-describedby="button-addon3" onChange={e => setValue(e.target.value)} />
          <button className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded bg-slate-50 hover:bg-[#ddd6fe] focus:outline-none focus:ring-0 transition duration-150 ease-in-out ml-2" type="submit" id="button-addon3" >Paste & Preview</button>
        </form>
      </div>
    </div>
  )

}

export default Form