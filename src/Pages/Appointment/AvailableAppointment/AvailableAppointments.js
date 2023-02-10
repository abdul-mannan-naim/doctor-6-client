import React, { useEffect, useState } from 'react';

import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({ selectedDate }) => {
     // const [appointmentOptions,setAppointmentOptions]=useState([])
     const [treatment, setTreatment] = useState(null)
     const date = format(selectedDate, "PP")

     const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
          queryKey: ['appointmentOptions', date],
          queryFn: () => fetch(`https://doctor-6-server.vercel.app/appointmentOptions?date=${date}`)
               .then(res => res.json())
     })

     // useEffect(()=>{
     //     fetch("https://doctor-6-server.vercel.app/appointmentOptions")
     //     .then(res=>res.json())
     //     .then(data=>setAppointmentOptions(data))
     // },[])

     if (isLoading) {
          return <Loading></Loading>
     }

     return (
          <div className='my-16'>
               <p className='text-center text-secondary font-bold  '> Available Appointment <small className='text-success' > {format(selectedDate, "PP")}  </small> </p>
               <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                    {
                         appointmentOptions.map((option, index) => <AppointmentOption
                              key={index}
                              appointmentOption={option}
                              setTreatment={setTreatment}
                         ></AppointmentOption>)
                    }
               </div>
               {treatment && <BookingModal
                    refetch={refetch}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    selectedDate={selectedDate}
               ></BookingModal>}
          </div>
     );
};

export default AvailableAppointments;