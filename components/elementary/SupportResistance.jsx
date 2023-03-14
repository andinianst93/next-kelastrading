import React from 'react'
import Container from '../Container'
import TOC from '../TOC'
import Heading from '../Heading'
import Section from '../Section'
import Breadcrumb from '../Breadcrumb'
import Header from '../Header'
const SupportResistance = () => {
  return (
    <Container>
      <section className='bg-[#00028f] w-full pt-12'>
        <Breadcrumb
          title1='Akademi'
          title2='Kelas Trading'
          title3='Apa itu Support & Resistance dan Cara Menentukannya'
        />
        <Header
          title='Apa itu Support & Resistance dan Cara Menentukannya'
          description='Apa itu support dan resistance, cara menentukan, serta mengetahui karakter dari support dan resistance? Simak penjelasan dan cara selengkapnya di sini.'
        />
      </section>
      <article className='py-4 px-8 mx-auto max-w-screen-lg'>
        <TOC
          toc1='Menentukan support dan resistance'
          toc2='Cara Mengetahui Level Support atau Breakout'
          toc3='Karakteristik support dan resistance'
        />
        <div className='partcon'>
          <Section>
            <p>
              <strong>Support dan resistance</strong> adalah konsep yang sering
              digunakan dalam forex trading.
            </p>
            <p>
              Yang pasti, setiap trader punya pendapat sendiri tentang cara
              mengukur support dan resistance.
            </p>
            <p>Mari kita lihat dasar teorinya.</p>

            <p>
              Seperti yang terlihat pada diagram di atas, pola zigzag bergerak
              ke atas bullish market.
            </p>
            <p>
              Setiap kali harga bergerak naik kemudian akan kembali turun ke
              bawah, titik tertinggi yang dicapai sebelum harga bergerak turun
              dinamakan level Resistance. Sedangkan titik terendah yang dicapai
              sebelum harga bergerak naik kembali dinamakan dengan level
              Support. Dengan ini, baik support atau resistance akan terus
              terbentuk sepanjang waktu saat harga bergerak naik atau turun.
            </p>
          </Section>
          <Section>
            <Heading number='1' heading='Menentukan support dan resistance' />
            <p>
              Yang perlu diingat adalah level support dan resistance BUKANLAH
              NILAI MUTLAK.
            </p>
            <p>
              Seringkali dimana harga bergerak melampaui garis
              support/resistance yang sudah ditandai. Namun ini bukan terjadi
              penembusan harga breakout/breakdown, tetapi pasar sedang menguji
              level tersebut.
            </p>
            <p>
              Uji coba level biasanya ditunjukkan dengan ekor pada grafik
              candlestick.
            </p>

            <p>
              Perhatikan ekor candlestick sedang menguji di level support 1,4700
              .
            </p>
            <p>
              Hal ini terjadi layaknya pasar sedang mendobrak harga support.
            </p>
            <p>
              Di saat harga mulai menembus level support, mungkin Anda mengira
              akan terjadi breakout, tapi ternyata tidak demikian.
            </p>
          </Section>
          <Section>
            <Heading
              number='2'
              heading='Cara Mengetahui Level Support atau Breakout'
            />
            <p>
              Jadi bagaimana kita tahu bahwa level support sedang diuji atau
              justru breakout harga yang sedang terjadi?
            </p>
            <p>
              Sayangnya, tidak ada jawaban pasti untuk pertanyaan ini. Ada
              pendapat mengatakan bahwa level support atau resistance tembus
              jika berhasil melewati harga penutupan. Namun, penembusan tren ini
              tidak selalu terjadi.
            </p>
            <p>
              Sebuah contoh yang sama seperti di atas dan lihat apa yang terjadi
              ketika harga benar-benar penutupan melewati level support 1,4700.
            </p>

            <p>
              Dalam hal ini, harga penutupan di bawah level support 1,4700
              tetapi akhirnya naik kembali ke atas level.
            </p>
            <p>
              Terlihat di grafik ini, level support tidak berubah, namun justru
              semakin menguat. Agar anda tidak tertipu dengan breakout “palsu”
              seperti contoh di atas, ubahlah pola pikir yang menganggap level
              support atau resistance sebagai sebuah harga pasti, melainkan
              hanya sebuah kisaran harga.
            </p>
            <p>
              Dengan grafik %K atau K-line Anda bisa menentukan “area” support
              atau resistance. Karena, grafik %K fokus memberikan informasi
              seputar harga penutupan, berbanding dengan grafik candlestick yang
              memberikan informasi harga tertinggi dan terendah.
            </p>
            <p>
              Harga tertinggi dan terendah pada candlestick sering kali “menipu”
              trader karena biasanya kedua harga ini terbentuk dari reaksi
              pasar. Sama seperti ketika melihat seseorang yang melakukan hal di
              luar kebiasaan, saat ditanya, jawabanya: “maaf! hanya reflek”.
            </p>
            <p>
              Maka, saat menentukan area support atau resistance, hindari
              menggunakan reaksi atau reflek pasar. Cari pergerakan harga yang
              sesungguhnya dengan menggunakan grafik %K salah satunya. Carilah
              area di mana pergerakan harga membentuk lebih dari satu puncak
              atau lembah.
            </p>
          </Section>
          <Section>
            <Heading
              number='3'
              heading='Karakteristik support dan resistance'
            />
            <ul>
              <li>
                Ketika harga melewati resistance, resistance berpotensi menjadi
                support.
              </li>
              <li>
                Semakin sering sebuah level support atau resistance disentuh
                tanpa mampu ditembus atau breakout, maka makin kuat area support
                atau resistance tersebut.
              </li>
              <li>
                Ketika level support atau resistance berhasil ditembus, kekuatan
                breakout-nya sangat tergantung berapa lama area support atau
                resistance tersebut tertahan.
              </li>
            </ul>

            <p>
              Dengan latihan nyata, Anda akan dapat mengidentifikasi area
              support dan area resistance dengan mudah.
            </p>

            <p>
              Dalam pelajaran berikutnya, kami akan mengajarkan cara trading
              dengan level support dan resistance diagonal, atau dikenal sebagai
              garis trend.
            </p>
          </Section>
        </div>
      </article>
    </Container>
  )
}

export default SupportResistance
