import React from 'react'
import { UilEstate, UilBookOpen, UilAward } from "@iconscout/react-unicons";
   
function Mobnav({menuOption , menuList, setMenuOption}) {


    const list= document.querySelectorAll('.list');
    function activeLink(){
        list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active'); 
    }
    list.forEach((item)=>
    item.addEventListener('click',activeLink)); 

  return (  
    <div className='flex flex-col justify-end h-screen w-full absolute bottom-0'>
       
        <div id="bottomnavbar" className="lg:hidden navigation">
        <ul className="flex items-center justify-around pt-3 pb-2 bg-white shadow-inner rounded-t-xl h-14 font-pops -z-20">
            {
                menuList.map((item, idx) => {
                    return (
                        <li className={"list " + ((idx === 0) ? "active": "")} key={idx}>
                            <a className="navstyle group" onClick={() => { setMenuOption(item.id) }}>
                                <span className="mx-6">
                                    <i className={item.iconclass + " icon"}></i>   
                                </span>  
                                <span className="text">{item.title}</span>
                            </a>
                        </li>
                    )
                })
            }
{/*              
            <li  className="z-10 list active">
                <a href="#" className="navstyle group" on onClick={()=>handleClick(1)}>
                    <span className="mx-6 ">
                    <i className="uil uil-home icon"></i>
                    </span>
                    <span className="text">HOME
                    </span>
                </a>
            </li>

            <li  className="list">
                <a href="#"  className="navstyle group" onClick={()=>handleClick(2)}>
                    <span className="mx-6">
                    <i className="uil uil-diary-alt icon"></i>
                    </span>  
                    <span className="text">PATH
                    </span>
                </a>
            </li>

            <li className="list">
                <a href="#"  className="navstyle group" onClick={()=>handleClick(3)}>
                    <span className="mx-6 ">
                    <i className="uil uil-missed-call icon open:bg-black"></i>
                    </span>
                    <span className="text" open>STAFF
                    </span>
                </a>
            </li>   
 
            <li  className="list">
                <a href="#"  className="navstyle group" onClick={()=>handleClick(4)}>
                    <span className="mx-6 ">
                    <i className="uil uil-envelope icon"></i>
                    </span>
                    <span className="text">NEWS
                    </span>
                </a>
            </li>
 
            <li className="pr-3 list" >
                <a href="#"  className="navstyle group" onClick={()=>handleClick(5)}>
                    <span className="mx-6"></span>
                    <i className="uil uil-elipsis-double-v-alt text-2xl icon"></i>
                    <span className="text">MORE
                    </span>
                </a> 
            </li>  
            <li className="hidden"></li> */}
        </ul>
        </div>
    </div>
  )
}

export default Mobnav