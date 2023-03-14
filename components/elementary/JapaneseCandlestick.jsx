import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const JapaneseCandlestick = () => {
  return (
    <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb
          title1='Akademi'
          title2='Kelas Trading'
          title3='Mengenal Apa Itu Japanese Candlestick? '
        />
        <Header
          title='Mengenal Apa Itu Japanese Candlestick? '
          description='Pahami apa itu japanese candlestick, analisis teknikal asal jepang untuk menghitung potensi keuntungan tradingmu di sini!'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC toc1='Apa itu candlestick jepang?' toc2='number' />
        <div className='partcon'>
          <Section>
            <p>
              Sekarang kita akan membahas instrumen grafik candlestick yang
              pernah dijelaskan di pelajaran sebelumnya, mari kita mulai!
            </p>
            <p>
              Di masa lalu Jepang menciptakan sebuah analisis teknikal versi
              sendiri untuk transaksi beras.
            </p>
            <p>
              Kemudian muncul seorang yang bernama Steve Nison “menemukan”
              teknik ini yang disebut “candlestick Jepang,” ia mempelajarinya
              dari sesama broker Jepang.
            </p>

            <p>
              Steve mulai meneliti, mendalami candlestick kemudian menulis
              tentang teorinya.
            </p>
            <p>Perlahan, instrumen ini semakin populer di tahun 90-an.</p>
            <p>
              Singkatnya, tanpa Steve Nison,{' '}
              <a href='https://blog.hsb.co.id/tips-investasi-keuangan-umum/10-pola-candlestick-lengkap-akurat/'>
                {' '}
                grafik candlestick{' '}
              </a>{' '}
              mungkin tetap menjadi rahasia yang terkubur.
            </p>
            <p>Steve Nison adalah Tn. Candlestick.</p>
          </Section>
          <Section>
            <Heading number='1' heading='Apa itu candlestick jepang?' />
            <p>Perhatikan gambar di bawah ini:</p>

            <p>
              Grafik Candlestick efektif digunakan untuk jangka waktu berapa
              pun; 1 hari, 1 jam, 30 menit - sepanjang time-frame yang Anda
              maksud!
            </p>
            <p>
              Grafik ini digunakan untuk menggambarkan aktivitas harga selama
              kerangka waktu tertentu.
            </p>
          </Section>
          <Section>
            <Heading number='2' heading='Komponen Candlestick Jepang' />
            <p>
              Untuk bisa membentuk sebuah candlestick diperlukan data harga
              pembukaan (Open), harga terendah (Low), harga tertinggi (High),
              dan harga penutupan (Close)
            </p>
            <ul>
              <li>
                Jika harga penutupan (close) diatas harga pembukaan (Open) maka
                candlestick akan diberi warna hijau atau putih, artinya harga
                tersebut sedang bergerak naik atau "Bullish".
              </li>
              <li>
                Jika harga penutupan (close) dibawah harga pembukaan (Open) maka
                candlestick akan diberi warna merah atau hitam, artinya harga
                tersebut sedang bergerak turun "Bearish".
              </li>
              <li>
                Bagian candlestick yang diberi warna disebut dengan "Body".
              </li>
              <li>
                Garis yang berada dibawah atau diatas "Body" disebut dengan
                "Shadow" atau bayangan yang menggambarkan rentang harga
                tertinggi (High) dan terendah (Low) selama sesi perdagangan.
              </li>
              <li>
                Titik puncak garis yang ada dibawah "Body" atau "Lower Shadow"
                adalah harga terendah (Low).
              </li>
              <li>
                Titik puncak garis yang ada diatas "Body" atau "Upper Shadow"
                adalah harga tertinggi (High).
              </li>
            </ul>
          </Section>
        </div>
      </article>
    </Container>
  )
}

export default JapaneseCandlestick
