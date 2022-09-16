import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
function App() {
  const style = {
    mainCont: `2xl:bg-bgShapeXl
      xl:bg-bgShapeLg
      lg:bg-bgShape
      h-[100vh] bg-bgBlur bg-no-repeat bg-right-top flex flex-col items-center`,
    topCont: `2xl:w-[1080px]
      xl:mx-[185px]
      lg:mx-[52px]
      mx-5 pt-9`,
    nav: `mb-10`,
    heading: `xl:text-4xl
      lg:mb-[100px] lg:mt-[50px] lg:text-[45px]
      font-heading text-3xl font-bold`
  }
  return (
    <div className="App">
      <div className={style.mainCont}>
        <div className={style.topCont}>
          <nav className={style.nav}>
            <h1 className={style.heading}>equalizer</h1>
          </nav>
          <Hero />
        </div>
        <Card />
        <Footer />
      </div>

    </div>
  );
}

export default App;
