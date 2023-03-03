import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const PasarTradingForexAsia = () => {
  return (
    <Container>
    <section className='bg-[#00028f] w-full pt-12'>
      <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='Pasar Trading Forex Sesi Asia' />
      <Header
        title='Pasar Trading Forex Sesi Asia'
        description='Artikel ini membahas tentang pasar trading forex selama sesi Asia, termasuk jam buka pasar, pasangan mata uang yang paling diperdagangkan, dan faktor-faktor yang mempengaruhi volatilitas pasar.'
      />
    </section>
    <article className='py-4 px-8 mx-auto max-w-screen-lg'>
      <TOC toc1='Pasangan mata uang mana yang ideal?' />
      <div className='partcon'>
        <Section>
        <p>Pembukaan sesi Tokyo pada jam 12:00 AM GMT menandai dimulainya sesi pasar Asia.</p>
                    <p>Ingat! pasar Tokyo hingga saat ini dianggap sebagai pusat keuangan benua Asia.</p>
                    <p>Pasar Tokyo adalah pusat perdagangan forex terbesar ketiga di dunia hingga saat ini. Kondisi ini
                        tidak mengejutkan karena mata uang Yen
                        Jepang adalah mata uang ketiga yang paling banyak diperdagangkan atau mengambil porsi sebesar
                        16,5% dari total transaksi forex. Secara
                        keseluruhan sekitar 21% dari semua transaksi forex berlangsung selama sesi pasar Tokyo.</p>
                    <p>Berikut adalah tabel rentang pip dari pasangan mata uang utama di sesi pasar Asia.</p>
                    <table border="0" width="250">
                        <tbody>
                            <tr>
                                <th>PASANGAN MATA UANG</th>
                                <th>TOKYO</th>
                            </tr>
                            <tr>
                                <td align="center">EUR/USD</td>
                                <td align="center">56</td>
                            </tr>
                            <tr>
                                <td align="center">GBP/USD</td>
                                <td align="center">54</td>
                            </tr>
                            <tr>
                                <td align="center">USD/JPY</td>
                                <td align="center">30</td>
                            </tr>
                            <tr>
                                <td align="center">AUD/USD</td>
                                <td align="center">65</td>
                            </tr>
                            <tr>
                                <td align="center">NZD/USD</td>
                                <td align="center">58</td>
                            </tr>
                            <tr>
                                <td align="center">USD/CAD</td>
                                <td align="center">39</td>
                            </tr>
                            <tr>
                                <td align="center">USD/CHF</td>
                                <td align="center">40</td>
                            </tr>
                            <tr>
                                <td align="center">EUR/JPY</td>
                                <td align="center">57</td>
                            </tr>
                            <tr>
                                <td align="center">GBP/JPY</td>
                                <td align="center">72</td>
                            </tr>
                            <tr>
                                <td align="center">AUD/JPY</td>
                                <td align="center">65</td>
                            </tr>
                            <tr>
                                <td align="center">EUR/GBP</td>
                                <td align="center">23</td>
                            </tr>
                            <tr>
                                <td align="center">EUR/CHF</td>
                                <td align="center">–</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Nilai pip dihitung menggunakan rata-rata dari data sebelumnya. Perhatikan bahwa harga ini BUKAN
                        NILAI MUTLAK dan dapat bervariasi tergantung
                        pada likuiditas dan kondisi pasar lainnya.</p>
                    <p>Lihat! kisaran sesi harga EUR / CHF belum dimasukan karena franc Swiss telah dipatok dengan euro
                        di harga 1.2000 selama periode tersebut.</p>
                    <p>Berikut ini beberapa fakta tentang sesi Tokyo:</p>
                    <ul>
                        <li>Aksi dagang tidak hanya terjadi pada wilayah Jepang. Banyak transaksi dilakukan di hot spot
                            keuangan lainnya seperti Hong Kong,
                            Singapura, dan Sydney.</li>
                        <li>Pelaku pasar utama adalah Perusahaan Komersial (eksportir), Bank Komersial dan Bank Sentral.
                            Perlu dicatat, ekonomi Jepang sangat
                            bergantung pada ekspor, dengan China sebagai negara pemain utama, ada banyak transaksi yang
                            terjadi setiap hari.</li>
                        <li>
                            Likuiditas pada sesi Tokyo terkadang bisa sangat rendah. Sehingga volatilitas mata uang juga
                            bisa sangat terbatas. Jika diumpamakan ini
                            seperti memancing, artinya kita harus sabar menunggu hingga umpan termakan oleh “ikan”.</li>
                        <li>Kemungkinan pergerakan harga yang lebih kuat terjadi dalam pasangan mata uang Asia-Pasifik
                            seperti AUD / USD dan NZD / USD sebagai lawan
                            pasangan mata uang non Asia-Pasifik seperti GBP / USD.</li>
                        <li>Selama masa-masa likuiditas rendah sebagian besar pasangan mungkin tetap dalam kisaran. Ini
                            memberikan peluang transaksi jangka pendek
                            atau berpotensi breakout pada hari berikutnya.</li>
                        <li>Sebagian besar aksi dagang terjadi di awal sesi ketika lebih banyak data ekonomi dirilis.
                        </li>
                        <li>Pergerakan di sesi Tokyo dapat mengatur tren di hari itu. Trader di sesi terakhir akan
                            melihat kejadian selama sesi Tokyo untuk membantu
                            mengatur dan mengevaluasi strategi apa yang harus diambil pada sesi lain.</li>
                        <li>Biasanya, jika pada sesi New York terjadi fluktuasi harga yang cukup tajam maka pada sesi
                            Tokyo akan mengalami konsolidasi.</li>
                    </ul>
        </Section>
        <Section>
          <Heading number='1' heading='Pasangan mata uang mana yang ideal?' />
          <p>Karena sesi Tokyo terbuka setelah rilis berita dari Australia, Selandia Baru dan Jepang, ini
                        menyajikan peluang yang baik untuk bertukar
                        acara berita.
                    </p>
                    <p>Juga, mungkin ada lebih banyak pergerakan dalam pasangan yen karena banyak yen berpindah tangan
                        karena banyak perusahaan Jepang melakukan
                        bisnis.</p>
                    <p>Perhatikan! Cina juga merupakan negara ekonomi terbesar, setiap kali berita dari China dirilis
                        pergerakan akan cenderung fluktuatif.</p>
                    <p>Pasar Australia dan Jepang sangat bergantung pada permintaan Impor China, pergerakan harga yang
                        lebih besar dalam pasangan AUD dan JPY ketika
                        masuknya data dari China.
                    </p>
                    <p>Kita beralih ke sesi London!</p>
        </Section>
       
      </div>
    </article>
  </Container>
  )
}

export default PasarTradingForexAsia
