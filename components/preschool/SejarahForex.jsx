import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const SejarahForex = () => {
  return (
    <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb
          title1='Akademi'
          title2='Kelas Trading'
          title3='Sejarah Awal Trading Forex'
        />
        <Header
          title='Sejarah Awal Trading Forex'
          description='Pelajari sejarah awal trading forex dari zaman kuno hingga era modern. Temukan asal-usul pasar valuta asing dan bagaimana perdagangan mata uang berkembang menjadi industri global yang besar seperti saat ini.'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC
          toc1='Broker forex ritel'
          toc2='Market makers'
          toc3='Electronic Communication Network ( ECN )'
        />
        <div className='partcon'>
          <Section>
            <p>
              Akhir perang dunia kedua, seluruh dunia mengalami kekacauan parah
              sehingga pemerintah negara-negara barat memerlukan sebuah sistem
              agar ekonomi global kembali stabil.
            </p>
            <p>
              Dikenal dengan nama “Bretton Woods System”, sebuah perjanjian yang
              menetapkan nilai patok dolar AS terhadap emas. Dimana semua nilai
              tukar mata uang juga disandingkan dengan dolar AS.
            </p>
            <p>
              Sistem ini membuat nilai tukar stabil untuk beberapa saat, namun
              seiring pertumbuhan ekonomi makro dunia mulai berubah dan
              berkembang dalam kecepatan yang berbeda, sistem Bretton wood
              sesegera mungkin menjadi “kolot” dan ditinggalkan.
            </p>
            <p>
              <img
                class='partimg'
                src='https://www.hsb.co.id/learn/images/bretton-woods.jpg'
              />
            </p>
            <p>
              Tibalah saatnya pada tahun 1971, sistem Bretton Woods Agreement
              dihancurkan dan diganti oleh sistem kurs mata uang berbeda.
            </p>
            <p>
              Dengan dolar AS tidak lagi dipatok, pasar mata uang berevolusi
              menjadi kurs bebas, dimana nilai tukar tergantung pada penawaran
              dan permintaan.
            </p>
            <p>
              Awalnya sangat sulit untuk menentukan nilai tukar secara seimbang,
              namun perkembangan teknologi dan komunikasi membuat segalanya
              menjadi lebih mudah.
            </p>
            <p>
              Begitu memasuki tahun 90-an, berkat perkembangan teknologi,
              komputer dan internet berkembang secara pesat, bank-bank mulai
              menciptakan platform perdagangan secara mandiri.
            </p>
            <p>
              Platform ini dirancang untuk mengalirkan penawaran langsung ke
              nasabah sehingga nasabah dapat langsung melakukan perdagangan
              sendiri.
            </p>
            <p>
              Sementara itu, beberapa teknologi pemasaran dengan haluan bisnis
              memperkenalkan platform perdagangan berbasis internet untuk
              pedagang individu yang dikenal sebagai "broker forex ritel",
              entitas ini memudahkan individu untuk berdagang dengan ukuran
              kontrak yang lebih kecil.
            </p>
            <p>
              Tidak seperti pasar inter-bank di mana ukuran perdagangan standar
              adalah satu juta unit, broker ritel menawarkan standar dagang
              sedikitnya 1000 unit!
            </p>
          </Section>
          <Section>
            <Heading number='1' heading='Broker forex ritel' />
            <p>
              Di masa lalu, hanya spekulan besar dengan modal dana besar yang
              dapat melakukan trading mata uang, namun berkat adanya broker
              forex ritel dan internet, ini bukan masalah lagi bagi trader
              kecil.
            </p>
            <p>
              Dengan hampir tidak ada hambatan untuk entri market, siapapun bisa
              terhubung dengan broker, membuka akun, menyetor uang bisa
              berdagang forex dengan nyaman, dimana saja kapan saja!
            </p>
            <p>Pialang pada dasarnya datang dalam dua bentuk:</p>
            <ol>
              <li>
                Market makers atau pembuat pasar, seperti namanya "membuat"
                mereka menetapkan penawaran dan permintaan harga secara mandiri.{' '}
              </li>
              <li>
                Jaringan Komunikasi Elektronik (ECN), dimana menggunakan
                penawaran dan permintaan harga yang tersedia dari berbagai
                lembaga di pasar interbank.
              </li>
            </ol>
          </Section>
          <Section>
            <Heading number='2' heading='Market makers' />
            <p>
              Bila anda mengunjungi sebuah negara, contohnya Perancis, agar
              dapat bertransaksi di negara itu, anda perlu menukarkan mata uang
              euro terlebih dahulu di bank atau kantor penukaran mata uang asing
              terdekat. Mereka akan menerima sisi lain dari transaksi yang
              dilakukan, anda juga harus setuju untuk menukar mata uang di
              tangan anda dengan harga euro yang sudah mereka tetapkan.
            </p>
            <p>
              Seperti halnya transaksi bisnis dengan sesuatu dibaliknya. Dalam
              kasus pasar forex akan ditentukan dengan selisih harga beli dan
              jual atau biasa disebut bid/ask spread.
            </p>
            <p>
              Contohnya, jika harga beli (bid) dari bank untuk EUR/USD adalah
              1.2000 dan harga jualnya (ask) adalah 1.2002, maka spread bid/ask
              adalah 0.0002.
            </p>
            <p>
              Meskipun kelihatannya kecil, namun jika ada jutaan transaksi forex
              seperti ini setiap hari, maka keuntungan para pembuat pasar akan
              lebih besar!
            </p>
            <p>
              Market makers dengan kata lain adalah fondasi utama dalam pasar
              forex.
            </p>
            <p>
              Market-makers akan menyediakan likuiditas dengan “mengemas ulang”
              ukuran kontrak besar dari “grosir mata uang” menjadi ukuran yang
              lebih kecil. Tanpa mereka, akan sangat sulit bagi orang kecil
              seperti kita untuk menjalani trading forex.
            </p>
          </Section>
          <Section>
            <Heading
              number='3'
              heading='Electronic Communication Network ( ECN )'
            />
            <p>
              ECN atau disebut Jaringan Komunikasi Elektronik adalah sebuah
              sistem elektronik yang dirancang untuk menjembatani trader-trader
              forex agar bisa terjun langsung ke pasar likuiditas. Dimana dalam
              hal ini Broker ECN secara otomatis memasangkan order jual dan beli
              dengan tampilan harga.
            </p>
            <p>
              Harga ini dikumpulkan dari pembuat pasar, bank yang berbeda bahkan
              trader lain yang juga menggunakan ECN.
            </p>
            <p>
              Kapanpun ketika order jual atau beli telah dibuat, akan langsung
              dipasangkan dengan harga bid/ask terbaik di luar sana.
            </p>
            <p>
              Karena kemampuan trader mengatur harga mereka sendiri, broker ECN
              biasanya mengenakan biaya komisi yang sangat kecil untuk setiap
              transaksi.
            </p>
            <p>
              Kombinasi dari spread yang ketat dan kecilnya komisi, biasanya
              membuat biaya transaksi lebih murah dengan broker ECN.
            </p>
            <p>
              Tentu saja, masih belum cukup dengan hanya mengenal “orang-orang
              besar” di bisnis ini. Seperti yang dikatakan oleh Big Pippin,
              “trading memerlukan waktu”. Kapan bertrading dengan tepat?
            </p>
          </Section>
        </div>
      </article>
    </Container>
  )
}

export default SejarahForex
