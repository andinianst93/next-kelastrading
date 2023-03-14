import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const AreaJualBeli = () => {
  return (
    <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb
          title1='Akademi'
          title2='Kelas Trading'
          title3='Area Jual atau Beli Selanjutnya'
        />
        <Header
          title='Area Jual atau Beli Selanjutnya'
          description='hhaManfaatkan channel area jual dan area beli selanjutnya untuk menarik profit trading yang lebih menguntungkan lagi. Cari tahu cara kerja area jual dan area beli di sini!'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC
          toc1='Tipe Channel Area Jual atau Beli Selanjutnya'
          toc2='number'
        />
        <div className='partcon'>
          <Section>
            {' '}
            <p>
              Jika kita mengambil teori garis trend berikutnya dan menggambar
              garis paralel pada sudut yang sama dengan uptrend ataupun
              downtrend, kita akan membuat sebuah channel.
            </p>
            <p>
              Ini tidak berbicara tentang ESPN, National Geographic Channel atau
              Cartoon Network.
            </p>
            <p>
              Channel di sini adalah salah satu instrumen dalam analisa teknikal
              untuk menentukan posisi terbaik untuk membeli atau menjual.
            </p>
            <p>
              Baik bagian atas dan bagian bawah channel mewakili area potensial
              untuk support atau resistance.
            </p>
            <p>
              <strong>Untuk membuat channel naik/ bullish </strong>, cukup
              menggambar garis paralel pada sudut yang sama dengan garis trend
              naik dan kemudian memindahkan garis itu ke posisi di mana
              menyentuh puncak terbaru. Ini harus dilakukan bersamaan ketika
              Anda membuat garis trend.
            </p>
            <p>
              <strong>Untuk membuat channel turun/ bearish </strong>, cukup
              menggambar garis paralel pada sudut yang sama dengan garis trend
              turun dan kemudian memindahkan garis itu ke posisi di mana ia
              menyentuh lembah terbaru. Ini harus dilakukan bersamaan ketika
              Anda membuat garis trend.
            </p>
            <p>
              Ketika harga mencapai BAWAH garis trend, dapat dimaksudkan sebagai
              area beli.
            </p>
            <p>
              Ketika harga mencapai ATAS garis trend, dapat dimaksudkan sebagai
              area jual.
            </p>
          </Section>
          <Section>
            <Heading
              number='1'
              heading='Tipe Channel Area Jual atau Beli Selanjutnya'
            />
            <ol>
              <li>Channel naik (higher highs and higher lows)</li>
              <li>Channel turun (lower highs and lower lows)</li>
              <li>Channel datar (konsolidasi)</li>
            </ol>
          </Section>
          <Section>
            <Heading
              number='2'
              heading='Hal-hal penting yang perlu diingat saat menggambar garis trend:'
            />
            <p>
              Saat menggambar sebuah channel, kedua garis trend harus lurus
              sejajar satu sama lain.
            </p>
            <p>
              Secara umum, bagian bawah channel dianggap sebagai zona beli
              sedangkan bagian atas channel dianggap sebagai zona jual.
            </p>
            <p>
              Seperti menggambar garis trend, JANGAN memaksakan harga ke channel
              yang Anda gambar!
            </p>
            <p>
              Satu garis channel yang miring ke satu sudut tetapi garis channel
              lain tidak sinkron atau miring ke sudut lain dianggap salah dan
              dapat mengarah pada hasil trading yang buruk.
            </p>
          </Section>
        </div>
      </article>
    </Container>
  )
}

export default AreaJualBeli
