import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const BukaAkunTrading = () => {
  return (
    <Container>
    <section className='bg-[#00028f] w-full pt-12'>
      <Breadcrumb title1='Akademi' title2='Kelas Trading' title3='Cara Membuka Akun Trading Online' />
      <Header
        title='Cara Membuka Akun Trading Online'
        description='Bagaimana cara membuka akun trading online dengan mudah dan cepat? Dapatkan panduan langkah demi langkah untuk memulai trading di pasar keuangan dan meningkatkan potensi keuntungan Anda.'
      />
    </section>
    <article className='py-4 px-8 mx-auto max-w-screen-lg'>
      <TOC toc1='Memilih Tipe Akun' toc2='Registrasi' toc3='Aktivasi akun'/>
      <div className='partcon'>
        <Section>
        <p>Setelah mencoba trading dengan akun demo pada setidaknya tiga platform broker, sudahkah
                        menentukan pilihan?</p>
                    <p>Anda dapat membuka akun trading live dengan tiga langkah mudah:</p>
                    <ul>
                        <li><strong>Memilih tipe akun</strong></li>
                        <li><strong>Registrasi</strong></li>
                        <li><strong>Aktivasi</strong></li>
                    </ul>
                    <p>Untuk diingat selalu “Sebelum mentransaksikan satu peser uang Anda, coba dua atau tiga akun demo
                        terlebih dahulu”.</p>
                    <p>Kenapa tidak? Toh akun demo itu GRATIS! Alami langgsung trading dengan beberapa broker dan
                        tetukan pilihan yang tepat.</p>
        </Section>
        <Section>
          <Heading number='1' heading='Memilih Tipe Akun' />
          <p>Ketika Anda siap membuka akun secara online, pilih tipe akun trading sesuai keinginan: akun
                        pribadi atau akun perusahaan (korporat)</p>
                    <p>Di masa lalu, ketika akan membuka sebuah akun trading, diharuskan memilih tipe akun standar,
                        mini, atau mikro.</p>
                    <p>Saat ini, bukan sebuah masalah karena sebagian broker memungkinkan Nasabah dapat trading dengan
                        costume lot. </p>
                    <p>Ini berguna bagi trader pemula yang tidak memiliki pengalaman dengan modal kecil.</p>
                    <p>Ini memberikan keleluasaan Nasabah tanpa harus bertrading lebih banyak dari jumlah lot yang telah
                        ditetapkan.</p>
                    <p>Selalu ingat untuk membaca kutipan harga.</p>
                    <p>Beberapa broker memiliki opsi pengelola akun dalam aplikasi. Jika Nasabah menginginkan broker
                        menjalankan trading, ini sebuah pilihan yang tepat.</p>
                    <p>Tetapi apakah ini yang diinginkan? Lagipula, Anda tidak membaca seluruh pelajaran di kelas
                        Pipsologi dan hanya meminta orang lain menggantikan anda untuk bertrading!</p>
                    <p>Selain itu, mengaktifkan pengelola akun membutuhkan deposit yang tidak kecil, biasanya $25,000
                        atau lebih. “Asisten” akan mengambil sedikit bagian dari keuntungan yang didapat.</p>
                    <p>Terakhir, pastikan membuka akun forex spot dan bukan akun forward atau futures.</p>
        </Section>
        <Section>
          <Heading number='2' heading='Registrasi' />
          <p>Diperlukan beberapa dokumen untuk membuka akun dengan beragam formulir dari masing-masing broker.
                    </p>
                    <p>Dokumen ini biasanya disediakan dalam format PDF serta dapat dilihat dan dicetak menggunakan
                        program Adobe Acrobat Reader.</p>
                    <p>Baca semua biaya, seperti biaya admin yang dikenakan untuk transfer antar bank. Anda mungkin
                        terkejut dengan biaya sesungguhnya dan mereka mungkin akan mengambil porsi besar dari modal
                        trading.</p>
        </Section>
        <Section>
          <Heading number='3' heading='Aktivasi akun' />
          <p>Setelah broker menerima semua dokumen yang diperlukan, Nasabah akan menerima email untuk
                        menyelesaikan aktivasi akun.</p>
                    <p>Setelah menyelesaikan tahap ini, Anda akan menerima email terakhir dengan nama pengguna, kata
                        sandi, dan instruksi untuk melakukan deposit.</p>
                    <p>Langkah selanjutnya adalah login dan mulai trading. Hal ini tidak sulit!</p>
                    <p>Saatnya masuk, buka bagan grafik, dan mulailah trading!</p>
                    <p><strong>Tapi tunggu dulu!</strong></p>
                    <p>Jika telah melakukan trading simulasi sedikitnya enam bulan, bisa mulai ke akun riil. Namun saran
                        kami Anda patut mempertimbangkan risiko yang ada.</p>
                    <p>Trading secara nyata adalah bukan trading main-main. Ini sangat berbeda antara bertarung melawan
                        musuh dengan senjata asli dengan berkelahi di game dunia maya.</p>
                    <p>Jika memulai trading langsung tanpa pengalaman di akun demo, inilah yang biasanya terjadi:</p>
                    <p>Biarpun seberapa lihai Anda menang di akun demo, tidak ada yang dapat menggantikan perasaan
                        was-was bertaruh dengan uang sungguhan.</p>
                    <p>Begitu mulai bertrading di akun riil, jangan pernah merasa nyaman atau aman saja. Selalu waspada
                        dan gunakan kontrol risiko yang paling tepat.</p>
                    <p>Kalau tidak, inilah yang mungkin akan terjadi:</p>
        </Section>
      </div>
    </article>
  </Container>
  )
}

export default BukaAkunTrading
