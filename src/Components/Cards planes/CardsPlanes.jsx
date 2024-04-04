import { CardComponent } from "../Card/Card";

export const Cards = () => {
  return (
    <div className="overflow-x-auto h-screen font-medium ml-28 mt-10 text-sky-600 text-5xl ">
        Nuestros planes
      <div className="flex space-x-11 p-6">
        <CardComponent />
        <CardComponent />
      
      </div>
    </div>
  );
};
