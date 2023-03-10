import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const DealingDesk = () => {
  return (
    <Container>
    <section className='bg-[#00028f] w-full pt-12'>
      <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='Dealing Desk vs No Dealing Desk' />
      <Header
        title='Dealing Desk vs No Dealing Desk'
        description='Apa perbedaan antara dealing desk dan no dealing desk dalam perdagangan pasar keuangan dan bagaimana keduanya dapat memengaruhi eksekusi perdagangan Anda? Dapatkan pemahaman yang lebih baik tentang jenis-jenis broker di berikut ini.'
      />
    </section>
    <article className='py-4 px-8 mx-auto max-w-screen-lg'>
      <TOC toc1='TIDAK SEMUA BROKER JELEK.' />
      <div className='partcon'>
        <Section>
        <p>Jenis broker mana yang akan dipilih? Dealing desk atau no dealing desk ( Pialang Pedagang vs
                        Pialang )</p>
                    <p>Satu jenis broker tidak lebih baik daripada yang lain karena semua akan tergantung pada jenis
                        trader seperti apa yang Anda pilih.</p>
                    <p>Keputusan ada di tangan Anda. Pilih spread lebih kecil dengan membayar komisi transaksi atau
                        pilih spread yang lebih lebar tanpa perlu membayar biaya tambahan.</p>
                    <p>Biasanya, trader harian dan calo lebih menyukai spread yang lebih kecil karena lebih mudah
                        mengambil keuntungan jangka pendek.</p>
                    <p>Sementara itu, spread yang lebar cenderung tidak signifikan untuk swing jangka panjang atau
                        posisi trader.</p>
                    <p>Untuk mempermudah Nasabah mengambil keputusan, berikut ini perbandingan antara Market Makers,
                        broker STP, dan broker STP + ECN:</p>
                    <table border="0" width="525">
                        <tbody>
                            <tr>
                                <th>Dealing Desk<br/>
                                    (Market Maker)</th>
                                <th>No Dealing Desk (STP)</th>
                                <th>No Dealing Desk (STP+ECN)</th>
                            </tr>
                            <tr>
                                <td valign="top">Spread tetap</td>
                                <td valign="top">Sebagian besar memiliki spread variabel</td>
                                <td valign="top">Spread variabel atau biaya komisi</td>
                            </tr>
                            <tr>
                                <td valign="top">Ambil sisi berlawanan dari transaksi Nasabah</td>
                                <td valign="top">Mempertemukan Nasabah dengan penyedia likuiditas</td>
                                <td valign="top">Mempertemukan Nasabah dengan penyedia likuiditas atau Nasabah lain</td>
                            </tr>
                            <tr>
                                <td valign="top">Kuotasi buatan</td>
                                <td valign="top">Harga berasal dari penyedia likuiditas</td>
                                <td valign="top">Harga berasal dari penyedia likuiditas dan peserta ECN lainnya</td>
                            </tr>
                            <tr>
                                <td valign="top">Order diisi oleh broker secara diskresi</td>
                                <td valign="top">Eksekusi otomatis, tidak ada kutipan ulang</td>
                                <td valign="top">Otomatis, tidak ada kutipan ulang</td>
                            </tr>
                            <tr>
                                <td valign="top"></td>
                                <td valign="top"></td>
                                <td valign="top">Menampilkan Kedalaman Pasar (DOM) atau informasi likuiditas</td>
                            </tr>
                        </tbody>
                    </table>
        </Section>
        <Section>
          <Heading number='1' heading='TIDAK SEMUA BROKER JELEK.' />
          <p>Bertentangan dengan informasi yang mungkin Anda dengar dari tempat lain, broker forex benar-benar
                        tidak berkeliaran diluar sana untuk menjebak atau menipu.</p>
                    <p>Yang mereka inginkan adalah berbisnis! Coba pikirkan, jika Anda kehilangan semua uang dalam
                        trading, bukankah mereka juga akan kehilangan Nasabah.</p>
                    <p>Mitra yang ideal dari broker Dealing Desk adalah mereka yang sama-sama impas. Dengan kata lain,
                        pada akhirnya tidak menang dan juga tidak kalah .</p>
                    <p>Dengan cara ini, broker mendapatkan uang melalui spread transaksi Nasabah, tetapi pada saat yang
                        sama Nasabah tetap mempertahankan status permainan dengan tidak menghabiskan akun margin.
                        Intinya, broker ingin Nasabah terus kembali dan bertambah lebih banyak!</p>
        </Section>
       
      </div>
    </article>
  </Container>
  )
}

export default DealingDesk
