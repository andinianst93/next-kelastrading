import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const SummarySupport = () => {
  return (
    <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb
          title1='Akademi'
          title2='Kelas Trading'
          title3='Rangkuman Cara Trading Dengan Support Dan Resistance'
        />
        <Header
          title='Rangkuman Cara Trading Dengan Support Dan Resistance'
          description='Manfaatkan indikator level support dan resistance untuk mengkonfirmasi arah gerakan harga instrumen agar trading dapat meraih profit maksimal. Baca rangkumannya di sini!'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC toc1='Garis Trend' toc2='Area Jual dan Area Beli Selanjutnya' />
        <div className='partcon'>
          <Section>
            <p>
              Ketika pasar bergerak naik dan tiba-tiba pullback, titik tertinggi
              yang dicapai sebelum pullback adalah resistance.
            </p>
            <p>
              Ketika pasar melanjutkan untuk bergerak naik kembali, titik
              terendah yang dicapai sebelum bergerak naik disebut support.
            </p>
            <p>
              Yang perlu diingat, level horisontal{' '}
              <a href='https://blog.hsb.co.id/analisa-teknikal-forex/support-dan-resistance/'>
                {' '}
                support dan resistance{' '}
              </a>{' '}
              adalah BUKAN NILAI MUTLAK.
            </p>
            <p>
              <strong>
                Untuk menyaring breakout palsu, anda harus memikirkan support
                dan resistance selanjutnya sebagai “zona” daripada level mutlak.
              </strong>
            </p>
            <p>
              Satu cara untuk menemukan zona ini adalah menetapkan support dan
              resistance dalam grafik garis.
            </p>
            <p>
              Yang perlu diingat adalah ketika harga melewati titik resistance,
              resistance tersebut berpotensi untuk menjadi support.{' '}
            </p>
            <p>
              Hal serupa juga terjadi dengan support, jika sebuah titik support
              ditembus, dapat berpotensi menjadi titik resistance.
            </p>
          </Section>
          <Section>
            <Heading number='1' heading='Garis Trend' />
            <p>
              Bentuk sederhananya, garis trend naik digambarkan di sepanjang
              bagian bawah area support (lembah).
            </p>
            <p>
              Pada trend turun, garis trend digambarkan di sepanjang bagian atas
              area resistance (puncak).
            </p>
            <p>3 jenis trend:</p>
            <ol>
              <li>Trend naik (higher lows)</li>
              <li>Trend turun (lower highs)</li>
              <li>Trend datar (konsolidasi)</li>
            </ol>
          </Section>
          <Section>
            <Heading number='2' heading='Area Jual dan Area Beli Selanjutnya' />
            <p>
              <strong>
                Untuk membuat channel naik/{' '}
                <a href='https://blog.hsb.co.id/pengetahuan-keuangan/apa-itu-bullish-dan-bearish/'>
                  {' '}
                  trend bullish{' '}
                </a>{' '}
              </strong>
              , cukup menggambar garis paralel pada sudut yang sama dengan garis
              trend naik dan kemudian memindahkan garis itu ke posisi di mana
              menyentuh puncak terbaru. Ini harus dilakukan bersamaan ketika
              Anda membuat garis trend.
            </p>
            <p>
              <strong>
                Untuk membuat channel turun/{' '}
                <a href='https://blog.hsb.co.id/pengetahuan-keuangan/apa-itu-bullish-dan-bearish/'>
                  {' '}
                  trend bearish{' '}
                </a>{' '}
              </strong>
              , cukup menggambar garis paralel pada sudut yang sama dengan garis
              trend turun dan kemudian memindahkan garis itu ke posisi di mana
              ia menyentuh lembah terbaru. Ini harus dilakukan bersamaan ketika
              Anda membuat garis trend.
            </p>
            <ol>
              <li>Channel naik (higher highs and higher lows)</li>
              <li>Channel turun (lower highs and lower lows)</li>
              <li>Channel datar (konsolidasi)</li>
            </ol>
            <p>
              Trading dengan penerapan support dan resistance di bagi dua cara:
              Bounce dan Break
            </p>
            <p>
              Saat harga mantul, kita ingin peluang harga berpihak ke arah kita
              dan mengonfirmasi bahwa level support atau resistance akan
              bertahan.
            </p>
            <p>
              Alih-alih membeli atau menjual langsung, tunggu sampai harga
              mantul terlebih dahulu sebelum masuk pasar.
            </p>
            <p>
              Dengan melakukan ini, Anda menghindari saat-saat di mana harga
              bergerak sangat cepat sehingga membentuk level support dan
              resistance berikutnya.
            </p>
            <p>
              Adapun trading saat tembus harga bisa dengan cara agresif atau
              cara cara konservatif.
            </p>
            <p>
              Cara agresif, Anda cukup membeli atau menjual setiap kali harga
              melewati zona support atau resistance.
            </p>
            <p>
              Cara konservatif, Anda menunggu harga untuk membuat "pullback" ke
              level support atau resistance yang telah ditembus, kemudian masuk
              setelah harga mantul kembali.
            </p>
          </Section>
        </div>
      </article>
    </Container>
  )
}

export default SummarySupport
