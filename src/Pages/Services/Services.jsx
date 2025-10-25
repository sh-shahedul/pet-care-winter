import React, { use } from 'react';
import ServiceSection from '../../Components/ServiceSection/Servicesection';
import { AuthContext } from '../../Provider/AuthContex';
import Loading from '../../Components/Loading/Loading';
  
const Services = () => {
  const {loading}=use(AuthContext)
    return (
        <div  className='bg-linear-to-br from-orange-100 via-orange-200 to-orange-50 min-h-screen'>
          {
            loading ? (<Loading></Loading>):(<ServiceSection></ServiceSection>)
          }
        </div>
    );
};

export default Services;