export default function Projects() {
  return (
    <div className="projects-card-header">
      <section className="flex mt-10">
        <div className="py-3 m-auto text-center rounded-lg">
          <p>Site IGEP</p>
          <div className="w-5/12 m-auto my-4">
            <img
              src="https://media.giphy.com/media/3o7TKz5vVUzZ6wZ8fO/giphy.gif"
              alt="gif"
              className=""
            />
          </div>
          <p>Site feito para a empresa IGEP</p>
          <button
            className="px-3 py-1 mt-2 font-bold text-white rounded-md bg-slate-600 text-md hover:bg-slate-900"
            onClick={() => window.open("https://www.igepsaude.org.br")}
          >
            Ver Site
          </button>
        </div>
        <div className="py-3 m-auto text-center rounded-lg">
          <p>Site PLuralmed</p>
          <div className="w-5/12 m-auto my-4">
            <img
              src="https://media.giphy.com/media/3o7TKz5vVUzZ6wZ8fO/giphy.gif"
              alt="gif"
              className=""
            />
          </div>
          <p>Algumas alterações no site</p>
          <button
            className="px-3 py-1 mt-2 text-white rounded-md bg-slate-600 text-md hover:bg-slate-900"
            onClick={() => window.open("https://www.pluralmed.com.br/")}
          >
            Ver Site
          </button>
        </div>
      </section>
    </div>
  );
}
