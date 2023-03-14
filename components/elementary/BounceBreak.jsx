import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const BounceBreak = () => {
  return (
    <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb
          title1='Akademi'
          title2='Kelas Trading'
          title3='Cara Trading Support - Resistance dengan Bounce dan Break '
        />
        <Header
          title='Cara Trading Support - Resistance dengan Bounce dan Break '
          description='Gunakan support dan resistance dengan bounce dan break untuk menghindarkanmu dari keputusan trading yang salah. Cari tahu strategi untungnya di sini!'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC
          toc1='Bounce (harga mantul)'
          toc2='Peluang Untung Saat Bounce'
          toc3='Break (harga tembus)'
          toc4='Cara agresif'
          toc5='Cara konservatif'
        />
        <div className='partcon'>
          <Section>
            <p>
              Kini saatnya Anda menerapkan dasar instrumen teknikal yang telah
              dipelajari sebelumnya ke dalam trading nyata.
            </p>
            <p>
              Di HSB hari ini, kami ingin membuat semuanya mudah dimengerti,
              kami telah membagi penerapan support dan resistance ke dalam dua
              cara: <strong>Bounce</strong> dan <strong>Break</strong>.
            </p>
          </Section>
          <Section>
            <Heading number='1' heading='Bounce (harga mantul)' />

            <p>
              Seperti namanya, salah satu aksi harga di level resistance adalah
              bounce (harga mantul).
            </p>
            <p>
              Banyak trader ritel membuat kesalahan dalam menetapkan order tepat
              di garis support atau resistance, kemudian hanya menunggu
              perkiraan harga akan terwujud.
            </p>
            <p>
              Tentu, cara ini kadang-kadang berhasil tetapi metode trading
              semacam ini dengan asumsi bahwa level support atau resistance akan
              tetap dan harga belum benar-benar tiba di sana.
            </p>
            <p>
              Anda mungkin berpikir, “Mengapa tidak langsung entri order saja?
              dengan begitu, saya terjamin dengan harga terbaik.”
            </p>
          </Section>
          <Section>
            <Heading number='2' heading='Peluang Untung Saat Bounce' />
            <p>
              <strong>
                Saat kondisi harga bounce, kita ingin peluang menguntungkan ada
                di pihak kita dan mengonfirmasikan kalau support atau resistance
                tersebut akan bertahan.
              </strong>
            </p>
            <p>
              Sebagai contoh, alih-alih mengeksekusi langsung begitu saja, yang
              kita inginkan adalah harga tersebut “terpantul” terlebih dahulu
              sebelum memasuki pasar.
            </p>

            <p>
              Jika Anda ingin menjual, tunggu harga terpantul sedikit dari
              resistance sebelum masuk.
            </p>

            <p>
              Dengan melakukan ini, Anda menghindari saat-saat di mana harga
              bergerak cepat dan menembus level support atau resistance.{' '}
            </p>
          </Section>
          <Section>
            <Heading number='3' heading='Break (harga tembus)' />
            <p>
              Dalam dunia trading forex yang sempurna, trader bisa masuk dan
              keluar kapan saja saat harga menyentuh level support dan
              resistance utama dan menghasilkan banyak uang.
            </p>
            <p>
              Faktanya adalah harga sering menembus level support dan resistance
              berikutnya.
            </p>
            <p>
              Jadi, tidak cukup hanya dengan melihat harga “Pantul”. Anda juga
              harus tahu apa yang harus dilakukan setiap kali level support dan
              resistance berjalan!
            </p>
            <p>
              Ada dua cara mengeksekusi saat tembus harga: lakukan secara
              agresif atau konservatif.
            </p>
          </Section>
          <Section>
            <Heading number='4' heading='Cara agresif' />
            <p>
              Cara untuk mengeksekusi saat tembus harga adalah dengan sesegera
              mungkin membeli atau menjual setiap kali harga melewati zona
              support atau resistance secara pasti.
            </p>
            <p>
              Kuncinya adalah harus yakin, karena kita hanya masuk ketika harga
              telah melewati level support atau resistance yang signifikan.
            </p>
          </Section>
          <Section>
            <Heading number='5' heading='Cara konservatif' />
            <p>
              Bayangkan situasi dimana anda memutuskan untuk membeli EUR/USD,
              berharap harga akan naik setelah “terpantul” dari level support.{' '}
            </p>
            <p>
              Tetapi kemudian, level support ditembus dan anda sekarang malah
              berada di posisi kalah dengan saldo akun yang berkurang.
            </p>
            <p>Apa yang Anda lakukan?</p>
            <p>
              A. Menerima kekalahan, segera berhenti dan melikuidasi posisi.
            </p>
            <p>
              B. Bertahan pada order dengan harapan harga akan kembali naik.
            </p>
            <p>
              Jika memilih yang kedua, maka Anda semakin memahami metode trading
              forex ini.
            </p>
            <p>
              Ingat! setiap kali menutup posisi, Anda mengambil sisi berlawanan
              dari awal trading anda.
            </p>
            <p>
              Menutup posisi beli EUR / USD di dekat titik impas berarti Anda
              harus mengambil posisi jual EUR / USD dengan jumlah yang sama.
            </p>
            <p>
              Kemudian, jika penjualan cukup dan likuidasi posisi yang hilang
              terjadi pada level support yang telah ditembus, harga akan
              berbalik dan akan mulai jatuh lagi.
            </p>
            <p>
              Fenomena ini adalah alasan utama mengapa level support yang telah
              ditembus menjadi resistance.
            </p>
            <p>
              Kunci untuk mengambil keuntungan dari fenomena ini adalah
              bersabar.
            </p>
            <p>
              Alih-alih langsung masuk pada saat tembus harga, lebih baik
              menunggu harga "pullback" ke level support atau resistance awal,
              kemudian masuk setelah harga “mental” kembali.
            </p>
          </Section>
        </div>
      </article>
    </Container>
  )
}

export default BounceBreak
