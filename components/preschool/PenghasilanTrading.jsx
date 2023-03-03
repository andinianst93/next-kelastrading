import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const PenghasilanTrading = () => {
  return (
    <Container>
    <section className='bg-[#00028f] w-full pt-12'>
      <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='Cara Mendapatkan Penghasilan dari Trading' />
      <Header
        title='Cara Mendapatkan Penghasilan dari Trading'
        description='Pelajari strategi dan tips untuk meminimalkan risiko dan memaksimalkan keuntungan, termasuk analisis teknikal dan fundamental, manajemen risiko, dan penggunaan alat trading yang efektif di artikel berikut ini.'
      />
    </section>
    <article className='py-4 px-8 mx-auto max-w-screen-lg'>
      <TOC toc1='Bagaimana membaca kuotasi harga (forex quotes)' toc2='Long & Short' toc3='Bid, Ask dan Spread' />
      <div className='partcon'>
        <Section>
        <p>Dalam bisnis trading, Anda bisa menghasilkan keuntungan dengan membeli atau menjual.</p>
                    <p>Membuat posisi tidaklah sulit: mekanismenya sangat mirip dengan pasar saham, jika memiliki
                        pengalaman trading, Anda dapat menguasainya dengan cepat.</p>
                    <p>Tujuan dari trading adalah untuk menukarkan satu mata uang dengan mata uang lainnya dengan
                        ekspektasi perubahan harga.</p>
                    <p>Spesifiknya, mata uang yang dibeli akan bertambah nilainya dibanding dengan yang dijual.</p>
                    <p>Contoh:</p>
                    <table border="0" width="525">
                        <tbody>
                            <tr>
                                <td><strong>Aksi Trader</strong></td>
                                <td align="center"><strong>EUR</strong></td>
                                <td align="center"><strong>USD</strong></td>
                            </tr>
                            <tr>
                                <td>membeli 10.000 euro dengan nilai tukar EUR / USD di <strong>1.1800</strong>
                                </td>
                                <td align="center">+10,000</td>
                                <td align="center">-11,800*</td>
                            </tr>
                            <tr>
                                <td>2 minggu kemudian, tukar kembali 10.000 euro Anda ke dolar AS dengan nilai
                                    <strong>1.2500</strong>
                                </td>
                                <td align="center">-10,000</td>
                                <td align="center">+12,500**</td>
                            </tr>
                            <tr>
                                <td>Untung <strong>$700</strong>
                                </td>
                                <td align="center">0</td>
                                <td align="center">+700</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>*EUR 10,000 x 1.18 = US $11,800<br/>
                        ** EUR 10,000 x 1.25 = US $12,500</p>
                    <p><strong>Nilai tukar adalah rasio antara pair mata uang.</strong></p>
                    <p>Contoh, nilai tukar USD/CHF menjelaskan berapa banyak dolar AS yang dibutuhkan untuk membeli 1
                        Fanc Swiss atau berapa banyak Franc Swiss yang dibutuhkan untuk membeli 1 dolar AS.</p>
        </Section>
        <Section>
          <Heading number='1' heading='Bagaimana membaca kuotasi harga (forex quotes)' />
          <p>Mata uang selalu dikutip berpasangan; seperti GBP/USD atau USD/JPY. Alasannya karena, dalam
                        setiap transaksi forex diatur membeli satu mata uang dan menjual mata uang lainnya secara
                        bersamaan. </p>
                    <p>Berikut adalah contoh nilai tukar mata uang pound Inggris VS dolar AS:</p>
                    
                    <p><img class="partimg" alt="GBP/USD forex quote"
                            src="https://www.hsb.co.id/learn/images/pre-school-gbpusd-quote2.png"/></p>
                            <p>Mata uang di sebelah kiri garis miring
                    disebut base currency atau mata uang dasar (pound Inggris), sedangkan mata uang di sebelah kanan
                    disebut counter or quote currency atau mata uang pembanding ( dolar AS).</p>
                    <p>Saat membeli, nilai tukar memberitahu Anda berapa banyak yang harus dibayarkan dalam satuan mata
                        uang kutipan untuk membeli 1 unit mata uang dasar. Pada contoh di atas, Anda harus membayar
                        1,51258 dolar AS untuk membeli 1 pound Inggris.</p>
                    <p>Saat menjual, nilai tukar memberitahu Anda berapa banyak unit mata uang pembanding yang Anda
                        dapatkan karena menjual 1 unit mata uang dasar. Pada contoh di atas, Anda akan menerima 1,51258
                        dolar AS saat menjual 1 pound Inggris.</p>
                    <p>Base currency adalah “dasar” untuk membeli atau menjual. Jika membeli EUR/USD, berarti anda
                        membeli mata uang dasar dan secara bersamaan menjual mata uang pembanding. Singkatnya, beli EUR,
                        jual USD.</p>
                    <ul>
                        <li>Anda akan membeli, jika yakin mata uang dasar akan naik (mendapatkan nilai) terhadap mata
                            uang pembanding</li>
                        <li>Anda akan menjual, jika berpikir mata uang dasar akan terdepresiasi (kehilangan nilai)
                            terhadap mata uang pembanding.</li>
                    </ul>
        </Section>
        <Section>
          <Heading number='2' heading='Long & Short' />
          <p>Pertama, Anda harus menentukan apakah ingin membeli atau menjual.</p>
                    <p>Membeli atau buy ( membeli mata uang dasar dan menjual mata uang pembanding), berarti Anda
                        berharap nilai mata uang dasar akan meningkat, kemudian akan menjualnya kembali dengan harga
                        yang lebih tinggi.</p>
                    <p>Disebut "going long" atau mengambil “posisi long”. long = beli.</p>
                    <p>Menjual atau sell ( menjual mata uang dasar dan membeli mata uang pembanding), berarti Anda
                        melihat nilai uang dasar jatuh, kemudian akan membelinya kembali dengan harga lebih rendah.</p>
                    <p>Disebut "going short" atau mengambil "posisi short". short = sell.</p>
        </Section>
        <Section>
          <Heading number='3' heading='Bid, Ask dan Spread' />
          <p>Semua kutipan forex dinilai dengan dua harga: bid dan ask. Harga bid biasanya lebih rendah dari
                        ask.</p>
                    <p>Bid adalah harga di mana broker bersedia untuk membeli mata uang dasar dalam pertukaran dengan
                        mata uang pembanding. Ini berarti bid adalah harga terbaik yang tersedia di mana trader akan
                        menjual ke pasar.</p>
                    <p>Ask adalah harga di mana broker akan menjual mata uang dasar dalam pertukaran untuk mata uang
                        pembanding. Ini berarti harga ask adalah harga terbaik yang tersedia di mana Anda akan membeli
                        dari pasar. Dengan kata lain, ask price adalah harga penawaran.</p>
                    <p>Perbedaan nilai antara bid dan ask dikenal dengan istilah SPREAD.</p>
                    <p>Pada quote EUR/USD di atas, bid adalah 1,34568 dan ask adalah 1,34588. Lihatlah bagaimana broker
                        membuatnya sangat mudah untuk menukar uang Anda.</p>
                    <ul>
                        <li>Jika ingin menjual EUR, klik "Jual" dan Anda akan menjual euro di harga 1,34568.</li>
                        <li>Jika ingin membeli EUR, klik "Beli" dan Anda akan membeli euro di harga 1,34588.</li>
                    </ul>
                    <p>Ini adalah ilustrasi sebagai rangkuman semua penjelasan diatas:</p>
        </Section>
       
      </div>
    </article>
  </Container>
  )
}

export default PenghasilanTrading
