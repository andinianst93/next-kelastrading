import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const BiddanAskTrading = () => {
  return (
    <Container>
    <section className='bg-[#00028f] w-full pt-12'>
      <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='Trading Forex: Bid dan Ask Mata Uang Kutipan' />
      <Header
        title='Trading Forex: Bid dan Ask Mata Uang Kutipan'
        description='Pelajari tentang istilah Bid dan Ask dalam trading forex dan bagaimana mereka memengaruhi kutipan mata uang. Pahami cara menggunakan informasi ini untuk membuat keputusan trading yang lebih baik.'
      />
    </section>
    <article className='py-4 px-8 mx-auto max-w-screen-lg'>
      <TOC toc1='Mata uang major dan mata uang minor' toc2='Mata uang dasar' toc3='Quote Currency' toc4='Pipette' toc5='Bid Price' toc6='Ask/Offer Price' toc7='Bid-Ask Spread' toc8='Konvensi kutipan' toc9='Biaya transaksi' toc10='Cross Currency' toc11='Margin' toc12='Leverage'/>
      <div className='partcon'>
        <Section>
        <p>Seperti halnya mempelajari keahlian baru, tidak ada salahnya mempelajari kosakata forex jika
                        hendak mencuri perhatian orang lain ataupun pasangan. Sebagai pemula, pahami istilah-istilah
                        tertentu sebelum melanjutkan langkah trading Anda.</p>
                  
        </Section>
        <Section>
          <Heading number='1' heading='Mata uang major dan mata uang minor' />
          <p>Delapan mata uang yang paling sering diperdagangkan adalah USD, EUR, JPY, GBP, CHF, CAD, NZD, dan
                        AUD yang disebut sebagai mata uang utama atau “majors”. 8 Mata uang ini memiliki likuiditas
                        lebih tinggi.</p>
                    <p>Mata uang selain yang disebutkan tadi disebut mata uang minor.</p>
        </Section>
        <Section>
          <Heading number='2' heading='Mata uang dasar' />
          <p>Mata uang dasar adalah mata uang pertama dalam pasangan mata uang apa pun. Kutipan/kuotasi mata
                        uang menunjukkan berapa nilai mata uang dasar yang diukur terhadap mata uang kedua.</p>
                    <p>Misalnya, jika kurs USD / CHF sama dengan 1.6350, maka 1 USD bernilai 1.6350 CHF.</p>
                    <p>Di pasar forex, dolar AS biasanya dianggap sebagai mata uang "dasar" untuk kutipan, artinya
                        kutipan dinyatakan sebagai unit sebesar 1 USD per mata uang lain yang dikutip dalam pasangan.
                    </p>
                    <p>Pengecualian untuk aturan ini adalah pound Inggris, Euro, dolar Australia dan Selandia Baru.</p>
        </Section>
        <Section>
          <Heading number='3' heading='Quote Currency' />
          <p>Atau disebut mata uang pembanding adalah mata uang kedua dengan pasangan mata uang apa pun.
                        Sering disebut mata uang pip dengan keuntungan atau kerugian belum direalisasikan dalam mata
                        uang ini.</p>
        </Section>
        <Section>
          <Heading number='4' heading='Pip' />
          <p>Pip adalah satuan nilai harga terkecil untuk mata uang apa pun.</p>
                    <p>Hampir semua pasangan mata uang terdiri dari lima digit signifikan dan sebagian besar pasangan
                        memiliki titik desimal setelah digit pertama, yaitu EUR / USD sama dengan 1.2538.</p>
                    <p>Dalam contoh ini, satu pip sama dengan perubahan terkecil di posisi desimal keempat - yaitu,
                        0.0001. Oleh karena itu, jika kutipan mata uang apapun berpasangan dengan USD, maka 1 pip selalu
                        sama dengan 1/100 sen.</p>
                    <p>Pengecualian pada pair dengan Yen Jepang di mana pip sama dengan 0.01.</p>
        </Section>
        <Section>
          <Heading number='5' heading='Pipette' />
          <p>Artinya Sepersepuluh pip. Beberapa broker mengutip pip fraksional atau pipette untuk menambah
                        presisi tarif kutipan.</p>
                    <p>Misalnya, jika EUR / USD bergerak dari 1.32156 ke 1.32158, itu akan memindahkan 2 pipette.</p>
                    <h2>Bid Price</h2>
                    <p>Bid price adalah harga di mana pasar disiapkan untuk membeli pasangan mata uang tertentu di pasar
                        forex. Pada harga ini, trader dapat menjual mata uang dasar yang ditunjukkan di sebelah kiri
                        kutipan mata uang. </p>
                    <p>Misalnya, dalam rate GBP/USD 1.8812/15, harga bid adalah 1.8812. Artinya Anda menjual 1 pound
                        Inggris untuk 1.8812 dolar AS.</p>
        </Section>
        <Section>
          <Heading number='6' heading='Ask/Offer Price' />
          <p>Ask/offer adalah harga di mana pasar dipersiapkan untuk menjual pasangan mata uang tertentu di
                        pasar forex. Pada harga ini, Trader dapat membeli mata uang dasar yang ditunjukkan di sebelah
                        kanan kutipan.</p>
                    <p>Misalnya, dalam rate EUR / USD 1.2812/15, harga ask adalah 1.2815. Ini berarti Anda dapat membeli
                        satu euro untuk 1.2815 dolar AS. </p>
        </Section>
        <Section>
          <Heading number='7' heading='Bid-Ask Spread' />
          <p>Spread adalah perbedaan nilai antara bid dan ask price.</p>
                    <p>“Big figure quote” adalah ungkapan dealer yang mengacu pada beberapa digit pertama dari nilai
                        tukar. Digit ini sering dihilangkan dalam penawaran dealer.</p>
                    <p>Misalnya, kurs USD/JPY adalah 118.30/118.34, tetapi akan dikutip secara verbal tanpa tiga digit
                        pertama sebagai “30/34.”</p>
                    <p>Dalam contoh ini, USD / JPY memiliki spread 4-pip.</p>
        </Section>
        <Section>
          <Heading number='8' heading='Konvensi kutipan' />
          <p>Nilai tukar yang dinyatakan dengan menggunakan format berikut:</p>
                    <p>Mata uang dasar / Mata uang kutipan (pembanding) = bid / ask</p>
        </Section>
        <Section>
          <Heading number='9' heading='Biaya transaksi' />
          <p>Karakteristik dari bid / ask spread juga merupakan biaya transaksi untuk setiap round-turn.</p>
                    <p><strong>Round-turn</strong> berarti transaksi beli (atau jual) dan transaksi jual (atau beli)
                        yang diimbangi dengan ukuran yang sama dalam pasangan mata uang yang sama.</p>
                    <p>Misalnya, dalam kasus kurs EUR/USD di 1.2812/15, biaya transaksi adalah tiga pip.</p>
                    <p>Rumus untuk menghitung biaya transaksi adalah:</p>
                    <p>Biaya transaksi (spread) = Ask price - Bid price</p>
        </Section>
        <Section>
          <Heading number='10' heading='Cross Currency' />
          <p>Cross currency atau pair mata uang silang adalah pasangan manapun tidak termasuk dolar AS.
                        Pasangan ini menunjukkan perilaku harga yang tidak menentu karena trader telah memulai dua
                        perdagangan dengan USD.</p>
                    <p>Misalnya, ketika membeli EUR / GBP setara dengan membeli pasangan mata uang EUR/USD dan menjual
                        GBP/USD. Pasangan mata uang silang seringkali mengenakan biaya transaksi yang lebih tinggi.</p>
        </Section>
        <Section>
          <Heading number='11' heading='Margin' />
          <p>Ketika membuka sebuah akun baru, trader harus menyetor jaminan dengan jumlah minimum kepada
                        broker.</p>
                    <p>Jumlah minimum tergantung ketentuan masing-masing broker dengan kemungkinan nilai serendah $ 100
                        atau setinggi $100,000.</p>
                    <p>Setiap kali melakukan transaksi, jumlah persentase tertentu dari saldo akun margin akan
                        disisihkan sebagai persyaratan margin awal/ jaminan.</p>
                    <p>Jumlahnya didasari pada harga pasangan mata uang yang menjadi acuan harga saat itu dan jumlah lot
                        yang diperdagangkan. Ukuran lot selalu mengacu pada mata uang dasar.</p>
                    <p>Sebagai contoh, katakanlah Anda membuka akun mini dengan leverage 200:1 atau margin 0.5%. Akun
                        mini ditransakssikan dengan lot mini. Katakanlah satu lot mini sama dengan $10,000.jika membuka
                        satu lot mini alih-alih harus membayar utuh $10,000, sebaliknya Anda hanya butuh $50 ($10,000 x
                        0.5% = $50).</p>
        </Section>
        <Section>
          <Heading number='12' heading='Leverage' />
          <p>Leverage atau daya ungkit adalah rasio dari jumlah modal yang digunakan dalam transaksi dengan
                        uang jaminan (margin) yang diperlukan.</p>
                    <p>Ini adalah kemampuan mengendalikan sejumlah besar dana dengan jumlah modal yang relatif kecil.
                    </p>
                    <p>Ukuran leverage bervariasi dari masing-masing broker, mulai dari 2:1 hingga 500:1.</p>
                    <p>Jika istilah forex sudah menjadi daya tarik Anda, saatnya tunjukkan kepada orang-orang di sekitar
                        Anda dengan tipe-tipe trader.</p>
        </Section>
      </div>
    </article>
  </Container>
  )
}

export default BiddanAskTrading
