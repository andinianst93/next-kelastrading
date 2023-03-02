import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const ForexVsSaham = () => {
  return (
    <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb
          title1='Akademi'
          title2='Kelas Trading'
          title3='Forex VS Saham dalam Dunia Trading'
        />
        <Header
          title='Forex VS Saham dalam Dunia Trading'
          description='Pahami perbedaan antara trading forex dan saham untuk memilih instrumen investasi yang tepat. Pelajari kelebihan dan kekurangan masing-masing serta faktor-faktor yang memengaruhi keduanya dalam dunia trading.'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC
          toc1='Pasar dibuka 24 jam'
          toc2='Komisi minimum atau bebas komisi'
          toc3='Eksekusi order instan dan cepa'
          toc4='Harga jatuh dengan cepat dalam jangka pendek'
          toc5='Bebas Perantara/Calo'
          toc6='Harga pasar bebas kontrol dari opsi beli-jual'
          toc7='Analis dan perusahaan pialang tidak mempengaruhi pasar'
        />
        <div className='partcon'>
          <Section>
            <p>
              Terdapat sekitar 2.800 saham yang terdaftar di bursa efek New
              York. Sekitar 3.100 saham lain terdaftar di NASDAQ.
            </p>
            <p>
              Mana yang Anda pilih? Punya waktu untuk mengikuti begitu banyaknya
              saham?
            </p>
            <p>
              Dalam trading spot currency, ada puluhan mata uang yang
              diperdagangkan, tetapi mayoritas pemain pasar memperdagangkan
              empat pasangan mata uang utama.
            </p>
            <p>
              Bukankah empat pasangan mata uang ini jauh lebih mudah untuk
              diawasi daripada ribuan saham?
            </p>
            <p>
              Lihatlah Mr. Forex Sangat percaya diri, Mr. Stock tidak memberi
              kesempatan!
            </p>
            <p>
              Itu hanya salah satu dari banyak keunggulan pasar forex.
              Keunggulan lainnya adalah:
            </p>
          </Section>
          <Section>
            <Heading number='1' heading='Pasar dibuka 24 jam' />
            <p>
              Pasar forex dibuka 24 jam. Sebagian besar broker buka dari hari
              Minggu pukul 16:00 hingga Jumat pukul 16:00 dengan menyediakan
              layanan Nasabah 24/7.
            </p>
            <p>
              Anda dapat bertransaksi selama pembukaan jam pasar Amerika, Asia,
              maupun Erop dengan menyesuaikan jadwal trading Anda sendiri.
            </p>
          </Section>
          <Section>
            <Heading number='2' heading='Komisi minimum atau bebas komisi' />
            <p>
              Sebagian besar broker forex tidak memungut komisi atau biaya
              transaksi tambahan untuk perdagangan secara online atau via
              aplikasi seluler.
            </p>
            <p>
              Dengan spread yang ketat, konsisten, dan transparan, biaya trading
              forex lebih rendah daripada pasar lainnya.
            </p>
            <p>
              Kebanyakan broker menerima kompensasi untuk layanan mereka melalui
              spread bid / ask.
            </p>
          </Section>
          <Section>
            <Heading number='3' heading='Eksekusi order instan dan cepat' />
            <p>
              Eksekusi order secara langsung dalam kondisi pasar normal. Harga
              yang ditampilkan saat mengeksekusi order adalah harga yang
              didapatkan secara real-time.
            </p>
            <p>
              Ingat! broker hanya memberi saran harga dengan stoploss, limit dan
              entri order pada kondisi pasar normal.
            </p>
            <p>
              Sebagian besar order bersifat instan, tetapi di bawah kondisi
              pasar yang sangat fluktuatif, eksekusi order mungkin mengalami
              penundaan.
            </p>
          </Section>
          <Section>
            <Heading
              number='4'
              heading='Harga jatuh dengan cepat dalam jangka pendek'
            />
            <p>
              Berbeda dengan pasar ekuitas, tidak ada batasan short selling di
              pasar mata uang. Peluang selalu ada terlepas dari apakah trader
              melakukan long atau short sesuai pergerakan trend pasar.
            </p>
            <p>
              Karena perdagangan mata uang selalu melibatkan pembelian satu sisi
              mata uang pada saat yang sama menjual mata uang lain, tidak ada
              bias struktural pasar. Jadi, Anda selalu memiliki akses yang sama
              untuk berdagang di pasar dengan naik-turunnya harga
            </p>
          </Section>
          <Section>
            <Heading number='5' heading='Bebas Perantara/Calo' />
            <p>
              Pasar bursa yang terpusat memberikan banyak keuntungan bagi
              trader. Namun, masalahnya adalah adanya campur tangan perantara.
            </p>
            <p>
              Pihak manapun yang melibatkan diri sebagai perantara, baik sebagai
              pembeli atau penjual sekuritas atau instrumen keuangan akan
              mengenakan biaya tambahan.
            </p>
            <p>
              Di sisi lain, trading forex bersifat desentralisai yang berarti
              quotes dapat bervariasi tergantung dealer mata uang yang berbeda.{' '}
            </p>
            <p>
              Persaingan antar calo sangat ketat sehingga anda hampir selalu
              yakin mendapatkan quotes terbaik. Forex trader mendapatkan akses
              lebih cepat dan biaya lebih murah.
            </p>
          </Section>
          <Section>
            <Heading
              number='6'
              heading='Harga pasar bebas kontrol dari opsi beli-jual'
            />
            <p>
              Berapa kali Anda mendengar bahwa perusahaan “A” menjual ini atau
              membeli itu? Pasar saham sangat rentan terhadap pembelian dan
              penjualan dengan sejumlah besar dana.
            </p>
            <p>
              Dalam trading forex, besarnya volume pasar forex membuat
              kemungkinan satu perusahaan atau bank tidak dapat mengendalikan
              suatu mata uang tertentu.
            </p>
            <p>
              Bank, pengelola investasi global, pemerintah, lembaga konversi
              mata uang ritel atau individu- dengan kekayaan besar hanyalah
              beberapa peserta di pasar spot-currency dengan tingkat likuiditas
              belum pernah terjadi sebelumnya.
            </p>
          </Section>
          <Section>
            <Heading
              number='7'
              heading='Analis dan perusahaan pialang tidak mempengaruhi pasar'
            />
            <p>
              Apakah Anda menonton berita belakangan ini? Pernah mendengar
              tentang saham tertentu oleh seorang analis dari perusahaan pialang
              bergengsi yang dituduh menawarkan rekomendasinya kepada nasabah
              untuk memasang opsi beli saat harga saham menurun dengan cepat?
            </p>
            <p>
              Ingat! Hubungan ini hanya sebatas mitra kerja. Tidak peduli apapun
              campur tangan pemerintah, peristiwa ini belum pernah terdengar
              sebelumnya.
            </p>
            <p>
              IPO adalah bisnis besar bagi perusahaan yang go public dan
              perusahaan pialang
            </p>
            <p>
              Hubungan saling menguntungkan terjadi antara analis yang bekerja
              untuk perusahaan pialang yang membutuhkan Nasabah
            </p>
            <p>
              Sebagai pasar utama, trading forex menghasilkan miliaran
              pendapatan untuk bank-bank dunia dan merupakan kebutuhan pasar
              global. Analis trading forex tidak memiliki pengaruh terhadap
              nilai tukar; mereka hanya menganalisa situasi harga.
            </p>
          </Section>
        </div>
      </article>
    </Container>
  )
}

export default ForexVsSaham
