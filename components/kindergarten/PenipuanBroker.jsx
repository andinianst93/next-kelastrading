import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const PenipuanBroker = () => {
  return (
    <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='judul' />
        <Header
          title='Tentang Hello'
          description='Platform Informasi yang khusus membahas hal-hal seputar Digital Marketing yakni Search Engine Optimization (SEO), Media Sosial, Digital Ads, dan Web Development.'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC toc1='Bandingkan feed harga' toc2='Catat Semuanya' toc3='Mengajukan tindakan hukum' toc4='Kebiasaan trading yang baik' />
        <div className='partcon'>
            <Section>
            <p>Meskipun Anda mungkin merasa seperti kurcaci di tengah broker-broker besar, itu tidak berarti
                        harus menerima penipuan dan ketidakadilan!</p>
                    <p>Jangan berkecil hati jika broker tersebut mendapatkan semua keuntungan, Ada beberapa langkah
                        sederhana untuk membantu peluang anda.</p>
            </Section>
          <Section>
            <Heading number='1' heading='Bandingkan feed harga' />
            <p>Bayangkan seekor kuda dengan penutup mata. Penglihatan kuda ini terbatas pada apa yang ada di
                        depannya.</p>
                    <p>Jika ada rintangan di depan, kuda tidak punya pilihan lain selain mengerahkan tenaga untuk
                        melompati rintangan itu. Sangat melelahkan!</p>
                    <p>Jika hanya menggunakan harga pada platform trading, layaknya melakukan trading seperti kuda
                        dengan penutup mata.</p>
                    <p>Anda tidak tahu apa yang sedang terjadi di pasar, karena membatasi diri pada feed harga broker.
                    </p>
                    <p>Jika broker memilih untuk memperluas spread, memanipulasi kurs, dan menjalankan stop loss, Anda
                        tidak akan mengetahui apakah pergerakan itu menyerupai pasar umum atau tidak.</p>
                    <p>Menjadi seekor kuda buta yang tidak dapat melihat ke depan. jika Anda adalah trader yang cerdas,
                        tentu ingin memiliki pangetahuan pasar yang selengkap mungkin.</p>
                    <p>Cara terbaik adalah berlangganan feed harga kedua, ketiga, atau bahkan keempat. Dengan begitu,
                        Anda akan mendapatkan pandangan lain tentang pasar dan memiliki peluang untuk mengonfirmasi
                        apakah harga benar-benar bergerak sedemikian rupa.</p>
          </Section>
          <Section>
            <Heading number='2' heading='Catat Semuanya' />
            <p>Selalu simpan jurnal yang melacak SEMUA transaksi! Selalu, selalu, selalu! Seperti di ruang
                        sidang, harus ada bukti untuk membuat sebuah kasus. Anda mungkin MERASA dicurangi, tetapi jika
                        tidak memiliki pegangan apapun untuk mendukung pernyataan anda, maka perasaan dicurangi hanya
                        sekedar perasaan belaka.</p>
                    <p>Ambil screenshot dari setiap order yang ditransaksikan atau aktivitas broker yang mencurigakan,
                        seperti feed harga yang aneh.</p>
                    <p>Hal ini akan berguna jika telah menjadi korban penipuan. Dengan melacak setiap transaksi, akan
                        selalu memiliki bukti yang diperlukan untuk mendukung setiap kasus sebagai alat untuk mendapat
                        pertanggungjawaban dari broker.</p>
          </Section>
          <Section>
            <Heading number='3' heading='Mengajukan tindakan hukum' />
            <p>Jika tidak dapat menyelesaikan konflik dengan broker, maka sudah saatnya mengambil tindakan
                        hukum. Kebanyakan broker akan menyerah ketika dihadapkan dengan ancaman ini, atau Anda dapat
                        mendekati Komisi Perdagangan Berjangka Komoditas atau National Futures Associations (NFA).</p>
                    <p>CFTC memiliki program Reparasi yang menyediakan “forum murah, cepat, adil, dan tidak memihak
                        untuk menangani keluhan Nasabah. Anda dapat memeriksa program mereka di sini.</p>
                    <p>Demikian juga, NFA memiliki program mediasi yang membantu menyelesaikan kasus. Untuk informasi
                        lebih lanjut, silakan kunjungi situs web NFA.</p>
          </Section>
          <Section>
            <Heading number='4' heading='Kebiasaan trading yang baik' />
            <p>Sebagai orang yang punya disipilin diri layaknya Biarawan, Anda harus mengembangkan kebiasaan
                        trading yang baik. Kami tahu bahwa lelucon ini tidak masuk akal, tetapi itu terdengar baik dan
                        bisa dicoba.</p>
                    <p>Bagaimanapun, bahkan dengan senjata yang tepat untuk melindungi diri dari broker jahat, hal
                        terpenting adalah tetap menjadi trader yang baik.</p>
                    <p>Tidak peduli seberapa canggih sebuah aplikasi, tidak peduli berapa banyak waktu yang dihabiskan
                        untuk menemukan broker yang tepat, tidak peduli seberapa rumitnya sistem trading, tanpa disiplin
                        yang ketat, pada akhirnya akan kalah.</p>
                    <p>Sangat mudah untuk menyalahkan broker, tetapi pada akhirnya, ini semua adalah pilihan Anda dengan
                        tujuan finansial yang sudah direncanakan sebelumnya.</p>
          </Section>
        </div>
      </article>
    </Container>
  )
}

export default PenipuanBroker
