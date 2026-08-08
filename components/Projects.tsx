export default function Projects() {
  return (
    <section className="hidden border-b border-gray-200 px-32 py-14">
      <p className="text-lg font-medium text-blue-700 dark:text-blue-500">
        <span className="animate-pulse">&#11044;</span> &nbsp;
        <span className="text-gray-600 dark:text-gray-300">PROJECTS</span>
      </p>
      <div className="mt-6 shadow-sm rounded-xl grid grid-cols-2">
        <div className=" h-72 border-t border-l border-b border-gray-300 rounded-l-xl"></div>
        <div className=" h-72 border border-gray-300 rounded-r-xl"></div>
      </div>
    </section>
  );
}
