export const CardsTratamiento = () => {
  return (
    <div className="overflow-x-auto font-medium ml-28 mt-10 text-sky-600 text-5xl">
      Tratamiento
      <div className="flex space-x-11 text-2xl text-center text-gray-600 mx-6 mt-6">
        <div>
          <img
            src="/alcohol.png"
            className="bg-gray-600 w-24 rounded-full "
            alt="alcohol"
          />
          <p>Alcohol</p>
        </div>
        <div>
          <img
            src="/tabaco.png"
            className="bg-gray-600 w-24 h-24  rounded-full "
            alt="tabaco"
          />
          <p>Tabaco</p>
        </div>
        <div>
          <img
            src="/canabis.png"
            className="bg-gray-600 w-24  rounded-full "
            alt="canabis"
          />
          <p>Canabis</p>
        </div>
      </div>
    </div>
  );
};
