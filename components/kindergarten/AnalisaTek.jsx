import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const AnalisaTek = () => {
  return (
    <Container>
    <section className='bg-[#00028f] w-full pt-12'>
      <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='judul' />
      <Header
        title='Tentang Hello'
        description='Platform Informasi yang khusus membahas hal-hal seputar Digital Marketing yakni Search Engine Optimization (SEO), Media Sosial, Digital Ads, dan Web Development.'
      />
    </section>
    <article className='py-4 px-8 mx-auto max-w-screen-lg'>
      <TOC toc1='number' toc2='number' />
      <div className='partcon'>
        <Section>
        <p>Aksi harga secara teoritis harus mencerminkan semua informasi pasar yang tersedia. Sayangnya hal
                        ini tidak sesederhana yang dipikirkan oleh trader</p>
                    <p>Pasar forex tidak hanya mencerminkan semua informasi di luar sana karena semua trader pasti akan
                        bertindak dengan cara yang sama. Tentu saja, ini bukan cara kerjanya.</p>
                  
                    <p>Inilah mengapa analisa sentimen pasar diperlukan. Setiap trader memiliki pendapat masing-masing
                        tentang pergerakan arah harga dalam cara sesuai perkiraan atau justru berlawanan.</p>
                    <p>Pasar layaknya Facebook - sebuah jaringan kompleks yang terdiri dari individu-individu dengan
                        maksud meng-spam halaman berita.</p>
                    <p>Pasar pada dasarnya mewakili representasi semua pedagang terhadap pasar</p>
                    <p>Setiap pikiran dan pendapat yang diekspresikan melalui posisi apa pun akan membentuk sentimen
                        pasar terlepas dari informasi apapun di luar sana.</p>
                    <p>Masalahnya adalah sebagai trader ritel, tidak peduli seberapa kuat perasaan terhadap transaksi
                        tertentu, Anda tidak dapat menggerakkan pasar sesuai keinginan.</p>
                    <p>Sekalipun percaya bahwa dolar akan naik, semua orang bersikap bearish terhadap dolar, tidak
                        banyak yang dapat Anda lakukan. (kecuali jika Anda salah satu dari GS, George Soros atau Goldman
                        Sachs!).</p>
                    <p>Anda harus mempertimbangkan semua ini dan perlu melakukan analisa sentimen pasar.</p>
                    <p>Terserah bagaimana Anda mengukur keadaan pasar, apakah itu bullish atau bearish.</p>
                    <p><strong>Anda harus memutuskan bagaimana memasukkan persepsi tentang sentimen pasar ke dalam
                            strategi perdagangan.</strong></p>
                    <p>Jika memilih untuk mengabaikan sentimen pasar, bisa dipastikan kerugian akan segera tiba!</p>
                    <p>Mampu mengukur sentimen pasar bisa menjadi alat penting di kotak alat Anda.</p>
                    <p>Di kelas berikutnya , kami akan mengajarkan cara menganalisa sentimen pasar dan menggunakannya
                        untuk mencari peluang.</p>

        </Section>
    
      </div>
    </article>
  </Container>
  )
}

export default AnalisaTek
