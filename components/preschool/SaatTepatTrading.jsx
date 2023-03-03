import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const SaatTepatTrading = () => {
  return (
    <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='Saat yang Tepat Untuk Trading' />
        <Header
          title='Saat yang Tepat Untuk Trading'
          description='Pelajari kapan waktu yang tepat untuk melakukan trading. Baca artikel ini untuk mengetahui strategi dan tips untuk meningkatkan peluang profit Anda dalam berinvestasi.'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC toc1='Tumpang tindih Tokyo - London' toc2='Tumpang tindih London - New York'/>
        <div className='partcon'>
            <Section>
            <p>Acara Quizzz! Jam berapa ketika rating TV sedang tinggi-tingginya? Jika menjawab selama jam
                        tayang utama, Anda benar!</p>
                    <p>Apa hubungan Acara TV dengan sesi trading? Seperti halnya TV, “peringkat” (likuiditas) mencuat
                        ketika ada lebih banyak orang berpartisipasi
                        di pasar forex.</p>
                    <p>logikanya, Anda akan berpikir bahwa ini terjadi selama tumpang-tindih antara dua sesi.</p>
                    <p>Jika berpikiran seperti itu, Anda hanya separuh benar.</p>
                    <p>Mari kita bahas beberapa karakteristik dari dua sesi yang tumpang-tindih untuk mengetahui
                        alasannya.</p>
            </Section>
          <Section>
            <Heading number='1' heading='Tumpang tindih Tokyo - London' />
            <p>Likuiditas selama sesi ini cukup tipis karena beberapa alasan. Biasanya, tidak ada banyak gerakan
                        selama sesi Asia hingga sore hari, dan ini
                        membosankan. Zzzzzz.</p>
                    <p>Dengan trader Eropa yang baru mulai masuk ke kantor mereka, trading bisa membosankan karena
                        likuiditas mengering.</p>
                    <p>Ini akan menjadi waktu yang ideal untuk santai, bermain game atau mencari perdagangan potensial
                        pada sesi London dan New York.</p>
                   
          </Section>
          <Section>
            <Heading number='2' heading='Tumpang tindih London - New York' />
                    <p>Ini saatnya perang sesungguhnya dimulai! Anda akan mendengar para trader menggeretakkan jari-jari
                        mereka!</p>
                    <p>Sesi ini waktu tersibuk setiap hari, karena para trader dari dua pusat keuangan terbesar (London
                        dan New York) mulai berkutat dalam bisnis.
                    </p>
                    <p>Selama jam dagang ini Anda akan melihat beberapa gerakan besar, terutama ketika laporan berita
                        dari AS dan Kanada dirilis.</p>
                    <p>Pasar juga bisa dilanda berita "terlambat" yang dirilis dari Eropa.</p>
                    <p>Jika ada tren yang terbentuk selama sesi Eropa, kita bisa melihat trend berlanjut, karena para
                        trader AS memutuskan untuk masuk dan
                        menetapkan posisi mereka setelah membaca apa yang terjadi pada hari sebelumnya.</p>
                    <p>Anda harus berhati-hati pada akhir sesi ini, karena beberapa trader Eropa mungkin akan menutup
                        posisi mereka yang dapat menyebabkan beberapa
                        pergerakan berombak tepat sebelum waktu makan siang di AS.</p>
                   
          </Section>
        </div>
      </article>
    </Container>
  )
}

export default SaatTepatTrading
