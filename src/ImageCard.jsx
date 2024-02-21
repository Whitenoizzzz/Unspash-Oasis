import { useState } from 'react'
import { TiHeartFullOutline } from 'react-icons/ti'
import { IoMdDownload } from 'react-icons/io'
import { FaUser } from 'react-icons/fa'

function ImageCard({ item }) {
  const url = item?.urls?.regular
  return (
    <article className="image-container" key={item.id}>
      <img src={url} key={item.id} alt={item.alt_description} className="img" />
      <div className="image-info">
        <div className="like-div">
          <TiHeartFullOutline className="like-icon"></TiHeartFullOutline>
          <div className="like-numbers">{item.likes}</div>
        </div>
        <div className="more-info">
          <a href={item.user.links.html} target="_blank">
            <FaUser className="user-icon"></FaUser>
          </a>
          <a href={item.links.download} target="_blank">
            <IoMdDownload className="download-icon"></IoMdDownload>
          </a>
        </div>
      </div>
    </article>
  )
}
export default ImageCard
