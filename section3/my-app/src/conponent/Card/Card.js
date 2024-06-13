import ayanamiMaterial from "./material/ayanami.jpg";

const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-red border-blue-500">
      <div>
        <img className="w-full" src={ayanamiMaterial} alt="Example" />
      </div>
      <div className="px-6 py-4">
        <h1 className="text-xl font-bold mb-2">綾波レイ</h1>
        <p text-gray-700 text-base>
          エヴァンゲリオン零号機のパイロット
        </p>
      </div>
    </div>
  );
};

export default Card;
