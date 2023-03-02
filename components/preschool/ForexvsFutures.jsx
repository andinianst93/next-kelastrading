import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const ForexvsFutures = () => {
  return (
    <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb
          title1='Akademi'
          title2='Kelas Trading'
          title3='Apa Itu Forex vs Futures Trading dan Perbandingannya'
        />
        <Header
          title='Apa Itu Forex vs Futures Trading dan Perbandingannya'
          description='Pelajari perbedaan antara forex dan futures trading dan pilihlah yang paling sesuai dengan kebutuhan Anda. Baca artikel ini untuk memahami perbandingan antara keduanya dan temukan mana yang lebih cocok untuk investasi Anda.'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC
          toc1='Likuiditas'
          toc2='Pasar terbuka 24 jam ( waktu EST )'
          toc3='Minimum atau bebas komisi'
          toc4='Harga pasti'
          toc5='Jaminan kontrol risiko'
        />
        <div className='partcon'>
          <Section>
            <p>
              Pasar forex menawarkan lebih banyak keunggulan dibandingkan pasar
              berjangka (futures).
            </p>
            <p>Tunggu! Masih banyak lagi.....??</p>
          </Section>
          <Section>
            <Heading number='1' heading='Likuiditas' />
            <p>
              Volume transaksi pasar forex mencapai $ 5,3 triliun AS per hari,
              menjadikannya pangsa pasar terbesar dan terlikuid di dunia.{' '}
            </p>
            <p>
              Pasar ini dapat menyerap volume perdagangan dan ukuran transaksi
              yang jauh melebihi kapasitas pasar lainnya.{' '}
            </p>
            <p>
              Volume transaksi pasar berjangka $ 30 miliar per hari. Tiga puluh
              miliar? Kecil bro!
            </p>
            <p>
              Pasar berjangka yang relatif terbatas sulit menyaingi likuiditas
              pasar forex.
            </p>
            <p>
              Pasar forex selalu likuid, artinya posisi dapat ditutup dengan
              menghentikan order yang dieksekusi dengan sedikit atau tanpa
              slippage. Pengecualian untuk kondisi pasar yang sangat fluktuatif.
            </p>
          </Section>
          <Section>
            <Heading number='2' heading='Pasar terbuka 24 jam ( waktu EST )' />
            <p>
              Pada pukul 5:00 pm EST Minggu, perdagangan dimulai ketika pasar
              dibuka di Sydney.{' '}
            </p>
            <p>
              Pada pukul 7:00 pm EST, pasar Tokyo dibuka, diikuti oleh London
              pada pukul 3:00 am EST.
            </p>
            <p>
              Dan akhirnya, New York dibuka pada jam 8:00 am EST dan ditutup
              pada jam 4:00 pm EST.
            </p>
            <p>
              Sebelum perdagangan New York tutup, pasar Sydney kembali dibuka -
              ini adalah pasar mulus 24 jam!
            </p>
            <p>
              Hal ini memberi notifikasi kepada trader untuk bereaksi cepat
              terhadap berita yang menguntungkan atau tidak menguntungkan.
            </p>
            <p>
              Jika data penting datang dari Inggris atau Jepang saat pasar
              berjangka AS ditutup, pembukaan hari berikutnya bisa menjadi
              perjalanan liar.
            </p>
            <p>
              Pasar semalam dalam kontrak berjangka memang ada, dan sementara
              likuiditas membaik, mereka masih diperdagangkan relatif tipis
              dibandingkan dengan pasar valas spot.
            </p>
          </Section>
          <Section>
            <Heading number='3' heading='Minimum atau bebas komisi' />
            <p>
              Dengan tersedianya Broker Komunikasi Elektronik yang lebih populer
              dan lazim selama beberapa tahun terakhir, ada kemungkinan broker
              dapat meminta Anda untuk membayar komisi.
            </p>
            <p>
              Tapi sebenarnya, biaya komisi layaknya beli kacang dibandingkan
              dengan komisi di pasar berjangka.
            </p>
            <p>
              Persaingan antar broker forex sangat ketat sehingga kemungkinan
              besar akan mendapatkan penawaran harga terbaik dan biaya transaksi
              yang sangat rendah.
            </p>
          </Section>
          <Section>
            <Heading number='4' heading='Harga pasti' />
            <p>
              Saat bertrading forex, Anda dapat mengeksekusi dengan cepat
              kepastian harga dalam kondisi pasar normal. Sedangkan pasar
              berjangka dan ekuitas tidak menawarkan kepastian harga atau
              eksekusi secara instan.
            </p>
            <p>
              Bahkan dengan munculnya trading elektronik adanya jaminan harga
              pasti untuk kecepatan eksekusi, sedangkan untuk mengisi order pada
              pasar berjangka dan ekuitas jauh dari kepastian
            </p>
            <p>
              Laporan harga dari broker seringkali mewakili perdagangan
              TERAKHIR, belum tentu harga untuk kontrak akan dipenuhi.
            </p>
          </Section>
          <Section>
            <Heading number='5' heading='Jaminan kontrol risiko' />
            <p>
              Trader harus memiliki batas posisi untuk tujuan manajemen risiko.
              Jumlah dana diatur relatif terhadap dana di akun nasabah.
            </p>
            <p>
              Risiko diminimalkan karena kapabilitas online dari platform
              perdagangan akan secara otomatis memunculkan margin call jika
              margin yang dibutuhkan melebihi dana modal yang tersedia di akun
              Anda.
            </p>
            <p>
              Selama kondisi pasar normal, semua posisi terbuka akan ditutup
              paksa (selama kondisi pasar cepat, posisi ditutup di luar level
              stop loss ).
            </p>
            <p>
              Di pasar berjangka, posisi mungkin dilikuidasi dengan kerugian
              yang lebih besar dari modal akun, dan Anda akan bertanggung jawab
              atas segala defisit yang dihasilkan, menyebalkan!
            </p>
            <table border='0' width='425'>
              <tbody>
                <tr>
                  <th>Keunggulan</th>
                  <th>Forex</th>
                  <th>Futures</th>
                </tr>
                <tr>
                  <td>Trading 24 jam</td>
                  <td align='center'>Ya</td>
                  <td align='center'>Tidak</td>
                </tr>
                <tr>
                  <td>Minimal atau bebas komisi</td>
                  <td align='center'>Ya</td>
                  <td align='center'>Tidak</td>
                </tr>
                <tr>
                  <td>Leverage 500:1</td>
                  <td align='center'>Ya</td>
                  <td align='center'>Tidak</td>
                </tr>
                <tr>
                  <td>Harga pasti</td>
                  <td align='center'>Ya</td>
                  <td align='center'>Tidak</td>
                </tr>
                <tr>
                  <td>Jaminan kontrol risiko</td>
                  <td align='center'>Ya</td>
                  <td align='center'>Tidak</td>
                </tr>
              </tbody>
            </table>
            <p>
              Penilaian skor Forex vs Futures, Mr. Forex terlihat TAK
              TERKALAHKAN! Sekarang temui para pemenang yang berdagang pasar
              forex.
            </p>
          </Section>
        </div>
      </article>
    </Container>
  )
}

export default ForexvsFutures
