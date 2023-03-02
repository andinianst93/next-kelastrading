import React from 'react'

const TOC = ({toc1, toc2, toc3, toc4, toc5}) => {
  return (
    <div className="tab">
    <h2 className="tabt">
        Daftar Isi
    </h2>
    <ol className=" list-paddingleft-2">
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
    </ol>
</div>
  )
}

export default TOC
