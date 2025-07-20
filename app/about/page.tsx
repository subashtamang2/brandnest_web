import CoreFramework from "@/components/CoreFramework"


const Aboutpage = () => {
  return (
    <section className="mt-16 w-full">
      <div className="text-center bg-[#3D075F] py-30">
        <h1 className="font-bold text-white text-4xl md:text-5xl">About US</h1>
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-extrabold text-black">About Our COmpany</h1>
          <p className="text-pink-600 font-semibold text-xl">  We focus on Web Developmet, Logo design and UI Design of professional IT services.</p>
          <p className="text-gray-700 ">
            Founded with a vision to transform ideas into iconic brands, BrandNest Solution was born out of a passion for creativity and a deep understanding of the power of branding.
            <br></br>
            Over the years, we've worked with businessses of all sizes, heping them create unique identities that resonate with their audience and drive success. Over the years, we've worked with businessses of all sizes, heping them create unique identities that resonate with their audience and drive success.
            <br></br>
            Over the years, we've worked with businessses of all sizes, heping them create unique identities that resonate with their audience and drive success.
          </p>
          <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300">
            Read More
          </button>

        </div>
        {/* Right:Image */}
        <div className="
        md:w-1/2">
          <img
            src="/images/about-img.png"
            alt="image"
            className="w-full h-auto rounded-xl shadow-xl" />
        </div>
      </div>
      <CoreFramework />
    </section>
  )
}

export default Aboutpage