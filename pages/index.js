import React from "react"
import Header from "../layout/header"
import SectionTop from "../layout/sectionTop"
import CaseSlider from "../layout/slider"
import SectionBottom from "../layout/sectionBottom"
import SectionBottomTwo from "../layout/sectionBottomTwo"
import Footer from "../layout/footer"
import styles from '../styles/Main.module.scss'

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.main}>
          <SectionTop/>
          <CaseSlider/>
          <SectionBottom/>
          <SectionBottomTwo/>
          <Footer/>
      </main>
    </React.Fragment>
  )
}
