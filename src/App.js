import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <div className="h-[100vh] 2xl:bg-bgShapeXl xl:bg-bgShapeLg lg:bg-bgShape bg-bgBlur bg-no-repeat bg-right-top flex flex-col items-center">
        <div className="2xl:w-[1080px] mx-5 xl:mx-[185px] lg:mx-[52px] pt-9">
          <nav className="mb-10">
            <h1 className="lg:mb-[100px] lg:mt-[50px] font-heading text-3xl lg:text-[45px] xl:text-4xl font-bold">equalizer</h1>
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
