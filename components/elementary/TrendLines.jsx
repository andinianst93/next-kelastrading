import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const TrendLines = () => {
  return (
    <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb
          title1='Akademi'
          title2='Kelas Trading'
          title3='Garis Trend Line Adalah: Pengertian dan Macam-macamnya'
        />
        <Header
          title='Garis Trend Line Adalah: Pengertian dan Macam-macamnya'
          description='Garis trend atau trend line dalam forex adalah bagian dari analisa teknikal yang paling umum dalam forex. Tetapi trend line jarang digunakan. Simak di sini.'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC
          toc1='Cara menggambar garis trend'
          toc2='Pola trend'
          toc3='Beberapa hal penting untuk diingat saat menggunakan garis trend untuk trading.'
        />
        <div className='partcon'>
          <Section>
            <p>
              <strong>Garis trend</strong> atau trend-line adalah bagian dari
              analisa teknikal yang paling umum dalam forex trading. Namun jika
              dibandingkan dengan support dan resistance , garis trend lebih
              jarang digunakan.
            </p>
            <p>
              Padahal jika digunakan dengan tepat, garis trend cukup akurat.
            </p>
            <p>
              Sayangnya, sebagian besar pedagang forex tidak menggambar mereka
              dengan benar atau mencoba membuat garis sesuai pasar, bukan
              sebaliknya.
            </p>
            <p>
              Menggambar garis trend sangat mudah. Ada dua jenis trend-line,
              yakni uptrend dan downtrend. Up-trend digambar mengikuti
              serangkaian lembah pergerakan harga yang bergerak naik.{' '}
            </p>
            <p>
              Sebaliknya, down-trend adalah garis yang mengikuti serangkaian
              puncak harga yang bergerak turun.
            </p>
          </Section>
          <Section>
            <Heading number='1' heading='Cara menggambar garis trend' />
            <p>
              Untuk menggambar garis trend dengan benar adalah temukan dua
              puncak atau lembah utama dan hubungkan.
            </p>
            <p>Apa langkah selanjutnya?</p>
            <p>Tidak ada.</p>
            <p>yakin?</p>
            <p>Ya, semudah itu!</p>
            <p>Inilah garis trend yang sedang beraksi! Lihat gelombangnya!</p>
          </Section>
          <Section>
            <Heading number='2' heading='Pola trend' />
            <p>Ada tiga pola trend:</p>
            <ol>
              <li>Trend naik (higher lows)</li>
              <li>Trend turun (lower highs)</li>
              <li>Trend datar (konsolidasi)</li>
            </ol>
          </Section>
          <Section>
            <Heading
              number='3'
              heading='Beberapa hal penting untuk diingat saat menggunakan garis trend untuk trading.'
            />
            <p>
              1. Setidaknya ada dua puncak atau lembah untuk menggambar garis
              trend yang valid tetapi perlu TIGA untuk mengkonfirmasi garis
              trend yang berlangsung.
            </p>
            <p>
              2. SEMAKIN CURAM garis trend yang terbentuk, semakin besar
              kemungkinan untuk terjadi breakout setelah garis ditembus
            </p>
            <p>
              3. Sama seperti garis support & resistance, semakin banyak lembah
              dan puncak yang terbentuk dan menyentuh garis trend, makin kuat
              pula tren tersebut.
            </p>
            <p>
              Yang penting, JANGAN menggambar garis trend dengan terpaksa agar
              sesuai dengan pergerakan pasar. Jika tidak pas, maka garis trend
              tidak valid!
            </p>
          </Section>
        </div>
      </article>
    </Container>
  )
}

export default TrendLines
