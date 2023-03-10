import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const JenisChartPattern = () => {
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
      <TOC toc1='Line Chart' toc2='Bar Chart' toc3='Candlesticks Chart'/>
      <div className='partcon'>
        <Section>
            <p>
            Terdapat beberapa macam forex chart yang perlu Anda ketahui. Mari lihat tiga tipe chart forex yang paling populer:
            </p>
            <ul>
                <li>Line chart</li>
                <li>Bar chart</li>
                <li>Candlestick chart</li>
                <p>Sekarang, kami akan menjelaskan setiap forex chart dan memberikan informasi pada Anda tentang setiap chart. 
</p>
            </ul>
        </Section>
        <Section>
          <Heading number='1' heading='Line Chart' />
          <img src="https://www.hsb.co.id/learn/images/pre-school-line-chart.png" alt="chart pattern" className='partimg' />
          <p>Line chart sederhana menggambarkan garis dari satu closing price menuju closing price selanjutnya. Ketika dirangkai bersama dengan garis, kita dapat melihat pergerakan harga umum dengan pasangan mata uang selama periode waktu tertentu.&nbsp;</p>
<p>Berikut adalah contoh dari line chart untuk EUR/USD:</p>

        </Section>
        <Section>
          <Heading number='2' heading='Bar Charts' />
    <p>Bar Chart jauh lebih kompleks karena menunjukkan harga opening&nbsp;dan&nbsp;closing, begitu juga harga&nbsp;tertinggi&nbsp;dan&nbsp;terendahnya. Bagian bawah dari bar vertikal menunjukkan harga trading terendah untuk periode waktu tertentu dan bagian atas bar menunjukkan harga tertinggi. &nbsp;Vertical bar juga menunjukkan rentang waktu trading pasangan mata uang secara keseluruhan.</p>
<p>Horizontal hash di sisi kiri dari bar adalah harga pembuka, dan horizontal hash sebelah kanan merupakan harga penutupan.&nbsp;</p>
<p>Berikut adalah contoh dari chart bar untuk EUR/USD:</p>
<img src="https://www.hsb.co.id/learn/images/pre-school-bar-chart.png" alt="bar chart" className='partimg' />
<p>Anda akan melihat kata &ldquo;bar&rdquo; dalam referensi untuk menunjukkan harga tunggal dari data pada chart. Pada dasarnya, Bar dalam chart mengindikasikansegmen waktu, baik itusatu hari, satu minggu, ataupun satu jam. Selanjutnya ketika Anda melihat kata &lsquo;bar&rsquo;, pahamilah rentang waktu yang ditunjukkannya.&nbsp;</p>
<p>Bar chart juga disebut sebagai chart &ldquo;OHLC&rdquo;, karena mereka mengindikasikan Harga Open (harga pembukaan), Harga &nbsp;High (harga tertinggi), Harga Low (harga terendah), dan Harga Close (harga penutupan) untuk mata uang tertentu.&nbsp;</p>
<p>Berikut adalah contoh dari price bar:&nbsp;</p>
<img src="https://www.hsb.co.id/learn/images/kindergarten-ohlc-price-bar.png" alt="open high low close bar" className='partimg' />
<p>Open: Garis horizontal kecil pada bagian kiri adalah opening price</p>
<p>High: Garis vertikal pada bagian atas menunjukkan harga tertinggi pada waktu tersebut</p>
<p>Low: Garis vertikal pada bagian bawah &nbsp;menunjukkan harga terendah pada waktu tersebut </p>
<p>Close: Garis horizontal pada bagian kanan adalah harga closing</p>
        </Section>
        <Section>
          <Heading number='3' heading='Candlesticks Chart' />
          <p>Candlestick chart atau Pola Candlestick menunjukkan informasi harga dalam bentuk grafik lilin. Pola Candlestick menunjukkan jarak dari titik high-to-low dengan garis vertikal.</p>
<p>Akan tetapi, dalam Pola Candlestick, bagian tubuh lilin (body candle) yang lebih besar menunjukkan rentang jarak antara harga opening dan harga closing.</p>
<p>Secara tradisional jika body candle di tengah berwarna, hal ini menunjukkan pasangan mata uang ditutup lebih rendah daripada harganya saat dibuka. Dalam contoh berikut, body candle berwarna hitam yang mengindikasikan bahwa, bagian atas body candle adalah harga pembuka dan bagian bawahnya menandakan harga closing.&nbsp;</p>
<p>Jika harga closing lebih tinggi dari harga opening, maka body candle di bagian tengah akan berwarna putih atau kosong, atau bahkan tidak diwarnai.</p>
<img src="https://www.hsb.co.id/learn/images/kindergarten-candlestick.png" alt="bagian candlestick" className='partimg'/>
<p>Warna body dalam Pola Candlestick umumnya ditunjukkan dengan warna putih atau hijau yang artinya bahwa harga penutupan lebih tinggi daripada harga pembukaannya. Sedangkan warna hitam atau merah. menunjukkan harga penutupan lebih rendah dari harga ketika dibuka.&nbsp;</p>
<p>Pada pembahasan berikutnya, Anda akan memahami bagaimana cara menggunakan candles hijau dan merah secara cepat yang dapat menginformasikan tren pergerakan harga seperti uptrend/downtrend dan kemungkinan tren pembalikan (Reversal Trend).&nbsp;</p>
<p>Untuk sekarang, Anda hanya perlu ingat bahwa dalamforex, Pola Candlestick umumnya ditunjukkan denganwarna merah dan hijau bukan hitam dan putih.</p>
<img src="https://www.hsb.co.id/learn/images/kindergarten-colored-candlestick.png" alt="candlestick berwarna" className='partimg'/>

<p>Berikut adalah contoh Pola Candlestick untuk EUR/USD.</p>
<img src="https://www.hsb.co.id/learn/images/pre-school-candlestick-chart.png" alt="candlestick chart" className='partimg'/>

<p>Tujuan dari hadirnya Pola Candlestick adalah sebagai bantuan visual, karena informasi yang ditunjukkan muncul pada bar chart OHLC. </p>
<p>Keuntungan dari Pola Candlestick antara lain:</p>
<ul>
    <li>
        <p>Candlestick mudah dimengerti dan bisa menjadi starting point yang tepat untuk pemula dalam memahami analisa jenis chart pattern.</p>
    </li>
    <li>
        <p>Candlestick mudah untuk digunakan! Anda akan dengan mudah beradaptasi secara langsung dengan informasi dalam notasi bar. Ditambah lagi, berdasarkan riset, informasi visual sangat membantu proses belajar. Jadi pastinya, pola ini akan membantu Anda dalam mengerti trading!</p>
    </li>
    <li>
        <p>Candlestick dan pola candlestick memiliki nama-nama keren seperti shooting star, yang akan sangat membantu Anda untuk mengingat arti dari setiap pola.</p>
    </li>
    <li>
        <p>Candlestick sangat bagus untuk mengidentifikasi perubahan di pasar. Perubahan dari uptrend ke downtrend atau downtrend ke uptrend. Anda akan belajar lebih banyak tentang ini selanjutnya.&nbsp;</p>
    </li>
</ul>

<p>Sekarang, Anda tahu kenapa candlestick sangat keren! Anda juga akan dipertemukan kembali dengan Pola Candlestick dalam materi belajar ini karena dalam pola-pola Candlestick banyak digunakan dalam analisa teknikal trading forex.</p>

        </Section>
      </div>
    </article>
  </Container>
  )
}

export default JenisChartPattern
