import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const PasanganTradingForexLondon = () => {
  return (
    <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='Pasar Trading Forex Sesi London' />
        <Header
          title='Pasar Trading Forex Sesi London'
          description='Pelajari tentang pasar trading forex sesi London dan bagaimana aktivitasnya mempengaruhi pasar global. Temukan tips dan strategi untuk mengoptimalkan keuntungan Anda dalam trading forex pada sesi ini.'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC toc1='Pair mana yang harus Anda Perdagangkan?'/>
        <div className='partcon'>
            <Section>
            <p>Tepat ketika pasar Asia mulai menutup, mitra Eropa baru memulai hari dagang mereka.</p>
                    <p>Meskipun ada beberapa pusat keuangan di seluruh Eropa, pasar London menjadi perhatian utama para
                        pelaku pasar.</p>
                    <p>Secara historis, London selalu menjadi pusat perdagangan, karena lokasinya yang strategis.</p>
                    <p>Tidak mengherankan bahwa itu dianggap sebagai ibukota forex dunia dengan ribuan pengusaha
                        melakukan transaksi setiap menit. Sekitar 30% dari
                        semua transaksi forex terjadi selama sesi London.</p>
                    <p>Di bawah ini adalah tabel rentang pip sesi London dari pasangan mata uang utama.</p>
                    <table border="0" width="250">
                        <tbody>
                            <tr>
                                <th>PASANGAN</th>
                                <th>LONDON</th>
                            </tr>
                            <tr>
                                <td align="center">EUR/USD</td>
                                <td align="center">83</td>
                            </tr>
                            <tr>
                                <td align="center">GBP/USD</td>
                                <td align="center">82</td>
                            </tr>
                            <tr>
                                <td align="center">USD/JPY</td>
                                <td align="center">36</td>
                            </tr>
                            <tr>
                                <td align="center">AUD/USD</td>
                                <td align="center">60</td>
                            </tr>
                            <tr>
                                <td align="center">NZD/USD</td>
                                <td align="center">64</td>
                            </tr>
                            <tr>
                                <td align="center">USD/CAD</td>
                                <td align="center">66</td>
                            </tr>
                            <tr>
                                <td align="center">USD/CHF</td>
                                <td align="center">58</td>
                            </tr>
                            <tr>
                                <td align="center">EUR/JPY</td>
                                <td align="center">80</td>
                            </tr>
                            <tr>
                                <td align="center">GBP/JPY</td>
                                <td align="center">102</td>
                            </tr>
                            <tr>
                                <td align="center">AUD/JPY</td>
                                <td align="center">86</td>
                            </tr>
                            <tr>
                                <td align="center">EUR/GBP</td>
                                <td align="center">40</td>
                            </tr>
                            <tr>
                                <td align="center">EUR/CHF</td>
                                <td align="center">–</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Nilai pip dihitung menggunakan rata-rata dari data masa lalu. Perhatikan bahwa harga ini BUKAN
                        NILAI MUTLAK dan dapat bervariasi tergantung
                        pada likuiditas dan kondisi pasar lainnya.</p>
                    <p>Lihat! kisaran sesi harga EUR / CHF belum dimasukan karena franc Swiss telah dipatok dengan euro
                        di harga 1.2000 selama periode tersebut.</p>
                    <p>Berikut ini beberapa fakta tentang sesi London:</p>
                    <ul>
                        <li>Karena sesi London mempertemukan dengan dua sesi perdagangan utama lainnya -dan London
                            menjadi layaknya pusat keuangan-sebagian besar
                            transaksi forex utama terjadi selama sesi ini. Sehingga menyebabkan likuiditas tinggi dan
                            biaya transaksi berpotensi lebih rendah,
                            artinya, spread pip rendah.</li>
                        <li>Karena sejumlah besar transaksi terjadi, sesi perdagangan London biasanya yang paling
                            volatile.</li>
                        <li>Sebagian besar tren dimulai selama sesi London, dan biasanya akan berlanjut hingga awal sesi
                            New York.</li>
                        <li>
                            Volatilitas cenderung mereda di tengah sesi, karena pedagang sering pergi makan siang
                            sebelum menunggu jam dagang New York dimulai.</li>
                        <li>Trend kadang-kadang dapat berbalik pada akhir sesi London, karena para trader Eropa bisa
                            saja memutuskan untuk mengunci keuntungan.</li>
                    </ul>
            </Section>
          <Section>
            <Heading number='1' heading='Pair mana yang harus Anda Perdagangkan?' />
            <p>Karena volume transaksi yang terjadi, ada begitu banyak likuiditas selama sesi Eropa sehingga
                        hampir semua pair dapat diperdagangkan.</p>
                    <p>Tentu saja, mungkin lebih baik adalah tetap dengan major currency (EUR/USD, GBP/USD, USD/JPY, dan
                        USD/CHF), karena ini biasanya memiliki
                        spread yang ketat.</p>
                    <p>Selain itu, pair tersebut biasanya langsung dipengaruhi oleh laporan berita apa pun yang keluar
                        selama sesi Eropa.</p>
                    <p>Anda juga dapat mencoba cross Yen (seperti, EUR/JPY dan GBP / JPY), karena cenderung cukup stabil
                        selama sesi. Karena ini adalah cross pair,
                        spread sesekali mungkin sedikit lebih lebar.</p>
                    <p>
                        Kita beralih ke sesi London!</p>
          </Section>
          
        </div>
      </article>
    </Container>
  )
}

export default PasanganTradingForexLondon
