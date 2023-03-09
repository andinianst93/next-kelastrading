import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const ArtiMarginForex = () => {
  return (
    <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='Apa Itu Margin dalam Trading Forex?' />
        <Header
          title='Apa Itu Margin dalam Trading Forex?'
          description='Pelajari tentang konsep dasar margin, margin requirement, dan leverage dalam trading forex, serta bagaimana memanfaatkan margin untuk memaksimalkan keuntungan dalam trading.'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC toc1='number' toc2='number' />
        <div className='partcon'>
          <Section>
          <p>Margin adalah jumlah hipotek yang dibutuhkan oleh investor saat membuka perdagangan. Jumlah
                        margin ditentukan oleh ukuran leverage. Sebagai contoh:
                    </p>
                    <p>Trading 1 lot EURUSD jika tanpa leverage, membutuhkan $100.000. Ketika rasio leverage 100: 1,
                        investor hanya perlu membayar $1000 untuk transaksi $100.000. Ketika rasio leverage adalah 200:
                        1, hanya perlu $500 untuk trading 1 lot forex, dan sebagainya. Untuk trading 0,1 lot EURUSD,
                        hanya membutuhkan margin $50.</p>
                    <p>
                        Menggunakan margin untuk trading forex dapat meningkatkan "daya beli" Anda. Semakin banyak orang
                        awam berpartisipasi dalam investasi forex, peningkatan daya beli akan meningkatkan persentase
                        keuntungan yang dapat Anda peroleh (laba atas investasi-ROI). Tetapi perlu diingat bahwa trading
                        dengan leverage dapat menggandakan laba Anda dan juga menghadapi risiko yang tinggi.
                    </p>
          </Section>
        
        </div>
      </article>
    </Container>
  )
}

export default ArtiMarginForex
