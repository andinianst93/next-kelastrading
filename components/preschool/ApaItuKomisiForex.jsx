import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const ApaItuKomisiForex = () => {
  return (
    <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='Apa Itu Komisi Forex?' />
        <Header
          title='Apa Itu Komisi Forex?'
          description='Dapatkan tips dan strategi untuk memahami dan mengelola komisi forex agar dapat memaksimalkan keuntungan dan meminimalkan biaya dalam trading forex.'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC toc1='number' toc2='number' />
        <div className='partcon'>
          <Section>
         
            <p>Komisi adalah biaya yang dibebankan oleh pialang selama proses trading investor, merupakan salah
                        satu biaya investasi. Secara umum, komisi yang dibebankan oleh pialang tergantung pada ukuran
                        pesanan.</p>
                    <p>
                        Misalnya, saat trading 1 lot EURUSD, pialang akan membebankan komisi $5 kepada trader. Saat
                        trading 0,1 lot EURUSD, pialang akan membebankan komisi $0,5 kepada trader. Beberapa pialang
                        akan membebankan jumlah komisi yang berbeda tergantung pada “Group Nasabah”. Pialang yang
                        berbeda memiliki cara pengambilan komisi yang berbeda. Dengan memilih platform dengan komisi
                        yang lebih rendah, investor dapat menghemat biaya transaksi.
                    </p>
          </Section>
         
        </div>
      </article>
    </Container>
  )
}

export default ApaItuKomisiForex
