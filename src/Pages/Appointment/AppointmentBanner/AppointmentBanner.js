import React, { useState } from 'react';
import chair from "../../../assets/images/chair.png"
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    
    return (
        <header>
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='dentist' />
                    <div>
                        <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        ></DayPicker>
                        
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;