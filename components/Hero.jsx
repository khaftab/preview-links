import { useState } from 'react'
import axios from 'axios'
import Card from './Card'
import Form from './Form'
import Skeleton from './Skeleton'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Hero = () => {
  const [metaData, setMetaData] = useState({
    title: '',
    description: '',
    imageUrl: ''
  })
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const handleClick = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { data: { data } } = await axios.get(`/api/getMetaData?url=${input?.trim()}`)
      setMetaData(data)
      setError(false)
    } catch (error) {
      toast.error('Invalid URL', {
        position: "top-right"
      });
      setError(error.message)
    }
    setLoading(false)
  }
  return (
    <div className='flex items-center justify-center flex-col'>
      <Form setInput={setInput} handleClick={handleClick} />
      {loading && <Skeleton />}
      {/* <Skeleton /> */}
      {!loading && !error && <Card title={metaData.title} description={metaData.description} imageUrl={metaData.imageUrl} />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

module.exports = Hero