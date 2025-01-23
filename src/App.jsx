const App = () => {
  return (
    <div className="overflow-x-hidden text-ston-300 antialiased">
      <div className="fixed inset-0 -z-10">
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
      </div>

      <div className="container mx-auto px-8" >
        <Navbar />
        <Hero />
        <Technologies />
        <Projets />
        <Experience />
        <Contact />
      </div>
    </div>
  )

}

export default App
