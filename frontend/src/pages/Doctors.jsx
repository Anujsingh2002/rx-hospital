import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Appcontext } from '../context/Appcontext';

const Doctors = () => {
  const {speciality}=useParams();
  const {doctors} = useContext(Appcontext);

  const [filterDoc,setFilterDoc] = useState([]);

  const navigate = useNavigate();
  const applyFilter = ()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc=>doc.speciality===speciality))
    }
    else{
      setFilterDoc(doctors);
    }
  }

  useEffect(()=>{
    applyFilter();
  },[doctors,speciality]);

  return (
    <div>
        <p className='text-gray-600'>Browse through the doctors specialist.</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
          <div className='flex flex-col gap-4 text-sm text-gray-600'>
            <p  onClick={()=>speciality===''?navigate('/doctors'):navigate('/doctors/General physician')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded cursor-pointer'>General physician</p>
            <p  onClick={()=>speciality===''?navigate('/doctors'):navigate('/doctors/Gynecologist')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded cursor-pointer'>Gynecologist</p>
            <p  onClick={()=>speciality===''?navigate('/doctors'):navigate('/doctors/Pediatricians')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded cursor-pointer'>Pediatricians</p>
            <p  onClick={()=>speciality===''?navigate('/doctors'):navigate('/doctors/Dermatologist')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded cursor-pointer'>Dermatologist</p>
            <p  onClick={()=>speciality===''?navigate('/doctors'):navigate('/doctors/Neurologist')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded cursor-pointer'>Neurologist</p>
            <p  onClick={()=>speciality===''?navigate('/doctors'):navigate('/doctors/Gastroenterologist')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded cursor-pointer'>Gastroenterologist</p>
          </div>

          <div className='w-full grid grid-cols-auto gap-4 '>
              {filterDoc.map((item,index)=>(
                    <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 delay-75' key={index}>
                        <img className='bg-blue-50' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500 '>
                                <div className='w-2 h-2 bg-green-600 rounded-full'></div>
                                <div>Available</div>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
          </div>

        </div>
    </div>
  )
}

export default Doctors