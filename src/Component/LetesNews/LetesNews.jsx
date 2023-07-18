import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LetesNews = () => {
  const [news, setNews] = useState()

  useEffect(() => {
    fetch('/news.json')
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="container mx-auto mt-32 px-4 ">
      <h1 className="text-2xl font-semibold mb-5">Latest News</h1>

      {/* news Card */}
      <div className="grid lg:grid-cols-2 grid-cols-1  gap-10">
        {news?.map(nw => (
          <div key={nw.id} className="grid md:grid-cols-3 grid-cols-1 gap-4 ">
            <div className="">
              <img src={nw?.img} alt="" />
            </div>
            <div className="col-span-2">
              <h1 className="text-lg font-semibold">{nw?.title}</h1>
              <p>{nw?.details.slice(0, 70)}...</p>

              <div className="flex justify-end items-end">
                <Link
                  to={`/news/${nw?.id}`}
                  className="btn btn-sm bg-primary text-white hover:text-primary duration-300 ease-in font-semibold rounded-full mt-5 "
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LetesNews
