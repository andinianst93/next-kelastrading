import React from 'react'

const TOC = ({
  toc1,
  toc2,
  toc3,
  toc4,
  toc5,
  toc6,
  toc7,
  toc8,
  toc9,
  toc10,
}) => {
  return (
    <div className='tab'>
      <h2 className='tabt'>Daftar Isi</h2>
      <ol className='list-paddingleft-2'>
        <li>
          <h2>
            <a>{toc1}</a>
          </h2>
        </li>
        <li>
          <h2>
            <a>{toc2}</a>
          </h2>
        </li>
        <li>
          <h2>
            <a>{toc3}</a>
          </h2>
        </li>
        <li>
          <h2>
            <a>{toc4}</a>
          </h2>
        </li>
        <li>
          <h2>
            <a>{toc5}</a>
          </h2>
        </li>
        <li>
          <h2>
            <a>{toc6}</a>
          </h2>
        </li>
        <li>
          <h2>
            <a>{toc7}</a>
          </h2>
        </li>
        <li>
          <h2>
            <a>{toc8}</a>
          </h2>
        </li>
        <li>
          <h2>
            <a>{toc9}</a>
          </h2>
        </li>
        <li>
          <h2>
            <a>{toc10}</a>
          </h2>
        </li>
      </ol>
    </div>
  )
}

export default TOC
