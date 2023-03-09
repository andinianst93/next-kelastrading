import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const ApaItuLot = () => {
  return (
    <Container>
    <section className='bg-[#00028f] w-full pt-12'>
      <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='Apa Itu Lot dalam Forex dan Berapa Ukuran Minimalnya? ' />
      <Header
        title='Apa Itu Lot dalam Forex dan Berapa Ukuran Minimalnya? '
        description='Artikel ini akan menjelaskan konsep lot, jenis-jenis lot, dan ukuran minimal lot yang diperlukan untuk memulai perdagangan forex. Temukan jawaban Anda di sini!'
      />
    </section>
    <article className='py-4 px-8 mx-auto max-w-screen-lg'>
      <TOC toc1='Apa itu leverage (daya ungkit)?' toc2='Bagaimana menghitung profit dan loss?' />
      <div className='partcon'>
        <Section>
        <p>Forex spot yang diperdagangkan dalam ukuran tertentu disebut lot atau jumlah unit mata uang yang
    akan Anda beli atau jual.</p>
                    <p>Ukuran standar untuk lot adalah 100.000 unit, terdapat juga ukuran mini, mikro, dan nano dengan
                        masing-masing unit 10.000, 1.000 dan 100.</p>
                    <table border="0" width="225">
                        <tbody>
                            <tr>
                                <th>LOT</th>
                                <th>NUMBER OF UNITS</th>
                            </tr>
                            <tr>
                                <td align="center">Standard</td>
                                <td align="center">100,000</td>
                            </tr>
                            <tr>
                                <td align="center">Mini</td>
                                <td align="center">10,000</td>
                            </tr>
                            <tr>
                                <td align="center">Micro</td>
                                <td align="center">1,000</td>
                            </tr>
                            <tr>
                                <td align="center">Nano</td>
                                <td align="center">100</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Seperti yang diketahui, perubahan satu nilai mata uang relatif terhadap mata uang lain yang
                        diukur dalam "pips" yang merupakan persentase sangat kecil dari satu unit nilai mata uang.</p>
                    <p>Untuk memanfaatkan perubahan nilai ini, Anda perlu sejumlah besar dana untuk menghasilkan
                        keuntungan ataupun kerugian yang signifikan.</p>
                    <p>Mari kita asumsikan dengan ukuran lot 100.000 unit (standar) dan menghitung ulang dengan beberapa
                        contoh untuk melihat bagaimana hal itu mempengaruhi nilai pip.</p>
                    <ol>
                        <li>
                            <strong>USD / JPY dengan nilai tukar 119.80:</strong> (.01 / 119.80) x 100,000 = $8.34 per
                            pip
                        </li>
                        <li>
                            <strong>USD / CHF dengan nilai tukar 1.4555:</strong> (.0001 / 1.4555) x 100,000 = $6.87 per
                            pip
                        </li>
                    </ol>
                    <p>Dalam kasus nilai tukar tidak dikutip dengan dolar AS, rumusnya sedikit berbeda.</p>
                    <ol>
                        <li>
                            <strong>EUR / USD dengan nilai tukar 1.1930:</strong> (.0001 / 1.1930) X 100,000 = 8.38 x
                            1.1930 = $9.99734 dibulatkan menjadi $10 per pip
                        </li>
                        <li>
                            <strong>GBP / USD dengan nilai tukar 1.8040:</strong> (.0001 / 1.8040) x 100,000 = 5.54 x
                            1.8040 = 9.99416 dibulatkan menjadi $10 per pip.
                        </li>
                    </ol>
                    <p>Broker Anda mungkin memiliki konvensi yang berbeda untuk menghitung nilai pip relatif terhadap
                        ukuran lot tetapi dengan cara apapun, mereka akan memberitahukan berapa nilai pip untuk mata
                        uang yang diperdagangkan pada waktu tertentu.</p>
                    <p>Ketika pasar bergerak, nilai pip juga akan tergantung pada jenis mata uang yang diperdagangkan
                        saat itu.</p>
        </Section>
        <Section>
          <Heading number='1' heading='Apa itu leverage (daya ungkit)?' />
          <p>Anda mungkin bertanya bagaimana seorang investor kecil dapat melakukan transaksi dalam jumlah
                        yang besar.</p>
                    <p>Asumsikan bahwa broker layaknya bank yang memberikan Anda pinjaman $ 100.000 untuk membeli mata
                        uang.</p>
                    <p>Kemudian anda diminta untuk menyetor uang $ 1.000 sebagai jaminan dan akan ditahan tetapi tidak
                        harus menyimpannya.</p>
                    <p>Kedengarannya sangat bagus untuk menjadi kenyataan? Begitulah cara kerja leverage.</p>
                    <p>Jumlah leverage yang digunakan tergantung pada broker.</p>
                    <p>Biasanya broker akan meminta deposit, yang juga dikenal sebagai "margin akun" atau "margin awal."
                        Setelah mendepositkan uang Anda baru dapat melakukan trading. Broker juga akan menentukan berapa
                        banyak yang dibutuhkan per posisi (lot) yang diperdagangkan.</p>
                    <p>Misalnya, jika leverage yang diizinkan adalah 100:1 (atau 1% dari posisi yang diperlukan), dan
                        Anda ingin posisi trading senilai $100.000, tetapi hanya memiliki $5.000 di margin.</p>
                    <p>Tidak jadi masalah karena broker Anda akan menyisihkan $1.000 sebagai uang muka, atau "margin,"
                        dan sisanya akan “dipinjamkan”.</p>
                    <p>Tentu saja, setiap kerugian atau keuntungan akan dikurangkan atau ditambahkan ke saldo kas yang
                        tersisa di akun Anda.</p>
                    <p>Keamanan minimum untuk setiap lot akan bervariasi pada masing-masing broker.</p>
                    <p>Pada contoh di atas, broker membutuhkan margin 1 %. Artinya untuk setiap transaksi $100.000,
                        broker menginginkan $1.000 sebagai deposit pada posisi tersebut.</p>
        </Section>
        <Section>
          <Heading number='2' heading='Bagaimana menghitung profit dan loss?' />
          <p>Setelah tahu cara menghitung nilai pip dan leverage, hal berikutnya bagaimana menghitung profit
                        dan loss Anda.</p>
                    <p>“Ayo beli dolar AS dan jual Franc Swiss”.</p>
                    <ol>
                        <li>Ratenya adalah 1.4525 / 1.4530. Karena Anda membeli dolar AS, sehingga mendapatkan harga
                            "ASK" di 1.4530, yaitu harga yang siap dijual oleh trader.</li>
                        <li>Jadi, Anda membeli 1 lot standar (100,000 unit) pada 1.4530.</li>
                        <li>Beberapa jam kemudian harga telah bergerak ke 1.4550 dan Anda memutuskan untuk menutup
                            posisi.</li>
                        <li>Rate baru untuk USD / CHF adalah 1.4550 / 1.4555. Karena awalnya membeli untuk membuka
                            posisi, Anda sekarang harus menjual untuk menutup posisi sehingga harus mengambil harga
                            "BID" di 1,4550 yaitu harga yang siap dibeli oleh trader.</li>
                        <li>Perbedaan antara 1.4530 dan 1.4550 adalah .0020 atau 20 pips.</li>
                        <li>Menggunakan rumus sebelumnya, kita sekarang memiliki (.0001/1.4550) x 100,000 = $6.87 per
                            pip x 20 pips = $137.40</li>
                    </ol>
                    <h3>Spread Bid/Ask</h3>
                    <p>Ingat! Ketika masuk atau keluar posisi, Anda akan dikenakan spread penawaran atau permintaan.</p>
                    <p><strong>Saat membeli mata uang, Anda akan menggunakan penawaran atau harga ASK.</strong></p>
                    <p><strong>Saat menjual mata uang, Anda akan menggunakan harga BID.</strong></p>
                    <p>Selanjutnya, kami akan menampilkan ringkasan dari bahasa forex yang telah dipelajari sebelumnya!
                    </p>
        </Section>
       
      </div>
    </article>
  </Container>
  )
}

export default ApaItuLot
