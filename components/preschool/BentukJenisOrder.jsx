import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'

const BentukJenisOrder = () => {
  return (
    <Container>
    <section className='bg-[#00028f] w-full pt-12'>
      <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='judul' />
      <Header
        title='Tentang Hello'
        description='Platform Informasi yang khusus membahas hal-hal seputar Digital Marketing yakni Search Engine Optimization (SEO), Media Sosial, Digital Ads, dan Web Development.'
      />
    </section>
    <article className='py-4 px-8 mx-auto max-w-screen-lg'>
      <TOC toc1='Market Order' toc2='Limit Entry Order' toc3='Stop Entry Order' toc4='Stop Loss Order' toc5='Trailing Stop' toc6='Jenis Order lain' toc7='Kesimpulan'/>
      <div className='partcon'>
        <Section>
        <p>Istilah order atau pesanan merujuk pada cara masuk atau keluar posisi saat transaksi forex.</p>
                    <p>Di sini kita membahas berbagai jenis order yang biasa digunakan dalam pasar forex.</p>
                    <p>Pastikan jenis order yang akan diterima oleh broker Anda.</p>
                    <p>Masing-masing broker menerima jenis order mata uang yang berbeda pula. </p>
                    <p>Ada beberapa jenis order yang dinamakan oleh beberapa broker dengan istilah yang agak asing di
                        telinga.</p>
        </Section>
        <Section>
          <Heading number='1' heading='Market Order' />
          <p>Market order adalah perintah untuk membeli atau menjual dengan <strong> harga terbaik yang
                            tersedia di pasar</strong>.</p>
                    <p>Misalnya, harga tawaran untuk EUR/USD saat ini di 1.2140 dan harga permintaan di 1.2142.</p>
                    <p>Jika hendak membeli EUR/USD, maka pasar akan menjual kepada Anda dengan harga permintaan 1.2142.
                    </p>
                    <p>Anda akan mengklik beli dan platform perdagangan akan langsung melakukan pesanan beli pada harga
                        yang dimaksud.</p>
                    <p>Jika pernah berbelanja on-line di Amazon.com, tidak berbeda jauh dengan menggunakan pemesanan
                        sekali klik. Anda menyukai harganya dan dengan sekali klik barang langsung berpindah tangan.</p>
                    <p>Hanya saja dalam transaksi forex Anda akan membeli atau menjual dengan pair mata uang. </p>
        </Section>
        <Section>
          <Heading number='2' heading='Limit Entry Order' />
          <p>Limit entry order adalah order dengan membeli di bawah harga pasar atau menjual di atas harga
                        pasar. </p>
                 <img   class='partimg'
                            src="https://www.hsb.co.id/learn/images/limit-orders.png" alt='limit entry order'/>
                        
                    <p>Misalnya, EUR / USD saat ini diperdagangkan pada 1.2050. Order jual jika harga telah menyentuh
                        1.2070.</p>
                    <p>Anda dapat duduk di depan monitor dan menunggu hingga mencapai 1.2070.</p>
                    <p>Atau dengan menetapkan batas oder jual di 1.2070 lalu meninggalkan market-watch dengan tenang.
                    </p>
                    <p>Platform akan secara otomatis melakukan order jual pada harga terbaik yang tersedia.</p>
                    <p>Jenis entri ini bisa dilakukan jika Anda yakin harga akan berbalik mencapai harga penetapan!</p>
        </Section>
        <Section>
          <Heading number='3' heading='Stop Entry Order' />
          <p>Stop entry order adalah order dengan membeli di atas harga pasar atau menjual di bawah harga
                        pasar.</p>
                        <img   class='partimg'
                            src="https://www.hsb.co.id/learn/images/stop-orders.png" alt='limit stop order'/>
                        <p>Misalnya, GBP/USD saat ini diperdagangkan di 1.5050 dan harga menuju ke atas. Anda yakin harga
                        akan berlanjut ke arah ini dan menyentuh 1.5060.</p>
                    <p>Anda dapat melakukan salah satu dari yang berikut untuk memainkan keyakinan ini:</p>
                    <ol>
                        <li>Duduk di depan market-watch dan beli saat menyentuh 1.5060 ATAU atur stop entri di harga
                            1.5060.</li>
                    </ol>
                    <p>Jenis entri ini bisa dilakukan ketika merasa harga akan bergerak dalam satu arah!</p>
        </Section>
        <Section>
          <Heading number='4' heading='Stop Loss Order' />
          <p>Stop loss order adalah order dengan tujuan untuk mencegah kerugian berlanjut jika tren
                        bertentangan dengan perkiraan Anda.</p>
                    <p>Jika order pada posisi buy, lakukan sell STOP.</p>
                    <p>Jika order pada posisi sell, lakukan buy STOP.</p>
                    <p><strong>CAMKAN BAIK-BAIK JENIS ORDER INI</strong>.</p>
                    <p>Stop loss order tetap berlaku sampai posisi dilikuidasi atau pembatalan order.</p>
                    <p>Misalnya, Anda melakukan long (beli) EUR/USD di harga 1.2230. Untuk membatasi kerugian maksimum
                        tetapkan stop-loss order di 1.2200.</p>
                    <p>Artinya jika harga EUR / USD turun ke 1.2200 alih-alih naik, platform akan secara otomatis
                        mengeksekusi order jual di 1.2200 dan menutup posisi dengan kerugian 30 pip (eww!).</p>
                    <p>Stop loss sangat berguna jika tidak ingin duduk di depan monitor sepanjang hari dan takut akan
                        kehilangan semua uang Anda.</p>
                    <p>Stop loss order dapat diatur dengan mudah pada setiap posisi yang terbuka.</p>
        </Section>
        <Section>
          <Heading number='5' heading='Trailing Stop' />
          <p>Trailing stop adalah jenis perintah stop loss dengan transaksi berjalan saat harga berfluktuasi.
                    </p>
                    <p>Katakanlah Anda telah memutuskan untuk membuat USD / JPY pada 90.80, dengan trailing stop 20
                        pips.</p>
                    <p>Artinya dengan stop loss awal ditetapkan di 91.00. jika harga turun menyentuh 90.60, order
                        trailing stop hanya akan turun di harga 90.80 (titik impas).</p>
                    <p>Ingat, bahwa perhentian hanya akan TETAP di level baru tersebut dan tidak akan melebar meski
                        pasar bergerak lebih tinggi.</p>
                    <p>Kembali ke contoh, dengan trailing stop 20 pips, jika USD / JPY mencapai 90.40, maka stop loss
                        akan bergerak ke 90.60 (mengunci laba 20 pips).</p>
                    <p>Transaksi akan tetap berjalan selama harga tidak bergerak berlawanan sebanyak 20 pips.</p>
                    <p>Setelah harga pasar menyentuh harga stop trailing, market order akan menutup posisi Anda dengan
                        harga terbaik dan posisi Anda akan ditutup.</p>
        </Section>
        <Section>
          <Heading number='6' heading='Jenis Order lain' />
          <h3>Good ‘till cancelled (GTC)</h3>
                    <p>Sebuah order GTC akan tetap aktif di pasaran sampai anda memutuskan untuk membatalkannya. Broker
                        tidak akan membatalkan order tersebut secara sembarangan. Maka itu adalah tanggung jawab anda
                        untuk mengingat kalau ada order yang terjadwal.</p>
                    <h3>Good for the day (GFD)</h3>
                    <p>Sebuah order GFD akan tetap aktif di pasaran sampai di penghujung hari trading. </p>
                    <p>Karena pasar forex 24 jam, biasanya di jam 5:00 pm EST karena saat itu penutupan pasar AS, tapi
                        kami sarankan untuk mengecek dua kali dengan broker anda. </p>
                    <h3>One-cancels-other (OCO)</h3>
                    <p>Order OCO adalah kombinasi dari dua entry dan/atau stop loss orders.</p>
                    <p>Dua order dengan variabel harga dan durasi ditempatkan di atas dan di bawah harga saat itu.
                        Ketika salah satu order tereksekusi, order lain secara otomatis dibatalkan.</p>
                    <p>Katakanlah harga EUR / USD adalah 1.2040. Anda hendak membeli di 1.2095 di atas level resistance
                        untuk mengantisipasi penembusan atau memulai posisi penjualan jika harga turun di bawah 1.1985.
                    </p>
                    <p>Pemahamannya adalah jika 1.2095 tercapai, order pembelian Anda akan dipicu dan order jual 1.1985
                        akan dibatalkan secara otomatis.</p>
                    <h3>One-triggers-other (OTO)</h3>
                    <p>Order OTO adalah kebalikan dari OCO, karena hanya melakukan order ketika order awal terpicu.</p>
                    <p>Anda melakukan order OTO ketika hendak mengatur level taking profit dan stop loss lebih awal,
                        bahkan sebelum anda melakukan trading.</p>
                    <p>Misalnya, USD / CHF saat itu diperdagangkan pada 1.2000. Anda percaya bahwa setelah mencapai
                        1.2100, nilai itu akan terbalik dan mengarah ke bawah tetapi hanya mencapai 1.1900.</p>
                    <p>Masalahnya adalah Anda hendak pergi selama satu minggu ke tempat di mana tidak tersedia jaringan
                        internet.</p>
                    <p>Untuk menangkap pergerakan harga saat melakukan perjalanan, Anda menetapkan batas jual di 1.2000
                        dan pada saat yang sama tetapkan batas beli di 1.1900, dan untuk berjaga-jaga tetapkan stop-loss
                        di 1.2100.</p>
                    <p>Baik batas beli dan perintah stop-loss hanya akan terealisasi jika order jual awal terpicu di
                        harga 1.2000.</p>
                    
        </Section>
        <Section>
          <Heading number='7' heading='Kesimpulan' />
      
                    <p>Jenis-jenis “order” umum seperti: market, limit entry, stop-entry, stop loss dan trailing stop
                        adalah yang paling dibutuhkan sebagian besar trader.</p>
                    <p>Berikut adalah contoh strategi order ( titik biru menunjukkan harga saat ini ).</p>
                    <img   class='partimg'
                            src="https://www.hsb.co.id/learn/images/order-types.png" alt=' tipe order'/>                  
                    <p>Kecuali jika Anda trader veteran (jangan khawatir, latihan dan waktu akan ikut mematangkan
                        trading Anda), jangan suka merancang sistem perdagangan yang membutuhkan sejumlah besar order
                        tanpa dasar pengetahuan yang cukup.</p>
                    <p>Tetaplah dengan hal-hal dasar terlebih dahulu.</p>
                    <p>Pastikan telah memahami sepenuhnya dan merasa nyaman dengan sistem entri yang telah ditentukan.
                    </p>
                    <p>Selalu dahulukan konfirmasi kepada broker untuk informasi tertentu atau biaya swap yang dikenakan
                        jika terdapat posisi yang ditahan lebih dari satu hari.</p>
                    <p>Mengatur order tetap sederhana adalah strategi terbaik.</p>
                    <p>JANGAN bertrading dengan uang riil sebelum merasa nyaman melakukannya dengan platform perdagangan
                        yang telah dipilih atau dengan sistem entri yang telah Anda ditentukan. Jika tidak kesalahan
                        akan sering terjadi!</p>
        </Section>
      </div>
    </article>
  </Container>
  )
}

export default BentukJenisOrder
