import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { useGlobalContext } from './context'
import undraw_not_found_re_bh2e from './assets/undraw_not_found_re_bh2e.svg'
import ImageCard from './ImageCard'

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`
const Gallery = () => {
  const { searchTerm, currentPage, setTotalPages } = useGlobalContext()
  const response = useQuery({
    queryKey: ['images', searchTerm, currentPage],
    queryFn: async () => {
      const result = await axios(
        `${url}&query=${searchTerm}&per_page= 15&page=${currentPage}`
      )
      setTotalPages(result.data.total_pages)
      return result.data
    },
  })
  if (response.isLoading) {
    return (
      <section className="loading-container">
        <div className="loading"></div>
      </section>
    )
  }
  if (response.isError) {
    return (
      <section className="card-container">
        <h4>There was an error..</h4>
      </section>
    )
  }
  const results = response.data.results
  console.log(response.data)
  if (results.length < 1) {
    return (
      <section className="notfound-container">
        <img src={undraw_not_found_re_bh2e} alt="not found" className="img" />
      </section>
    )
  }
  return (
    <section className="card-container">
      {results.map((item) => {
        return <ImageCard item={item} key={item.id}></ImageCard>
      })}
    </section>
  )
}
export default Gallery
