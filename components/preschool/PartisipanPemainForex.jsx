import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const PartisipanPemainForex = () => {
  return (
    <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb
          title1='Akademi'
          title2='Kelas Trading'
          title3='Siapa Saja Partisipan dan Pemain Trading Forex'
        />
        <Header
          title='Siapa Saja Partisipan dan Pemain Trading Forex'
          description='Temukan siapa saja yang terlibat dalam perdagangan forex, termasuk bank-bank besar, institusi keuangan, perusahaan multinasional, dan trader individu. Pelajari peran masing-masing pemain dalam mempengaruhi pasar valuta asing.'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC
          toc1='Bank besar'
          toc2='Perusahaan komersial'
          toc3='Pemerintah dan Bank Sentral'
          toc4='Spekulan'
        />
        <div className='partcon'>
          <Section>
            <p>
              Setelah mendalami struktur pasar forex, kali ini kami ajak Anda
              mencari tahu siapa sebenarnya orang-orang di balik bisnis ini.{' '}
            </p>
            <p>
              Sangat penting bagi anda untuk memahami sifat pasar spot dan siapa
              saja yang menjadi pelaku bisnis utamanya.
            </p>
            <p>
              Sampai akhir tahun 90-an hanya “orang-orang besar” saja yang dapat
              masuk dalam dunia trading. Untuk persyaratan awal, Anda harus
              menyediakan modal sekitar 10 hingga 50 juta dolar. Tidak banyak
              bukan?
            </p>
            <p>
              Forex pada mulanya dimaksudkan untuk para bankir dan institusi
              besar dan bukan untuk kita “orang-orang kecil”
            </p>
            <p>
              Namun, karena munculnya internet dan broker forex online, saat ini
              dimungkinkan terjadinya penawaran akun trading kepada trader
              “jalanan” seperti kita.
            </p>
            <p>Pemain utama:</p>
          </Section>
          <Section>
            <Heading number='1' heading='Bank besar' />
            <p>
              Semenjak pasar spot bersifat desentralisasi, secara tidak langsung
              berubah menjadi bank terbesar dunia yang menentukan nilai tukar.
            </p>
            <p>
              Di dasari atas penawaran dan permintaan mata uang, mereka
              memberikan spread bid atau ask spread yang kita sukai.
            </p>
            <p>
              Kumpulan Bank-bank besar ini disebut dengan pasar interbank,
              dengan mengambil jumlah transaksi forex yang tidak masuk akal
              setiap hari sebagai Nasabah atau perusahaan.
            </p>
            <p>
              Beberapa Bank besar meliputi Citi, JPMorgan, UBS, Barclays,
              Deutsche Bank dan HSBC, dengan kata lain pasar interbank adalah
              pasar utamanya.
            </p>
            <p>
              <img
                class='partimg'
                alt='market share ranking 2006 - 2016 '
                src='https://www.hsb.co.id/learn/images/fx-banks.png'
              />
            </p>
          </Section>
          <Section>
            <Heading number='2' heading='Perusahaan komersial' />
            <p>
              Perusahaan komersial juga mengambil bagian di pasar forex dengan
              tujuan melakukan bisnis.{' '}
            </p>
            <p>
              Contohnya, perusahaan Apple dimana mereka pertama kali harus
              menukar dolar AS dengan Yen Jepang ketika membeli komponen
              elektronik Jepang untuk produk mereka.
            </p>
            <p>
              Karena volume yang mereka perdagangkan jauh lebih kecil daripada
              pasar interbank, pelaku pasar jenis ini biasanya berurusan dengan
              bank komersial untuk transaksi mereka.
            </p>
            <p>
              Merger dan akuisisi (M&A) antara perusahaan besar juga dapat
              membuat fluktuasi nilai tukar mata uang.
            </p>
            <p>
              Pada lintas batas M & A internasional, banyak terjadi transaksi
              mata uang yang dapat menggerakkan harga.
            </p>
          </Section>
          <Section>
            <Heading number='3' heading='Pemerintah dan Bank Sentral' />
            <p>
              Pemerintah dan bank-bank sentral, seperti European Central Bank,
              Bank of England dan Federal Reserve, secara teratur juga terlibat
              dalam pasar forex.
            </p>
            <p>
              Sama halnya perusahaan, pemerintah nasional juga berpartisipasi
              dalam operasional pasar forex, pembayaran perdagangan
              internasional dan menangani cadangan devisa negara. Sementara itu,
              bank sentral memberi pengaruh ketika mengeluarkan kebijakan suku
              bunga acuan untuk mengendalikan inflasi.
            </p>
            <p>
              Sebagai bank sentral juga dapat melakukan intervensi, baik secara
              langsung maupun verbal saat ingin menyesuaikan kembali nilai
              tukar.
            </p>
            <p>
              Terkadang, bank sentral berpikir bahwa nilai mata uang terlalu
              tinggi atau terlalu rendah, sehingga mereka memulai operasi jual
              maupun beli secara besar-besaran untuk mengubah nilai tukar.
            </p>
          </Section>
          <Section>
            <Heading number='4' heading='Spekulan' />
            <p>
              “Masuk menang, masuk menang, masuk menang” adalah jampi-jampi
              jenis trader ini.
            </p>
            <p>
              Hampir 90% dari volume perdagangan, spekulan sebagai pemain forex
              datang dalam segala bentuk dan ukuran.
            </p>
            <p>
              Sebagian memiliki kantong tebal, sebagian tidak, namun tujuan
              utama terlibat dalam trading forex tidak berbeda untuk
              menghasilkan banyak uang.
            </p>
            <p>
              Jangan khawatir! Setelah lulus dari kelas Pipsology ini, Anda
              dapat menjadi bagian dari mereka! Hal lain, bagaimana bisa menjadi
              salah satu dari mereka, jika Anda bahkan belum menelusuri
              sejarahnya!
            </p>
          </Section>
        </div>
      </article>
    </Container>
  )
}

export default PartisipanPemainForex
