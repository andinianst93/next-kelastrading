import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const ApaItuPip = () => {
  return (
    <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='Apa Itu PIPs, Cara Hitung dan Nilai Tukarnya? ' />
        <Header
          title='Apa Itu PIPs, Cara Hitung dan Nilai Tukarnya?'
          description='Pelajari tentang konsep dasar PIPs, alat dan teknik yang dapat membantu Anda menghitungnya, serta bagaimana PIPs memengaruhi profit dan loss dalam trading forex.'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC toc1='PIP' toc2='Apa itu “pippete”?' toc3='Bagaimana cara menghitung nilai PIP' toc4='Menemukan nilai pip pada akun denominasi' />
        <div className='partcon'>
            <Section>
            <p>Anda mungkin pernah mendengar istilah pips, pipettes, dan lots, berikut kami akan menjelaskan cara menghitungnya. Luangkan sedikit waktu untuk memahami ilmu ini, karena sangat diperlukan bagi semua trader. Jangan pernah berpikir untuk trading sebelum mengetahui nilai pip dan penghitungan profit and loss.</p>
            </Section>
          <Section>
            <Heading number='1' heading='PIP' />
            <p>Singkatan dari Price Interest Point, yang merupakan unit satuan untuk mengukur perubahan nilai tukar antara dua mata uang. Jika EUR/USD bergerak dari 1,1050 ke 1,1051, kenaikan $0,0001 itu disebut SATU PIP.</p>
                    <p>Pip adalah tempat desimal terakhir dari kuotasi harga.</p>
                    <p>Empat digit desimal digunakan untuk pasangan mata uang tidak termasuk Yen Jepang. Jika pasangan mata uang adalah Yen Jepang, maka digit desimal adalah dua.</p>
          </Section>
          <Section>
            <Heading number='2' heading='Apa itu “pippete”?' />
            <p>Ada broker yang mengutip pasangan mata uang di luar standar tempat desimal "4 dan 2" digit menjadi "5 dan 3" digit desimal.</p>
            <p>Mereka mengutip PECAHAN PIP, yang disebut juga dengan "pipettes." Misalnya, jika GBP / USD bergerak dari 1,30542 ke 1,30543, maka 0,00001 USD bergerak lebih tinggi, dapat dikatakan bahwa mata uang tersebut bergerak SATU PIPETTE.</p>
          </Section>
          <Section>
            <Heading number='3' heading='Bagaimana cara menghitung nilai PIP' />
            <p>Karena setiap mata uang memiliki nilai relatifnya sendiri, maka dibutuhkan untuk menghitung nilai pip untuk <a href="https://www.hsb.co.id/learn/forex/buying-selling-currency-pairs.html">pasangan mata uang</a> tersebut. Contoh di bawah ini, kita menggunakan kuotasi dengan 4 tempat desimal.</p>
                    <p>Untuk menjelaskan perhitungan dengan lebih baik, nilai tukar akan dinyatakan sebagai rasio (misal: EUR / USD di harga 1,2500 akan ditulis sebagai 1 EUR / 1,2500 USD</p>
                    <h3>Contoh 1: USD/CAD = 1.0200</h3>
                    <p>Dibaca 1 USD untuk 1,0200 CAD (atau 1 USD/1,0200 CAD)</p>
                    <p>(Perubahan nilai dalam mata uang pembanding) dikalikan rasio nilai tukar = nilai pip (dalam mata uang dasar)</p>
                    <p>[0,0001 CAD] x [1 USD/1,0200 CAD]</p>
                    <p>Atau simple nya seperti ini:</p>
                    <p>[(.0001 CAD) / (1.0200 CAD)] x 1 USD = 0.00009804 USD per unit yang diperdagangkan.</p>
                    <p>Dengan menggunakan contoh ini, jika kita memperdagangkan 10.000 unit USD / CAD, maka perubahan satu pip ke nilai tukar akan menjadi sekitar 0,98 USD perubahan nilai posisi (10.000 unit x 0,0000984 USD / unit).</p>
                    <p>Kami mengatakan kira-kira karena ketika nilai tukar berubah, demikian juga nilai setiap pip bergerak.</p>
                    <h3>Contoh 2: GBP/JPY = 123.00</h3>
                    <p>Contoh lain dengan menggunakan pasangan mata uang Yen Jepang sebagai mata uang pembanding. Perhatikan! bahwa pasangan mata uang ini hanya dua digit desimal untuk mengukur perubahan nilai 1 pip (sebagian besar mata uang lainnya memiliki empat tempat desimal). Dalam hal ini, pergerakan satu pip adalah 0,01 JPY.</p>
                    <p>(Perubahan nilai dalam mata uang pembanding) dikalikan rasio nilai tukar = nilai pip (dalam mata uang dasar)</p>
                    <p>[,01 JPY] x [1 GBP/123,00 JPY]</p>
                    <p>Atau simple nya seperti ini:</p>
                    <p>[(.01 JPY) / (123.00 JPY)] x 1 GBP = 0.0000813 GBP</p>
                    <p>Jadi, saat memperdagangkan 10.000 unit GBP / JPY, setiap perubahan pip bernilai sekitar 0,813 GBP.</p>
          </Section>
          <Section>
            <Heading number='4' heading='Menemukan nilai pip pada akun denominasi' />
            <p>Pertanyaan terakhir adalah bagaimana cara mencari tahu nilai pip dari posisi. Bagaimanapun, ini adalah pasar global dan tidak semua orang memiliki akun dalam mata uang yang sama. Ini artinya nilai pip harus ditafsirkan ke dalam mata uang apa pun yang mungkin diperdagangkan oleh akun trader.</p>
                    <p>Perhitungan ini mungkin yang paling mudah dari semuanya; cukup gandakan atau bagi nilai pip yang ditemukan dengan nilai tukar mata uang akun dan mata uang yang diinginkan.</p>
                    <p>Jika mata uang nilai pip yang diinginkan adalah mata uang yang sama dengan mata uang dasar dalam kutipan nilai tukar:</p>
                    <p>Dengan menggunakan contoh GBP / JPY di atas, mari kita ubah nilai pip yang ditemukan yaitu 0,813 GBP ke nilai pip dalam USD dengan menggunakan GBP / USD pada 1,5590 sebagai rasio nilai tukar.</p>
                    <p>Jika mata uang yang dikonversi adalah mata uang pembanding dari nilai tukar, yang harus Anda lakukan adalah membagi nilai pip yang ditemukan dengan rasio nilai tukar yang sesuai:</p>
                    <p>0.813 GBP per pip / (1 GBP / 1,5590 USD)</p>
                    <p>Atau</p>
                    <p>[(.813 GBP) / (1 GBP)] x (1.5590 USD) = 1.2674 USD per pergerakan pip</p>
                    <p>Jadi, untuk setiap pergerakan 0,01 pip dalam GBP / JPY, nilai posisi 10.000 unit berubah sekitar 1,27 USD.</p>
                    <p>Jika mata uang yang dikonversi adalah mata uang dasar dari rasio nilai tukar konversi, maka gandakan nilai pip yang ditemukan dengan rasio nilai tukar konversi.</p>
                    <p>Menggunakan contoh USD/CAD kami di atas, kami ingin menemukan nilai pip 0,98 USD dalam Dolar Selandia Baru. Kita akan menggunakan 0,7900 sebagai rasio nilai tukar konversi kami:</p>
                    <p>0.98 USD per pip X (1 NZD/.7900 USD)</p>
                    <p>Atau</p>
                    <p>[(0.98 USD) / (.7900 USD)] x (1 NZD) = 1.2405 NZD per pergerakan pip</p>
                    <p>Untuk setiap pergerakan 0,0001 pip dalam USD / CAD dari contoh di atas, posisi 10.000 unit Anda berubah nilainya sekitar 1,24 NZD. Meskipun Anda adalah seorang jenius - setidaknya terhadap perhitungan nilai pip - mungkin akan sedikit menghela napas dan berpikir, Apakah saya benar-benar harus memahami semua kalkulasi ini?</p>
                    <p>Jawabannya adalah TIDAK. Hampir semua broker forex akan menyelesaikan semua perhitungan ini untuk Anda secara otomatis, tetapi alangkah baiknya bagi Anda untuk mengetahui bagaimana mereka menghitungnya.</p>
                    <p>Jika broker tidak melakukan hal ini, jangan khawatir - Anda dapat menggunakan Kalkulator Nilai Pips kami! Hebat bukan?</p>
                    <p>Dalam pelajaran berikutnya, kita akan membahas bagaimana jumlah yang tampaknya tidak signifikan ini dapat berpengaruh dalam forex.</p>
          </Section>
         
        </div>
      </article>
    </Container>
  )
}

export default ApaItuPip
