
import React, (useEffect) from "react";
import axios from "axios"; 
const Lessond = () => {
    const API_URL = "https://fakestoreapi.com/products?limit=5"
const fetchiWeather = async()=>(
    setIsLoading(true)
    const res = await axios.get(API_URL)
    const data = res.data
    setWeatherData(data)
    setImmediate(false)
)



if(isLoading) return(
    <div className=" text "
    
    ></div>
)


   return(
    <div>
    <div aria-label="card-overlay" className="relative w-[250px] h-[300px]">
      <img
        src="https://bit.ly/3zzCTUT"
        alt=""
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="absolute flex flex-col p-2 bg-white rounded bottom-5 left-5 right-5 gap-y-1">
        <h3 className="text-base font-bold">{weatherData.address}</h3>
        <span className="text-sm text-gray-400">
          {weatherData.description}
        </span>
        <span className="text-sm text-gray-400">
          {weatherData.resolvedAddress}
        </span>
      </div>
    </div>
  </div>
   )


   const API = "https://fakestoreapi.com/products?limit=5"
   axios.get(API)
   API = `https://fakestoreapi.com/products?limit=5`
   const [limit,setLimit]=useBate(5)
   API = `https://fakestoreapi.com/products?limit=5${limit}`
   setLimit(5)
   setLimit(10)
   setLimit(15)
   {`btn$limt===s:'bth-active:' `}


   return 
   <div>
      <div aria-label="card-overlay" className="relative w-[250px] h-[300px]">
        <img
          src="https://bit.ly/3zzCTUT"
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute flex flex-col p-2 bg-white rounded bottom-5 left-5 right-5 gap-y-1">
          <h3 className="text-base font-bold">{weatherData.address}</h3>
          <span className="text-sm text-gray-400">
            {weatherData.description}
          </span>
          <span className="text-sm text-gray-400">
            {weatherData.resolvedAddress}
          </span>
        </div>
      </div>
    </div>


}




