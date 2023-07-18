import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BlogDetail = () => {
  const { id } = useParams()
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('/news.json')
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.log(err))
  }, [])

  const blog = news.filter(nw => nw.id === id)

  return (
    <div className="container mx-auto">
      <div className="">
        <div className="">
          <img src={blog[0]?.img} alt="" />
        </div>
        <div className="mt-5">
          <h1 className="text-2xl font-bold">{blog[0]?.title}</h1>
          <p className="my-2">Date: {blog[0]?.date}</p>
          <p>{blog[0]?.details}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail
