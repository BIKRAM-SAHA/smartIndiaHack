import React,{useState} from 'react'
import icon from './logo.png'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query';
import { checkAuthStatus } from '../../api/authReq';

function Homenav() {
    const[show,setShow]=useState(false);
    const authStatus = useQuery('authstatus', checkAuthStatus, { initialData: { user: undefined, isLoggedIn: false } })
  return (
    <div className="sticky top-0 z-50 bg-white" >
        <nav id='mobileview' className='lg:hidden'>
            <div className="flex flex-row justify-between">
            <div className="">
            <a href="/" className='flex items-center'>
                    <img src={icon} alt="" className='py-2 pl-2 h-14 '/>
                    <div className="">
                    <span className="text-cus font-[Poppins] font-cus text-txt">PRAG</span>
                    <span className="font-[Poppins] text-cus font-extrabold text-first">MATE</span>
                    <span className="font-[Poppins] text-4xl text-txt">.</span>
                    </div>
            </a>
            </div>
            <div onClick={()=>setShow(!show)}>
            <i className="uil uil-bars text-cus2 pr-3 pt-1"></i>  
            </div>
            </div>
            <div>
                {
                    show?<ul className='flex flex-col justify-center pb-6 text-xl shadow-lg border-y-8 pl-14 font-pops'>
                    <li className="py-3 pt-5 hover:text-first">
                        <i className="uil uil-estate pr-2"></i>
                        <a href="#" onClick={()=>setShow(false)} className="">HOME</a></li>
                    <li className="py-3 hover:text-first">
                        <i className="uil uil-chart pr-2"></i>
                        <a href="#about" onClick={()=>setShow(false)} className="">ABOUT</a></li>
                    <li className="py-3 hover:text-first">
                        <i className="uil uil-users-alt pr-2"></i>
                        <a href="#partners" onClick={()=>setShow(false)} className="">PARTNERS</a></li>
                    <li className="py-3 hover:text-first">
                        <i className="uil uil-envelope pr-2"></i>
                        <a href="#contact" onClick={()=>setShow(false)} className="">CONTACT</a></li>
                    <div className='flex flex-row pt-5 justify-betweem'>
                        {/* <div className="hover:text-orange-500">
                            <button className="flex justify-center w-32 py-1 mb-3 mr-5 border-2 hover:border-first rounded-xl group active:scale-95">
                                <Link to="/login" className="text-base font-semibold text-slate-400 group-hover:text-orange-500">LOG IN</Link>
                            </button>
                        </div>
                        <button className="flex items-center justify-center w-32 h-9 rounded-xl hover:text-first bg-first hover:bg-orange-500 active:scale-95">
                            <a href="#" className="text-base font-semibold text-white ">SIGN IN</a>
                        </button> */}
                        {
                            (authStatus.isFetched && authStatus.data.isLoggedIn) ?
                            <button className="flex items-center justify-center w-32 h-9 rounded-xl hover:text-first bg-first hover:bg-orange-500 active:scale-95">
                                {
                                    (authStatus.data.user.userType === "School") ?
                                    <Link to="/School_D" className="text-base font-semibold text-white ">DASHBOARD</Link>
                                    :
                                    (authStatus.data.user.userType === "Student") ?
                                    <Link to="/Student_D" className="text-base font-semibold text-white ">DASHBOARD</Link>
                                    :
                                    <Link to="/Teacher_D" className="text-base font-semibold text-white ">DASHBOARD</Link>
                                }
                            </button>
                            :
                            <button className="flex items-center justify-center w-32 h-9 rounded-xl hover:text-first bg-first hover:bg-orange-500 active:scale-95">
                                <Link to="/login" className="text-base font-semibold text-white ">LOG IN</Link>
                            </button>
                        }
                    </div>
                </ul>:null
                }
            </div>
            
        </nav>
        <nav id='desktopview' className='hidden lg:block mr-0'>
        <div className="flex justify-between">
        
            <div className="flex flex-row">
            <a href="/" className='flex items-center'>
                    <img src={icon} alt="" className='h-12 pl-2'/>
                    <div className="">
                    <span className="text-cus font-[Poppins] font-cus text-txt">PRAG</span>
                    <span className="font-[Poppins] text-cus font-extrabold text-first">MATE</span>
                    <span className="font-[Poppins] text-4xl text-txt">.</span>
                    </div>
            </a>
            </div>

                <ul className='flex flex-row items-center justify-center text-xl pl-14 font-pops'>
                    <li className="p-3 hover:text-first">
                        <i className="uil uil-estate pr-2"></i>
                        <a href="#" className="">HOME</a></li>
                    <li className="p-3 hover:text-first">
                        <i className="uil uil-chart pr-2"></i>
                        <a href="#about" className="">ABOUT</a></li>
                    <li className="px-2 py-3 hover:text-first">
                        <i className="uil uil-users-alt pr-2"></i>
                        <a href="#partners" className="">PARTNERS</a></li>
                    <li className="p-3 hover:text-first">
                        <i className="uil uil-envelope pr-2"></i>
                        <a href="#contact" className="">CONTACT</a></li>
                    
                </ul>
                <div className='flex flex-row justify-between mt-2 mr-4'>
                    {/* <div className="hover:text-orange-500">
                        <button className="flex justify-center w-32 py-1 mb-3 mr-5 border-2 hover:border-first rounded-xl group active:scale-95">
                            <Link to="/login" className="text-base font-semibold text-slate-400 group-hover:text-orange-500">LOG IN</Link>
                        </button>
                    </div>
                    <button className="flex items-center justify-center w-32 h-9 rounded-xl hover:text-first bg-first hover:bg-orange-500 active:scale-95">
                        <a href="#" className="text-base font-semibold text-white ">SIGN IN</a>
                    </button> */}
                    {
                        (authStatus.isFetched && authStatus.data.isLoggedIn) ?
                        <button className="flex items-center justify-center w-32 h-9 rounded-xl hover:text-first bg-first hover:bg-orange-500 active:scale-95">
                            {
                                (authStatus.data.user.userType === "School") ?
                                <Link to="/School_D" className="text-base font-semibold text-white ">DASHBOARD</Link>
                                :
                                (authStatus.data.user.userType === "Student") ?
                                <Link to="/Student_D" className="text-base font-semibold text-white ">DASHBOARD</Link>
                                :
                                <Link to="/Teacher_D" className="text-base font-semibold text-white ">DASHBOARD</Link>
                            }
                        </button>
                        :
                        <button className="flex items-center justify-center w-32 h-9 rounded-xl hover:text-first bg-first hover:bg-orange-500 active:scale-95">
                            <Link to="/login" className="text-base font-semibold text-white ">LOG IN</Link>
                        </button>
                    }
                </div> 
            </div>
        </nav>
    </div>
  )
}

export default Homenav