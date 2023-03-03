import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const PasarTradingForexNY = () => {
  return (
    <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='Pasar Trading Forex Sesi New York' />
        <Header
          title='Pasar Trading Forex Sesi New York'
          description='Pelajari tentang pasar trading forex sesi New York dan bagaimana pasar ini memainkan peran penting dalam aktivitas trading global. Dapatkan wawasan tentang volatilitas pasar untuk memaksimalkan keuntungan Anda.'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC toc1='Pair Mana Yang Bagus Ditradingkan Di Sesi New York?' />
        <div className='partcon'>
            <Section>
            <p>Tepat ketika para pedagang Eropa kembali dari istirahat makan siang mereka, sesi AS dimulai pada
                        jam 8:00 EST ketika pedagang mulai masuk ke
                        kantor.</p>
                    <p>Sama seperti Asia dan Eropa, sesi AS memiliki satu pusat keuangan utama yang menjadi perhatian
                        pasar.</p>
                    <p>Kita tentu saja berbicara, tentang "Kota yang Tidak Pernah Tidur" - New York City! Hutan beton
                        tempat impian dibuat!</p>
                    <p>Di bawah ini adalah tabel rentang pip sesi New York dari pasangan mata uang utama.</p>
                    <table border="0" width="250">
                        <tbody>
                            <tr>
                                <th>PASANGAN</th>
                                <th>NEW YORK</th>
                            </tr>
                            <tr>
                                <td align="center">EUR/USD</td>
                                <td align="center">77</td>
                            </tr>
                            <tr>
                                <td align="center">GBP/USD</td>
                                <td align="center">68</td>
                            </tr>
                            <tr>
                                <td align="center">USD/JPY</td>
                                <td align="center">34</td>
                            </tr>
                            <tr>
                                <td align="center">AUD/USD</td>
                                <td align="center">68</td>
                            </tr>
                            <tr>
                                <td align="center">NZD/USD</td>
                                <td align="center">62</td>
                            </tr>
                            <tr>
                                <td align="center">USD/CAD</td>
                                <td align="center">67</td>
                            </tr>
                            <tr>
                                <td align="center">USD/CHF</td>
                                <td align="center">56</td>
                            </tr>
                            <tr>
                                <td align="center">EUR/JPY</td>
                                <td align="center">72</td>
                            </tr>
                            <tr>
                                <td align="center">GBP/JPY</td>
                                <td align="center">77</td>
                            </tr>
                            <tr>
                                <td align="center">AUD/JPY</td>
                                <td align="center">71</td>
                            </tr>
                            <tr>
                                <td align="center">EUR/GBP</td>
                                <td align="center">36</td>
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
                    <p>Berikut ini beberapa fakta tentang sesi New York:</p>
                    <ul>
                        <li>Karena mengalami overlap dengan sesi Eropa, di awal sesi trading New York masih terdapat
                            likuiditas yang cukup tinggi.</li>
                        <li>Sebagian besar laporan ekonomi dirilis nyaris berbarengan dengan dimulainya sesi New York.
                            Dan kita harus ingat kalau sekitar 85%
                            trading melibatkan Dolar AS. Sehingga pasar akan selalu bergerak kapan pun berita ekonomi AS
                            dirilis.</li>
                        <li>Begitu pasar Eropa tutup, yang bersamaan dengan paruh kedua sesi trading New York,
                            likuiditas dan volatilitas cenderung mereda.</li>
                        <li>Hanya ada sedikit pergerakan yang tertangkap pada Jumat sore, karena trader Asia memilih
                            untuk menghabiskan waktunya berkumpul di tempat
                            karaoke dan bar. Sementara trader Eropa lebih suka menghabiskan waktunya di pub dan nobar
                            pertandingan sepakbola.</li>
                        <li>Selain itu, di hari Jumat terdapat kemungkinan terjadi reversal pada paruh kedua sesi AS.
                            Penyebabnya adalah trader AS memutuskan untuk
                            tutup posisi lebih awal di akhir pekan guna mengurangi tekanan akibat berita yang muncul
                            menjelang libur.</li>
                    </ul>
            </Section>
          <Section>
            <Heading number='1' heading='Pair Mana Yang Bagus Ditradingkan Di Sesi New York?' />
            <p>Kita perlu mencatat bahwa akan ada banyak yang terjadi pada saat pasar AS dan Eropa berlangsung.
                        Bisa dibayangkan, bank-bank dan semua
                        perusahaan multinasional sibuk menjawab telepon. Kita bisa memanfaatkan momen ini untuk trading
                        dengan mata uang apapun. Walau untuk
                        amannya, lebih baik kita menggunakan mata uang mayor dan minor dan menghindari mata uang
                        eksotik.</p>
                    <p>Di sisi lain, karena Dolar AS sering digunakan dalam sebagian besar transaksi, semua trader bisa
                        dipastikan akan menaruh perhatian mereka
                        pada rilis data AS. Entah apakah rilis data itu bersifat positif atau negatif, yang pasti rilis
                        data AS akan mampu menggoncang pasar dunia.
                    </p>
          </Section>
         
        </div>
      </article>
    </Container>
  )
}

export default PasarTradingForexNY
