import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const AnalisaPasanganUang = () => {
  return (
    <Container>
    <section className='bg-[#00028f] w-full pt-12'>
      <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='Cara Menganalisa Pasangan Mata Uang Populer' />
      <Header
        title='Cara Menganalisa Pasangan Mata Uang Populer'
        description='Pelajari tentang analisis teknikal dan fundamental, faktor-faktor yang mempengaruhi nilai tukar mata uang, serta alat dan indikator yang dapat membantu Anda memprediksi pergerakan pasar.'
      />
    </section>
    <article className='py-4 px-8 mx-auto max-w-screen-lg'>
      <TOC toc1='EUR/USD' toc2='USD/JPY' toc3='GBP/USD' toc4='USD/CHF' toc5='Margin Trading' toc6='Penjelasan' toc7='Swap' toc8='Suku Bunga Acuan'/>
      <div className='partcon'>
        <Section>
        <p>Pada artikel berikut, analisis fundamental akan membantu Trader memilih membeli atau menjual pada
                        pair mata uang tertentu.</p>
                    <p>Jika sepanjang pelajaran ekonomi Anda sering tidur atau membolos, jangan khawatir!</p>
                    <p>Kami akan menjelaskan analisa fundamental di pelajaran selanjutnya..</p>
                    <p>Tapi untuk saat ini, coba berpura-pura saja anda tahu apa yang terjadi…</p>
        </Section>
        <Section>
          <Heading number='1' heading='EUR/USD' />
          <p>Kali ini Euro adalah mata uang dasar dan menjadi “basis” untuk jual atau jual.</p>
                    <p>Jika Anda percaya bahwa perekonomian AS akan melemah yang berdampak buruk bagi dolar AS, maka
                        Anda akan mengeksekusi BUY order.</p>
                    <p>Dengan demikian, Anda telah membeli euro dengan harapan bahwa nilainya akan naik terhadap dolar
                        AS.</p>
                    <p>Jika Anda percaya bahwa perekonomian AS akan menguat dan Euro akan melemah terhadap dolar AS,
                        maka Anda akan mengeksekusi SELL order.</p>
                    <p>Dengan demikian, Anda telah menjual euro dengan perkiraan bahwa nilainya akan jatuh dibandingkan
                        dengan dolar AS.</p>
        </Section>
        <Section>
          <Heading number='2' heading='USD/JPY' />
          <p>Kali ini dolar AS adalah mata uang dasar dan menjadi "basis" untuk jual atau beli</p>
                    <p>Jika Anda berpikir bahwa pemerintah Jepang akan melemahkan Yen untuk membantu sektor ekspornya,
                        maka Anda akan mengeksekusi BUY USD/JPY.</p>
                    <p>Dengan demikian, Anda telah membeli dolar AS dengan harapan nilainya akan naik terhadap Yen
                        Jepang.</p>
                    <p>Jika Anda yakin bahwa investor Jepang menarik uang dari pasar keuangan AS dan mengubah semua
                        dolar AS mereka kembali ke Yen, dan akan merugikan nilai dolar AS, maka Anda akan mengeksekusi
                        SELL USD / JPY.</p>
                    <p>Dengan demikian, Anda telah menjual dolar AS dengan harapan nilai dolar AS akan terdepresiasi
                        terhadap Yen Jepang.</p>
        </Section>
        <Section>
          <Heading number='3' heading='GBP/USD' />
          <p>Dalam contoh ini, pound adalah mata uang dasar dan maka dari itulah menjadi “basis” untuk
                        jual/beli.</p>
                    <p>Jika Anda berpikir ekonomi Inggris akan terus bergerak lebih baik daripada AS dalam hal
                        pertumbuhan ekonomi, Anda akan mengeksekusi order BUY GBP / USD.</p>
                    <p>Dengan melakukan itu Anda telah membeli pound dengan harapan bahwa nilai Pound akan naik
                        terhardap dolar AS.</p>
                    <p>Jika Anda yakin ekonomi Inggris melambat sementara ekonomi AS tetap kuat, Anda akan mengeksekusi
                        SELL GBP / USD.</p>
                    <p>Dengan melakukan itu, Anda telah menjual Pound dengan perkiraan bahwa nilainya akan terdepresiasi
                        terhadap dolar AS.</p>
        </Section>
        <Section>
          <Heading number='4' heading='USD/CHF' />
          <p>Kali ini USD adalah mata uang dasar dan menjadi “basis” untuk jual atau beli.</p>
                    <p>Jika Anda berpikir franc Swiss dinilai overvalued, Anda akan mengeksekusi order BUY USD / CHF.
                    </p>
                    <p>Dengan melakukannya, Anda telah membeli dolar AS dengan harapan nilai dolar AS akan naik
                        dibandingkan Franc Swiss.</p>
                    <p>Jika Anda yakin bahwa penurunan pasar perumahan AS akan merugikan pertumbuhan ekonomi di masa
                        depan yang akan melemahkan dolar, maka Anda akan mengeksekusi SELL USD / CHF.</p>
                    <p>Dengan melakukan itu, Anda telah menjual dolar AS dengan perkiraan nilainya akan terdepresiasi
                        terhadap franc Swiss.</p>
        </Section>
        <Section>
          <Heading number='5' heading='Margin Trading' />
          <p>Ketika Anda pergi ke toko kelontong dan hendak membeli telur, Anda tidak bisa hanya membeli 1
                        butir telur; karena mereka dijual dalam lusinan atau “lot” (ukuran).</p>
                    <p>Dalam forex, itu akan sama bodohnya untuk membeli atau menjual 1 euro, sehingga mereka biasanya
                        diperdagangkan dalam jumlah “lot” dari 1.000 unit mata uang (Mikro), 10.000 unit (Mini), atau
                        100.000 unit (Standar) tergantung pada broker Anda dan jenis akun yang Anda miliki.</p>
                    <p><strong>“Tapi saya tidak punya cukup uang untuk membeli 10.000 euro! Apakah saya masih bisa
                            trading? ”</strong></p>
                    <p>Anda bisa melakukannya dengan margin trading!</p>
                    <p>Margin adalah istilah yang digunakan untuk trading dengan modal pinjaman.</p>
                    <p>Ini adalah cara membuka posisi $ 1250 atau $ 50000 hanya dengan modal $ 25 atau $ 1000. </p>
                    <p>Transaksi yang lebih besar, cepat dan murah dapat dilakukan dengan sedikit modal awal.</p>
        </Section>
        <Section>
          <Heading number='6' heading='Penjelasan' />
          <p>Perhatikan baik-baik karena ini sangat penting!</p>
                    <ol>
                        <li>Anda percaya bahwa sinyal pasar menunjukkan bahwa pound Inggris akan naik nilainya terhadap
                            dolar AS.</li>
                        <li>Saat membuka satu lot standar (100.000 unit GBP / USD), membeli dengan Pound Inggris pada
                            margin sebesar 2% dan menunggu nilai tukar untuk naik. Ketika membeli satu lot (100.000
                            unit) GBP / USD dengan harga 1,50000, Anda membeli 100.000 Pound yang senilai dengan 150.000
                            dolar AS (100.000 unit GBP * 1,50000). </li>
                        <li>Jika persyaratan margin adalah 2%, maka USD $ 3.000 akan disisihkan dari akun untuk membuka
                            sebuah transaksi ( $ 150.000 * 2%). Anda sekarang mengontrol 100.000 Pound hanya dengan USD
                            $ 3.000. </li>
                        <li>
                            Kami akan membahas margin lebih mendalam nanti, tetapi mudah-mudahan memberi Anda ide dasar
                            tentang cara kerjanya.
                        </li>
                        <li>Prediksi Anda menjadi kenyataan dan telah memutuskan untuk menjual. Setelah menutup posisi
                            di 1,50500 Anda telah menghasilkan uang sekitar $ 500.</li>
                    </ol>
                    <table border="0" width="525">
                        <tbody>
                            <tr>
                                <td><strong>Aksi Anda</strong></td>
                                <td align="center"><strong>GBP</strong></td>
                                <td align="center"><strong>USD</strong></td>
                            </tr>
                            <tr>
                                <td>Membeli 100.000 poundsterling dengan nilai tukar <strong>1.5000</strong>
                                </td>
                                <td align="center">+100,000</td>
                                <td align="center">-150,000</td>
                            </tr>
                            <tr>
                                <td>Selang dua detik kemudian nilai tukar GBP / USD naik menjadi <strong>1.5050</strong>
                                    dan Anda menjual.</td>
                                <td align="center">-100,000</td>
                                <td align="center">+150,500</td>
                            </tr>
                            <tr>
                                <td>Anda meraih <strong>profit $500</strong>.</td>
                                <td align="center">0</td>
                                <td align="center">+500</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Ketika memutuskan untuk menutup posisi, deposti awal dikembalikan ke akun dan perhitungan untung
                        atau rugi segera dilakukan.</p>
                    <p>Dimana Keuntungan atau kerugian ini kemudian dikreditkan ke akun Anda.</p>
                    <p>Dengan adanya perkembangan trading ritel, beberapa broker menyiapkan para trader untuk memiliki
                        custom-lots.</p>
                    <p>Artinya Nasabah tidak perlu trading dalam lot mikro, mini atau standar! Jika 1.542 adalah harga
                        favorit dan itu adalah jumlah unit yang hendak diperdagangkan, maka Anda bisa melakukan itu!</p>
        </Section>
        <Section>
          <Heading number='7' heading='Swap' />
          <p>Untuk posisi yang terbuka di "batas waktu" pialang Anda (biasanya pukul 17:00 EST), ada tingkat
                        bunga Swap harian yang harus dibayarkan trader, tergantung pada margin dan posisi yang terbuka.
                    </p>
                    <p>Jika tidak ingin membayar bunga pada posisi Anda, cukup pastikan semua transaksi ditutup sebelum
                        pukul 17:00 EST, dimana sebelum waktu penutupan pasar.</p>
                    <p>Karena setiap perdagangan mata uang melibatkan pinjaman 1 mata uang untuk membeli mata uang lain,
                        biaya swap adalah bagian dari trading forex.</p>
                    <p><strong>Bunga DIBAYAR pada mata uang yang dipinjam.</strong></p>
                    <p><strong>Bunga DIPEROLEH dari mata uang yang dibeli.</strong></p>
                    <p>Jika membeli mata uang dengan tingkat bunga yang lebih tinggi dari yang Anda pinjam, maka selisih
                        suku bunga bersih akan positif (mis. USD / JPY), dan Anda akan mendapatkan dana sebagai
                        hasilnya.</p>
                    <p>Sebaliknya, jika perbedaan suku bunga negatif maka Anda harus membayar bunga swap</p>
                    <p>Perhatikan! banyak broker ritel menyesuaikan tingkat bunga swap berdasarkan faktor yang berbeda.
                        ( Leverage akun, suku bunga pinjaman antar bank).</p>
                    <p>Silakan periksa kembali dengan broker Anda untuk informasi lebih lanjut tentang tarif swap dan
                        prosedur kredit / debit.</p>
                    <p>Berikut adalah bagan perbedaan suku bunga mata uang utama per Juni 2018.</p>
        </Section>
        <Section>
          <Heading number='8' heading='Suku Bunga Acuan' />
          <table border="0" width="325">
                        <tbody>
                            <tr>
                                <th>NEGARA</th>
                                <th>TINGKAT SUKU BUNGA
                                </th>
                            </tr>
                            <tr>
                                <td align="center">Amerika Serikat</td>
                                <td align="center">2.00%</td>
                            </tr>
                            <tr>
                                <td align="center">Eropa</td>
                                <td align="center">0.00%</td>
                            </tr>
                            <tr>
                                <td align="center">United Kingdom</td>
                                <td align="center">0.50%</td>
                            </tr>
                            <tr>
                                <td align="center">Jepang</td>
                                <td align="center">-0.10%</td>
                            </tr>
                            <tr>
                                <td align="center">Kanada</td>
                                <td align="center">1.25%</td>
                            </tr>
                            <tr>
                                <td align="center">Australia</td>
                                <td align="center">1.50%</td>
                            </tr>
                            <tr>
                                <td align="center">Selandia Baru</td>
                                <td align="center">1.75%</td>
                            </tr>
                            <tr>
                                <td align="center">Swiss</td>
                                <td align="center">-0.75%</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Selanjutnya, kami akan menjelaskan cara menggunakan perbedaan suku bunga untuk meraih keuntungan!
                    </p>
        </Section>
      </div>
    </article>
  </Container>
  )
}

export default AnalisaPasanganUang
