import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const WaktuTerbaikTrading = () => {
  return (
    
       <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='Waktu dan Hari Terbaik untuk Trading Forex ' />
        <Header
          title='Waktu dan Hari Terbaik untuk Trading Forex '
          description='Pelajari tentang jam buka dan tutup pasar forex, volatilitas pasangan mata uang utama, dan bagaimana memilih waktu yang tepat untuk memaksimalkan profit dan meminimalkan risiko dalam trading forex.'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC toc1='Kelola waktu dengan bijak' toc2='Waktu terbaik:' toc3='Waktu terburuk:'/>
        <div className='partcon'>
            <Section>
            <p>Seperti yang diketahui, sesi London adalah sesi dagang yang paling sibuk. Namun ada juga beberapa
                        hari dalam sepekan dimana pasar cenderung
                        bergerak lebih aktif.
                    </p>
                    <p>Cari tahu hari terbaik dalam sepekan untuk berdagang forex.</p>
                    <p>Di bawah ini terdapat bagan kisaran pip rata-rata pasangan utama setiap hari dalam sepekan:</p>
                    <table border="0" width="525">
                        <tbody>
                            <tr>
                                <th>PASANGAN</th>
                                <th>MINGGU</th>
                                <th>SENIN</th>
                                <th>SELASA</th>
                                <th>RABU</th>
                                <th>KAMIS</th>
                                <th>JUMAT</th>
                            </tr>
                            <tr>
                                <td align="center"><strong>EUR/USD</strong></td>
                                <td align="center">69</td>
                                <td align="center">109</td>
                                <td align="center" bgcolor="#FFFF99">142</td>
                                <td align="center" bgcolor="#FFFF99">136</td>
                                <td align="center" bgcolor="#FFFF99">145</td>
                                <td align="center">144</td>
                            </tr>
                            <tr>
                                <td align="center"><strong>GBP/USD</strong></td>
                                <td align="center">73</td>
                                <td align="center">149</td>
                                <td align="center" bgcolor="#FFFF99">172</td>
                                <td align="center" bgcolor="#FFFF99">152</td>
                                <td align="center" bgcolor="#FFFF99">169</td>
                                <td align="center">179</td>
                            </tr>
                            <tr>
                                <td align="center"><strong>USD/JPY</strong></td>
                                <td align="center">41</td>
                                <td align="center">65</td>
                                <td align="center" bgcolor="#FFFF99">82</td>
                                <td align="center" bgcolor="#FFFF99">91</td>
                                <td align="center" bgcolor="#FFFF99">124</td>
                                <td align="center">98</td>
                            </tr>
                            <tr>
                                <td align="center"><strong>AUD/USD</strong></td>
                                <td align="center">58</td>
                                <td align="center">84</td>
                                <td align="center" bgcolor="#FFFF99">114</td>
                                <td align="center" bgcolor="#FFFF99">99</td>
                                <td align="center" bgcolor="#FFFF99">115</td>
                                <td align="center">111</td>
                            </tr>
                            <tr>
                                <td align="center"><strong>NZD/USD</strong></td>
                                <td align="center">28</td>
                                <td align="center">81</td>
                                <td align="center" bgcolor="#FFFF99">98</td>
                                <td align="center" bgcolor="#FFFF99">87</td>
                                <td align="center" bgcolor="#FFFF99">100</td>
                                <td align="center">96</td>
                            </tr>
                            <tr>
                                <td align="center"><strong>USD/CAD</strong></td>
                                <td align="center">43</td>
                                <td align="center">93</td>
                                <td align="center" bgcolor="#FFFF99">112</td>
                                <td align="center" bgcolor="#FFFF99">106</td>
                                <td align="center" bgcolor="#FFFF99">120</td>
                                <td align="center">125</td>
                            </tr>
                            <tr>
                                <td align="center"><strong>USD/CHF</strong></td>
                                <td align="center">55</td>
                                <td align="center">84</td>
                                <td align="center" bgcolor="#FFFF99">119</td>
                                <td align="center" bgcolor="#FFFF99">107</td>
                                <td align="center" bgcolor="#FFFF99">104</td>
                                <td align="center">116</td>
                            </tr>
                            <tr>
                                <td align="center"><strong>EUR/JPY</strong></td>
                                <td align="center">19</td>
                                <td align="center">133</td>
                                <td align="center" bgcolor="#FFFF99">178</td>
                                <td align="center" bgcolor="#FFFF99">159</td>
                                <td align="center" bgcolor="#FFFF99">223</td>
                                <td align="center">192</td>
                            </tr>
                            <tr>
                                <td align="center"><strong>GBP/JPY</strong></td>
                                <td align="center">100</td>
                                <td align="center">169</td>
                                <td align="center" bgcolor="#FFFF99">213</td>
                                <td align="center" bgcolor="#FFFF99">179</td>
                                <td align="center" bgcolor="#FFFF99">270</td>
                                <td align="center">232</td>
                            </tr>
                            <tr>
                                <td align="center"><strong>EUR/GBP</strong></td>
                                <td align="center">35</td>
                                <td align="center">74</td>
                                <td align="center" bgcolor="#FFFF99">81</td>
                                <td align="center" bgcolor="#FFFF99">79</td>
                                <td align="center" bgcolor="#FFFF99">75</td>
                                <td align="center">91</td>
                            </tr>
                            <tr>
                                <td align="center"><strong>EUR/CHF</strong></td>
                                <td align="center">35</td>
                                <td align="center">55</td>
                                <td align="center" bgcolor="#FFFF99">55</td>
                                <td align="center" bgcolor="#FFFF99">64</td>
                                <td align="center" bgcolor="#FFFF99">87</td>
                                <td align="center">76</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Seperti yang terlihat di atas, mungkin akan lebih baik berdagang selama pertengahan pekan, karena
                        aktivitas trading perlahan naik cepat dan
                        trader semakin banyak memenuhi market.</p>
                    <p>Hari Jumat biasanya sibuk sampai jam 12:00 EST dan kemudian volume turun cukup banyak sampai
                        penutupan pada jam 5:00 sore EST. Artinya Trader
                        hanya bekerja setengah hari pada hari Jumat.</p>
                    <p>Akhir pekan selalu dimulai lebih awal!!</p>
                    <p>Waktu tersibuk umumnya merupakan waktu terbaik untuk berdagang karena volatilitas tinggi
                        cenderung memberi lebih banyak peluang.</p>
            </Section>
          <Section>
            <Heading number='1' heading='Kelola waktu dengan bijak' />
            <p>Ingat! Anda bukan robot yang tidak butuh tidur dan tidak mungkin untuk melakukan perdagangan di
                        semua sesi. Bahkan jika bisa, untuk apa?
                        Meskipun benar pasar forex terbuka 24 jam sehari, bukan berarti aksi dagang dilakukan tanpa
                        henti setiap saat.</p>
                    <p>Selain itu, tidur adalah bagian penting dari gaya hidup sehat!</p>
                    <p>Anda butuh tidur untuk memulihkan tenaga agar dapat melakukan tugas-tugas harian seperti bekerja,
                        bersosialisasi dengan orang lain,
                        memelihara keluarga atau mengatur rencana hidup ke depan.</p>
                    <p>Anda pastinya perlu istirahat jika berencana untuk menjadi ahli profesional.</p>
                    <p>Setiap trader perlu mengelola waktu untuk berdagang.</p>
                    <p>Setiap trader harus tahu kapan saatnya berdagang dan kapan untuk TIDAK.</p>
                    <p>Berikut kutipan waktu terbaik dan terburuk untuk berdagang:</p>
          </Section>
          <Section>
            <Heading number='2' heading='Waktu terbaik:' />
            <ul>
                        <li>Sesi overlap ( tumpang-tindih) ! Ada saat-saat dimana data penting dirilis yang mungkin akan
                            memicu volatilitas dan arah pergerakan
                            harga. Pastikan anda menandai kutipan Jam dagang untuk membuat catatan waktu buka pasar dan
                            waktu penutupan.
                        </li>
                        <li>Sesi London cenderung lebih sibuk dari ketiga sesi.</li>
                        <li>Pertengahan pekan biasanya akan ramai, dengan rentang pip melebar pada sebagian besar
                            pasangan mata uang utama.</li>
                    </ul>
          </Section>
          <Section>
            <Heading number='3' heading='Waktu terburuk:' />
            <ul>
                        <li>Minggu - semua orang tidur atau menikmati akhir pekan!</li>
                        <li>Jumat - likuiditas mereda selama bagian terakhir sesi AS.</li>
                        <li>Liburan - semua orang beristirahat.</li>
                        <li>Peristiwa penting - saatnya sideway muncul!</li>
                        <li>Selama acara TV terkenal sedang hits ( Game of throne, Final NBA atau Superbowl dll)</li>
                    </ul>
                    <p>Tampaknya memang tidak mudah berdagang dalam sesi optimal? Ups, Tenang!</p>
                    <p>Ada kesempatan untuk menjadi scalping trader. Kita akan membahas ini pada artikel berikutnya.</p>
                    <p>Coba beralih bagaimana benar-benar menghasilkan uang di bisnis Forex. Senang? Memang seharusnya!
                    </p>
          </Section>
          
        </div>
      </article>
    </Container>
    
  )
}

export default WaktuTerbaikTrading
