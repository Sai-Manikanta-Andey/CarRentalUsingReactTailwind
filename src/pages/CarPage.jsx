import { useParams } from "react-router-dom";
import Data from "../utils/Data";
import { FaStar } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { PiEngineFill } from "react-icons/pi";
import { PiSteeringWheelFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { booked } from "../feature/BookingSlice";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const CarPage = () => {
  const bookings = useSelector((state) => state.Book);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { image, title, rent, members, engine, description, rating } =
    Data.find((EachCar) => EachCar.id === +id);
  const handleClick = (
    id,
    image,
    title,
    rent,
    members,
    engine,
    description,
    rating
  ) => {
   const CarAlreadyExist = bookings?.filter(car => car?.id === id)
   if(CarAlreadyExist.length !==0){
    // notifies already booked
   toast.error("Already Booked !")
   }
   else{
    toast.success("Booked Successfully !");
    dispatch(
      booked({ id, image, title, rent, members, engine, description, rating })
    );
   }
  };

  return (
    <div
     
      className=" pt-20 max-w-[1100px] h-auto mx-auto px-4 mb-20 flex  items-center   "
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div className="grid grid-cols-1 gap-4 p-0 md:grid-cols-2">
        {/* image side  */}
        <div>
          <img
            src={image}
            alt={title}
            className="object-contain w-full h-full "
          />
        </div>

        {/* right side details */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-black">{title} </h2>
          <h3 className="text-xl font-medium ">
            Price : ₹{rent} <span className="text-base font-base">/Day</span>
          </h3>
          <div className="flex items-center font-medium semibold text-">
            Rating : {rating}
            <span className="mb-0.5">
              <FaStar size={15} className="text-yellow-400" />
            </span>
          </div>
          <div className="text-base font-semibold text-gray-500">
            {description}
          </div>
          <div className="flex justify-start gap-3 mt-2">
            <h3 className="flex items-center gap-1 px-2 py-1 text-sm bg-white border-2 border-orange-500 rounded">
              <MdAirlineSeatReclineExtra size={15} />
              {members}
            </h3>
            <h3 className="flex items-center gap-1 px-2 py-1 text-sm bg-white border-2 border-orange-500 rounded">
              <PiEngineFill size={15} /> {engine}
            </h3>
            <h3 className="flex items-center gap-1 px-2 py-1 text-sm bg-white border-2 border-orange-500 rounded">
              <PiSteeringWheelFill size={15} /> M
            </h3>
          </div>
          <div>
            <button
              onClick={(e) =>
                handleClick(
                  id,
                  image,
                  title,
                  rent,
                  members,
                  engine,
                  description,
                  rating
                )
              }
              className="w-full px-2 py-2 mt-2 text-base font-medium transition-all duration-700 bg-orange-400 rounded hover:shadow-2xl"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPage;
