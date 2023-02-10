import React from 'react';

const AppointmentOption = ({ appointmentOption,setTreatment }) => {
    const { name, slots } = appointmentOption



    return (
        <div>
            <div class="card   shadow-xl">
                <div class="card-body text-center  ">
                    <h2 class=" text-2xl text-primary"> {name} </h2>
                    <p> {slots.length > 0 ? slots[0] : <p className='text-error font-bold'>Please try another Date</p> } </p>
                    <p> {slots.length} {slots.length > 1 ? "spaces" : "space"} available </p>
     
                    <div class="card-actions justify-center"> 
                        <label 
                        disabled={slots.length ===0}
                          for="booking-modal" 
                          class="btn btn-primary text-white"
                          onClick={()=>setTreatment(appointmentOption)}
                          >
                            Book Appointment </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;