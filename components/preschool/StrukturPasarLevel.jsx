import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const StrukturPasarLevel = () => {
  return (
    <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb
          title1='Akademi'
          title2='Kelas Trading'
          title3='Struktur Pasar & Level Trading Forex '
        />
        <Header
          title='Struktur Pasar & Level Trading Forex '
          description='Jelajahi struktur pasar dan level trading forex untuk meningkatkan pemahaman Anda tentang dinamika pasar dan strategi trading yang efektif. Cari tahu informasi selengkapnya di sini.'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC
          toc1='Trading forex bersifat desentralisasi'
          toc2='Tingkat strata pasar forex'
        />
        <div className='partcon'>
          <Section>
            <p>
              Sebagai perbandingan, mari kita lihat sebuah pasar yang familiar
              bagi kebanyakan orang, yaitu pasar saham.
            </p>
            <p>
              Dibawah Ini adalah struktur pasar saham sebagaimana yang terlihat:
            </p>
            <p>
              <img
                class='partimg'
                alt='sentralisasi pasar finansial'
                src='https://www.hsb.co.id/learn/images/pre-school-centralized-market-thumbnail.png'
              />
            </p>
            <p>
              Kondisi pasar saham cenderung dapat dimonopoli, hanya tersedia
              satu entitas, satu spesialis yang mengontrol harga.
            </p>
            <p>
              Semua transaksi harus melalui spesialis ini. Karena hal ini, harga
              dapat dengan mudah dimanipulasi demi keuntungan spesialis tersebut
              dan bukan demi para trader.
            </p>
            <p>Bagaimana ini terjadi?</p>
            <p>
              Dalam pasar saham, spesialis dipaksa untuk memenuhi order
              kliennya. Coba bayangkan jumlah penjual tiba-tiba melebihi jumlah
              pembeli.
            </p>
            <p>
              Spesialis yang dipaksa untuk memenuhi order kliennya, dalam kasus
              dimana sebagai penjual, memiliki setumpuk saham yang tidak dapat
              ia jual ke pembeli.
            </p>
            <p>
              Untuk mencegah hal ini, spesialis akan memperlebar spread atau
              menaikkan biaya transaksi untuk mencegah penjual memasuki pasar.
            </p>
            <p>
              Dengan kata lain, spesialis dapat memanipulasi kuotasi yang
              ditawarkan untuk memenuhi kebutuhan dirinya sendiri.
            </p>
          </Section>
          <Section>
            <Heading
              number='1'
              heading='Trading forex bersifat desentralisasi'
            />
            <p>
              Berbeda dengan trading saham atau futures, trading forex tidak
              membutuhkan pusat bursa seperti New York Stock Exchange yang hanya
              memiliki/menawarkan satu harga.
            </p>
            <p>
              Dalam pasar forex, tidak ada harga tunggal untuk mata uang
              tertentu tentu saja ini berarti penawaran dari dealer mata uang
              berbeda-beda.
            </p>
            <p>
              <img
                class='partimg'
                alt='desentralisasi pasar finansial'
                src='https://www.hsb.co.id/learn/images/pre-school-decentralized-market-thumbnail.png'
              />
            </p>
            <p>
              Inilah yang membuat pasar forex begitu luar biasa! Pasar yang
              sangat besar dengan persaingan antar dealer sangat ketat sehingga
              Nasabah mendapatkan penawaran terbaik setiap saat. Siapa yang
              tidak menginginkan ini?
            </p>
            <p>
              Satu hal lagi tentang trading forex adalah Nasabah dapat
              melakukannya trading kapan dan di mana saja!{' '}
            </p>
          </Section>
          <Section>
            <Heading number='2' heading='Tingkat strata pasar forex' />
            <p>
              Meskipun pasar forex bersifat desentralisasi, bukan berarti tidak
              diregulasi sepenuhnya!
            </p>
            <p>
              Para peserta pasar dapat diatur ke dalam sebuah susunan. Untuk
              lebih memahami apa yang dimaksud, berikut ini ilustrasinya:
            </p>
            <p>
              <img
                class='partimg'
                alt='hirarki pasar forex'
                src='https://www.hsb.co.id/learn/images/pre-school-fx-ladder.png'
              />
            </p>
            <p>
              Di strata puncak terdapat pasar interbank. Terdiri dari bank-bank
              besar dunia dan beberapa bank kecil, para peserta pasar ini
              berdagang langsung satu sama lain secara on-line melalui
              Electronic Brokering Services (EBS) atau Reuters Dealing 3000-Spot
              Matching.
            </p>
            <p>
              Persaingan antar dua perusahaan - EBS dan Reuters Dealing
              3000-spot matching - sama seperti persaingan Coca-Cola dan Pepsi.
            </p>
            <p>
              Mereka terus berjuang dan terus mencoba untuk saling meningkatkan
              pangsa pasar dengan menawarkan sebagian besar pasangan mata uang
              dengan satu sisi mata uang yang lebih likuid.
            </p>
            <p>
              Produk likuid dari platform EBS adalah pasangan mata uang EUR /
              USD, USD / JPY, EUR / JPY, EUR / CHF, dan USD / CHF. Sementara
              itu, Produk liduid dari platform Reuters adalah GBP / USD, EUR /
              GBP, USD / CAD, AUD / USD, dan NZD / USD.
            </p>
            <p>
              Semua bank yang merupakan bagian dari pasar dapat melihat harga
              yang ditawarkan satu sama lain, tetapi tidak berarti bahwa siapa
              saja dapat melakukan transaksi pada harga tersebut.
            </p>
            <p>
              Seperti dalam kehidupan nyata, nilai tukar sangat tergantung pada
              hubungan kontrak kredit yang telah terjalin antar pihak dagang.
              terdapat beberapa nama yang diberikan seperti "harga untuk
              sahabat" "harga untuk pelanggan" dan lain-lain.
            </p>
            <p>
              Seperti contohnya saat mengajukan pinjaman di bank-bank lokal
              Semakin baik kredit dan reputasi anda dengan mereka, semakin bagus
              suku bunga dan pinjaman lebih besar yang tersedia untuk ada.
            </p>
            <p>
              Di strata menengah terdapat hedge funds, perusahaan, pembuat pasar
              ritel, dan ritel ECN. karena lembaga-lembaga ini tidak memiliki
              hubungan kredit yang dekat dengan partisipan pasar interbank,
              lembaga ini harus melakukan transaksi melalui bank-bank komersial.
              Ini artinya suku bunga mereka lebih tinggi dan lebih mahal
              daripada mereka yang merupakan bagian dari pasar interbank.
            </p>
            <p>
              Di strata paling bawah adalah retail-trader. Dulu sangat sulit
              bagi kita masyarakat kecil bisa terlibat dalam pasar forex, tetapi
              berkat munculnya internet, trading elektronik dan broker ritel,
              kesulitan untuk entri market agar bisa bertrading telah
              dihilangkan. Ini memberikan kesempatan pada nasabah untuk
              berhubungan dengan puncak strata.
            </p>
            <p>
              Sekarang setelah mengetahui struktur pasar forex, mari kami bawa
              anda bagaimana permainan pasar forex!
            </p>
          </Section>
        </div>
      </article>
    </Container>
  )
}

export default StrukturPasarLevel
