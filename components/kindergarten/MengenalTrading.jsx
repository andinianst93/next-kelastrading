import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const MengenalTrading = () => {
  return (
    <Container>
    <section className='bg-[#00028f] w-full pt-12'>
      <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='Mengenal Trading: Sejarah, Penemu, Dan Cara Kerjanya' />
      <Header
        title='Mengenal Trading: Sejarah, Penemu, Dan Cara Kerjanya'
        description='Pelajari sejarah, penemu, dan cara kerja trading dengan artikel informatif kami. Dapatkan pemahaman yang lebih baik tentang perdagangan pasar keuangan dan bagaimana hal itu dapat mempengaruhi investasi Anda.'
      />
    </section>
    <article className='py-4 px-8 mx-auto max-w-screen-lg'>
      <TOC toc1='number' toc2='number' />
      <div className='partcon'>
        <Section>
        <p>Setelah sedikit banyaknya tahu tentang forex, mungkin Anda sudah tidak sabar ingin mulai
                        berpetualang.</p>
                    <p>Sebelum melangkah, Anda memerlukan satu hal lagi ... Akun RIIL dari Platform!</p>
                    <p>Tentu, kami ingin Anda bekerja sama dengan broker yang menyediakan layanan untuk kebutuhan
                        trading dengan mempertimbangkan hal-hal tertentu!</p>
                    <p>Pertama-tama, tinjau kembali bagaimana Anda mencari tahu seluk-beluk sebuah broker.</p>
                    <p>Sebut saja mungkin dari Internet, YouTube, Facebook, Netflix, BabyPips.com ... mengesankan!</p>
                    <p>Tapi yang ingin kami bahas adalah persembahan terbesar dalam dunia investasi bagi pecandu forex
                        seperti kita yaitu Forex Trading Retail!</p>
                    <p>Faktanya, pecandu forex mungkin tidak akan pernah ada tanpa broker forex online.</p>
                    <p>Pada tahun 90-an, jauh lebih sulit untuk berpartisipasi dalam pasar forex retail karena biaya
                        transaksi yang tinggi.</p>
                    <p>Pada saat itu, dibawah aturan yang ketat, Pemerintah mengawasi setiap pertukaran mata uang dan
                        membatasi kegiatan trading. Selang beberapa waktu, muncullah CFTC yang mengoreksi regulasi
                        pemerintah harus memberi ruang untuk kegiatan trading.</p>
                    <p>Mereka mendiskusikan beberapa aturan, yaitu Undang-Undang tentang Pertukaran Komoditas dan
                        Undang-Undang Modernisasi Kontrak Berjangka, dan membuka pintu bagi para broker forex online ke
                        depan.</p>
                    <p>Hampir semua orang di dunia memiliki akses internet saat ini, sehingga terbilang mudah dan nyaman
                        untuk membuka akun trading dengan broker forex online.</p>
                    <p>Saat ini broker forex online mulai bermunculan di berbagai negara, yang mendorong untuk mengambil
                        keuntungan dari kegiatan trading yang sedang marak.</p>
                    <p>Namun dengan banyaknya pilihan di luar sana, sedikit rumit untuk membedakan antara broker yang
                        legal dan ilegal.</p>
                    <p>Ini bukan bercanda, kenyataannya memang terdapat broker ilegal yang juga dikenal sebagai
                        bucket-shops, kami akan membahasnya setelah ini.</p>
        </Section>
       
      </div>
    </article>
  </Container>
  )
}

export default MengenalTrading
