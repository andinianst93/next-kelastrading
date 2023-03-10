import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const TipeBroker = () => {
  return (
    <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='Jenis-jenis Broker' />
        <Header
          title='Jenis-jenis Broker'
          description='Pelajari tentang berbagai jenis broker dan peran yang mereka mainkan dalam perdagangan pasar keuangan. Dari broker saham hingga broker forex, temukan pilihan terbaik untuk kebutuhan investasi Anda dengan artikel informatif kami.'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC toc1='Apa itu Dealing Desk Broker ( Pialang pedagang )?' toc2='Apa itu broker STP?' toc3='Apa itu broker ECN?' />
        <div className='partcon'>
            <Section>
            <p>Dalam memilih broker forex, cari tahu apa yang Anda inginkan.</p>
                    <p>Saat mengunjungi sebuah restoran, bukankah Anda akan melihat daftar menu sebelum memutuskan
                        pemesanan?</p>
                    <p>Meskipun Anda adalah pelanggan tetap restoran tersebut, alangkah baiknya untuk memerika menu-menu
                        yang disediakan.</p>
                    <p>Pada umumnya, broker forex dikelompokkan menjadi dua:</p>
                    <ol>
                        <li><strong>Dealing Desks (DD) dan</strong></li>
                        <li>
                            <strong>No Dealing Desk (NDD)</strong>
                        </li>
                    </ol>
                    <p>Dealing Desk brokers atau Pialang pedagang juga disebut pembuat pasar. </p>
                    <p>No Dealing Desk atau Pialang dapat dibagi lagi menjadi:</p>
                    <ul>
                        <li>
                            <em>Straight Through Processing (STP)</em> , dan
                        </li>
                        <li>
                            <em>Electronic Communication Network +Straight Through Processing (ECN + STP)</em>.
                        </li>
                    </ul>
                    
            </Section>
          <Section>
            <Heading number='1' heading='Apa itu Dealing Desk Broker ( Pialang pedagang )?' />
            <p>Broker forex yang beroperasi sebagai “pedagang” menghasilkan uang melalui spread dan menyediakan
                        likuiditas kepada Nasabah. Broker jenis ini juga disebut "pembuat pasar". </p>
                    <p><strong>BrokerDD menciptakan pasar untuk klien mereka, artinya mereka sering mengambil sisi
                            berlawanan dari transaksi Nasabah.</strong></p>
                    <p>Anda mungkin berpikir bahwa akan terjadi konflik nantinya, sebenarnya tidak.</p>
                    <p>Broker akan tetap memberikan pilihan menjual atau membeli, tetapi mereka tidak peduli terhadap
                        pilihan order terakhir dari Nasabah.</p>
                    <p>Karena para pembuat pasar mengendalikan harga saat order telah terpenuhi, dimana ada risiko yang
                        relatif kecil dengan ketentuan spread TETAP ( ada penjelasan selanjutnya nanti ).</p>
                    <p>Nasabah broker dealing desk tidak melihat harga nyata dari pasar interbank. Tapi jangan takut.
                        Persaingan antar broker sangat ketat sehingga suku bunga yang ditawarkan oleh broker jauh dari
                        suku bunga Inter-bank.</p>
                    <p>Berikut adalah skema transaksi broker Dealing Desk:</p>
                    <p>Katakanlah Anda melakukan order buy untuk EUR / USD untuk 100.000 unit.</p>
                    <p>Untuk memenuhi kebutuhan Anda, broker akan mencoba menemukan order penjualan yang cocok dari
                        klien lain, atau mentransfer transaksi Anda ke penyedia likuiditasnya, yaitu entitas yang lebih
                        besar yang dapat membeli dan menjual aset keuangan kapan saja.</p>
                    <p>Dengan ini, risiko akan semakin kecil karena mereka mendapat keuntungan dari spread tanpa
                        mengambil sisi berlawanan dari transaksi Nasabah</p>
                    <p>Namun, jika tidak ada order yang cocok, maka broker akan membuka order yang berlawanan dengan
                        Anda. Cara ini digunakan untuk mengecilkan resiko dan tetap mendapat profit.</p>
                    <p>Ingat! setiap broker forex memiliki kebijakan management risiko yang berbeda, jadi pastikan untuk
                        mengetahui hal ini sebelum bekerja sama dengan broker tersebut.</p>
          </Section>
          <Section>
            <Heading number='2' heading='Apa itu broker STP?' />
            <p>Beberapa broker mungkin mengklaim bahwa mereka adalah broker ECN sejati, tetapi kenyataannya
                        broker ini hanya memiliki sistem Straight Through Processing ( proses jalur langsung )</p>
                    <p>Broker forex yang memiliki sistem STP mengalihkan order Nasabah langsung ke penyedia likuiditas,
                        dalam hal ini adalah bank-bank yang memiliki akses ke pasar interbank.</p>
                    <p>Broker NDD STP biasanya memiliki banyak penyedia likuiditas, dengan mengutip bid price dan ask
                        price mereka sendiri.</p>
                    <p>Katakanlah broker NDD STP ini memiliki tiga penyedia likuiditas yang berbeda. Dibawah trelihat
                        tiga pasang bid dan ask yang berbeda pada sistem.</p>
                    <table border="0" width="525">
                        <tbody>
                            <tr>
                                <th></th>
                                <th>Bid</th>
                                <th>Ask</th>
                            </tr>
                            <tr>
                                <td>Liquidity Provider A</td>
                                <td>1.2998</td>
                                <td>1.3001</td>
                            </tr>
                            <tr>
                                <td>Liquidity Provider B</td>
                                <td>1.2999</td>
                                <td>1.3001</td>
                            </tr>
                            <tr>
                                <td>Liquidity Provider C</td>
                                <td>1.3000</td>
                                <td>1.3002</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Sistem kemudian akan mengurutkan bid price dan ask price ini dari terbaik hingga terburuk. Dalam
                        hal ini, harga terbaik di sisi bid adalah 1.3000 (Nasabah menjual tinggi) dan harga terbaik di
                        sisi ask adalah 1.3001 (Nasabah membeli rendah). Bid / ask sekarang 1.3000/1.3001.</p>
                    <p>Apakah akan terlihat kutipan ini di platform?</p>
                    <p>Tentu saja tidak!</p>
                    <p>Broker akan menambahkan markup kecil yang biasanya diperbaiki untuk mengkompensasi pekerjaan yang
                        mereka lakukan. Jika kebijakan mereka adalah menambahkan markup 1-pip, penawaran yang akan
                        terlihat di platform Anda adalah 1.2999/1.3002.</p>
                    <p><strong>Spread 1-pip berubah menjadi spread 3-pip.</strong></p>
                    <p>Ketika Nasabah memutuskan membeli 100,000 unit EUR / USD di 1.3002, order Nasabah akan dialihkan
                        ke Penyedia Likuiditas.</p>
                    <p>Jika order Nasabah disetujui, Penyedia Likuiditas akan membuat short-position 100,000 unit
                        EUR/USD 1.3001, dan Nasabah akan membuat long-position 100,000 unit EUR/USD pada 1.3002. Broker
                        akan mendapat penghasilan 1 pip.</p>
                    <p>Kuotasi bid/ask yang berubah menjadi alasan sebagian besar broker STP memiliki spread yang
                        variabel. Jika spread melebar, broker tidak punya pilihan selain memperluas spread mereka juga.
                    </p>
                    <p>Beberapa broker STP menawarkan spread tetap, sebagian lagi menawarkan spread yang VARIABEL.</p>
          </Section>
          <Section>
            <Heading number='3' heading='Apa itu broker ECN?' />
            <p>Broker ECN sejatinya mengizinkan Nasabah mereka berinteraksi dengan mitra mereka seperti: bank,
                        ritel trader, hedge funds, dan bahkan broker dan mitra lainnya. Intinya para peserta berdagang
                        satu sama lain dengan menawarkan harga bid/ask terbaik.</p>
                    <p>Broker ECN juga memperlihatkan "Kedalaman Pasar (Depth of Market)."</p>
                    <p>Depth of Market memungkinkan klien untuk melihat order buy atau sell dari trader lainnya. Dengan
                        ini Nasabah bisa membuka order yang berlawanan dengan trader lainnya untuk mendapatkan
                        keuntungan. Broker ECN biasanya membebankan biaya KOMISI kecil per lot dari transaksi.</p>
          </Section>
         
        </div>
      </article>
    </Container>
  )
}

export default TipeBroker
