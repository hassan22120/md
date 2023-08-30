import React, { useState, useEffect, useContext } from 'react'; // import React, useState and useEffect from the React library
import { useParams } from 'react-router-dom'; // import useParams from react-router-dom
import Navbar from "../Components/Navbar" // import Navbar component
import SideNavbar from '../Components/SideNavbar'; // import SideNavbar component
import Chat from '../Components/ChatPage';
import {userContext} from "../Context/UserProvider"; // import Chat component

const ProfileHomePage = () => { // create a functional component named ProfileHomePage
  const { userId } = useParams(); // use the useParams hook to get the userId parameter from the URL
  const [user, setUser] = useState(null); // declare a state variable called user and initialize it to null using useState hook
  const { users } = useContext(userContext);
  //new
  const compare = ()=>{
    let compareData = users.filter((e)=>{
      return e.id == userId
    });
    console.log("compare",compareData)
    setUser(compareData[0]);
  }
  useEffect(()=>{
    compare();
    console.log("com");
  },[userId])

  localStorage.setItem("userData", JSON.stringify(user));// store the user data in the localStorage with the key "userData"
  console.log("user11",user);
  return (  // render the component UI
    <>
      <div >
        {user && ( <div className=' flex '>
          <div className=' w-[24%]'>
             <SideNavbar />
          </div>
            <div className='py-12 px-8 w-[76%]'>
              <Navbar />
            <hr />
            <div className=' flex flex-warp justify-between mt-4 p-8'>
              <div className='p-4 w-[35%]'>
                <div>
                  <img className='w-52 h-52 rounded-full m-auto ' src={user.profilepicture} alt={user.username} />
                  <p className='text-gray-700 text-xl font-medium pt-2' >{user?.name}</p>
                </div>
                <div className='leading-8  '>
                  <p className='text-gray-500 font-medium flex justify-between'>Username : <b className='text-gray-700 text-left' >{user?.username}</b></p>
                  <p className='text-gray-500 font-medium flex justify-between'>e-mail : <b className='text-gray-700 text-left' >{user?.email}</b></p>
                  <p className='text-gray-500 font-medium flex justify-between'>Phone : <b className='text-gray-700 text-left' >{user?.phone}</b></p>
                  <p className='text-gray-500 font-medium flex justify-between'>Website : <b className='text-gray-700 text-left' >{user?.website}</b></p>
                </div>
                <hr />
                <div className='leading-10 '>
                  <p className="text-gray-500 font-medium text-center">Company</p>
                  <p className='text-gray-500 font-medium flex justify-between w-[89%]'>Name : <b className='text-gray-700' >{user?.company.name}</b></p>
                  <p className='text-gray-500 font-medium flex justify-between'>catchphrase : <p className='w-[60%]'><b className='text-gray-700 ' >{user?.company.catchPhrase}</b></p></p>
                  <p className='text-gray-500 font-medium flex justify-between'>bs : <p className='w-[60%]'><b className='text-gray-700 ' >{user?.company.bs}</b></p></p>
                </div>
              </div>
              <hr className='border border-gray-300 h-auto' />
              <div className=' w-[50%] p-4 '>
                <div className='leading-8 w-[65%] '>
                  <p className="text-gray-500 font-medium text-left">Address :</p>
                  <p className='text-gray-500 font-medium flex justify-between'>Street : <b className='text-gray-700' >{user?.address.street}</b></p>
                  <p className='text-gray-500 font-medium flex justify-between'>Suite : <b className='text-gray-700' >{user?.address.suite}</b></p>
                  <p className='text-gray-500 font-medium flex justify-between'>City : <b className='text-gray-700' >{user?.address.city}</b></p>
                  <p className='text-gray-500 font-medium flex justify-between'>Zipcode : <b className='text-gray-700' >{user?.address.zipcode}</b></p>
                </div>
                <hr />
                <div className='pt-4'>
                  <img className='rounded-2xl' src="https://static.toiimg.com/thumb/msid-79949586,imgsize-128601,width-400,resizemode-4/79949586.jpg" alt="map" />
                  <div className='flex justify-end gap-4'>
                    <p className='text-gray-500 font-medium flex'>Lat: <p className='text-gray-700' >{user?.address.geo.lat}</p></p>
                    <p className='text-gray-500 font-medium flex'>Lng: <p className='text-gray-700' >{user?.address.geo.lng}</p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)
            }

        <Chat />
      </div>
    </>
  );
};

export default ProfileHomePage;
