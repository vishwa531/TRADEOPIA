import styles from "./style"
import { Navbar, Hero, Stats, KeyFeatures, Services, JoinCommunity, AboutKGI, ContactUs, Footer } from "./components"

const App = () => (

  <>

    <div className="starySky w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className="mx-[100px] lg:mx-auto ">
          <Stats />
          <KeyFeatures />
          <Services />
          <JoinCommunity />
          <AboutKGI />
          <ContactUs />
          <Footer />
        </div>
      </div>

    </div>

  </>

)

export default App
