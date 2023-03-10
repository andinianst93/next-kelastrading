import React from 'react'
import Container from './Container'
import TOC from './TOC'
import Heading from './Heading'
import Section from './Section'
import Breadcrumb from './Breadcrumb'
import Header from './Header'
const Template = () => {
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
        <TOC toc1='number' toc2='number' />
        <div className='partcon'>
          <Section></Section>
          <Section>
            <Heading number='1' heading='heading' />
            {/* Content */}
          </Section>
          <Section>
            <Heading number='2' heading='heading' />
            {/* content */}
          </Section>
          <Section>
            <Heading number='3' heading='heading' />
            {/* content */}
          </Section>
          <Section>
            <Heading number='4' heading='heading' />
            {/* content */}
          </Section>
        </div>
      </article>
    </Container>
  )
}

export default Template
