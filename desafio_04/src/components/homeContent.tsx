function homeContent() {
  return (
    <div className="bg-black w-screen h-screen">
      <div className="flex justify-center items-center h-screen ">
        <div className="h-auto w-2/4 text-center bg-slate-700 rounded-tl-3xl rounded-br-3xl rounded-tr-xl rounded-bl-xl">
          <h1 className="text-5xl  text-violet-400">Vite</h1>
          <div id="text_area" className="my-2 p-2 text-gray-300 font-serif text-left ">
            <p className="mb-3">
              Vite (French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a
              faster and leaner development experience for modern web projects. It consists of two major parts:
            </p>
            <p className="mb-3">
              * A dev server that provides rich feature enhancements over native ES modules, for example extremely fast
              Hot Module Replacement (HMR).
            </p>
            <p className="mb-3">
              * A build command that bundles your code with Rollup, pre-configured to output highly optimized static
              assets for production.
            </p>

            <p className="mb-3">
              Vite is opinionated and comes with sensible defaults out of the box, but is also highly extensible via its
              Plugin API and JavaScript API with full typing support. You can learn more about the rationale behind the
              project in the Why Vite section.
            </p>
            <a href="https://www.exemplo.com" target="_blank" className="bg-violet-400 text-white py-2 px-4 rounded">
              FONTE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homeContent;
