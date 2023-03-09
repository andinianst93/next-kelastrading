import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const ApaItuSpreead = () => {
  return (
    <Container>
    <section className='bg-[#00028f] w-full pt-12'>
      <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='Apa itu Spread Forex dan Tipe-tipenya?' />
      <Header
        title='Apa itu Spread Forex dan Tipe-tipenya?'
        description='Anda akan mempelajari cara menghitung spread, faktor-faktor yang memengaruhi spread, dan bagaimana memilih jenis spread yang tepat untuk kebutuhan trading Anda.'
      />
    </section>
    <article className='py-4 px-8 mx-auto max-w-screen-lg'>
      <TOC toc1='number' toc2='number' />
      <div className='partcon'>
        <Section>
        <p>Spread forex mengacu pada perbedaan antara harga beli dan harga jual. Akan ada dua quotes dalam
                        forex, satu adalah harga beli dan satunya lagi adalah harga jual. Kedua harga berfluktuasi
                        secara real time. Perbedaan antara keduanya ketika trader melakukan trading adalah spread.
                        Spread adalah biaya transaksi trader setiap kali ia memesan. Spread dibagi menjadi dua, yaitu
                        floating spread dan fixed spread.
                    </p>
                    <p>Floating spread: mengacu pada ukuran perubahan spread sesuai dengan fluktuasi pasar. Misalnya
                        saja EURUSD. Ketika perdagangan aktif, itu berarti likuiditas pasar tinggi, dan spread akan
                        menyempit. Sebaliknya, ketika perdagangan tidak aktif dan likuiditas pasar rendah, spread akan
                        melebar.</p>
                    <p>Fixed spread : berarti terlepas dari apakah pasar flat atau volatile, spread tidak akan
                        terpengaruh. Misalnya, EURUSD memiliki fixed spread 3 poin, dan USDJPY memiliki fixed spread 4
                        poin. Beberapa pialang memperlakukan fixed spread, karena spread adalah indikator likuiditas
                        pasar. Pendekatan ini hanyalah cara bagi pialang untuk memahami konsep ini dan memfasilitasi
                        pemasaran. Beberapa pialang yang tidak tepat secara diam-diam meningkatkan spread, atas nama
                        menyediakan spread tetap, menipu nasabah, dan pada akhirnya meningkatkan biaya transaksi
                        nasabah.
                    </p>
        </Section>
      
      </div>
    </article>
  </Container>
  )
}

export default ApaItuSpreead
