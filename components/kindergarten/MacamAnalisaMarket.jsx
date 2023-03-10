import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const MacamAnalisaMarket = () => {
  return (
    <Container>
    <section className='bg-[#00028f] w-full pt-12'>
      <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='Macam-macam Analisa Market' />
      <Header
        title='Macam-macam Analisa Market'
        description='Temukan berbagai macam teknik analisis pasar yang dapat membantu Anda membuat keputusan investasi yang lebih cerdas. Pelajari lebih lanjut tentang analisis teknis, fundamental, dan sentimen pasar di artikel ini.'
      />
    </section>
    <article className='py-4 px-8 mx-auto max-w-screen-lg'>
      <TOC toc1='number' toc2='number' />
      <div className='partcon'>
        <Section>
        <p>Ada tiga jenis analisa dasar trading forex:</p>
                    <ol>
                        <li>Analisa Teknikal</li>
                        <li>Analisa Fundamental</li>
                        <li>Analisa Sentimen Resiko</li>
                    </ol>
                    <p>Trader pemula sering bertanya tentang jenis analisa pasar terbaik, faktanya Anda harus tahu
                        ketiganya.</p>
                    <p>Seperti berdiri di atas bangku berkaki tiga.</p>
                    <p>Jika salah satu kaki lemah, maka akan patah dan terjatuh karena tidak seimbang. Hal ini berlaku
                        sama dalam dunia trading.</p>
                    <p>Jika salah satu analisa trading ini lemah lalu mengabaikannya, kemungkinan besar akan menyebabkan
                        kekalahan atau kerugia </p>
        </Section>
       
      </div>
    </article>
  </Container>
  )
}

export default MacamAnalisaMarket
