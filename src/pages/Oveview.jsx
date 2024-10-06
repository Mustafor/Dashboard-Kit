import React from 'react'

function Oveview() {
    return (
        <>
        <ul className='flex items-center mt-[54px] mb-[30px] justify-between gap-[30px]'>
        <li className='w-[258px] rounded-md bg-white border-[2px] hover:border-[2px] hover:border-[#3751FF] duration-300  border-[#DFE0EB]'>
        <div className='flex flex-col text-center mt-[24px] mb-[24px]'>
        <p className='text-[19px] leading-[23px] text-[#9FA2B4] mb-[2px]'>Unresolved</p>
        <p className='font-bold text-[40px] leading-[50px] text-[#252733]'>60</p>
        </div>
        </li>
        <li className='w-[258px] rounded-md bg-white border-[2px] hover:border-[2px] hover:border-[#3751FF] duration-300 border-[#DFE0EB]'>
        <div className='flex flex-col text-center mt-[24px] mb-[24px]'>
        <p className='text-[19px] leading-[23px] text-[#9FA2B4] mb-[2px]'>Overdue</p>
        <p className='font-bold text-[40px] leading-[50px] text-[#252733]'>16</p>
        </div>
        </li>
        <li className='w-[258px] rounded-md bg-white border-[2px] hover:border-[2px] hover:border-[#3751FF] duration-300 border-[#DFE0EB]'>
        <div className='flex flex-col text-center mt-[24px] mb-[24px]'>
        <p className='text-[19px] leading-[23px] text-[#9FA2B4] mb-[2px]'>Open</p>
        <p className='font-bold text-[40px] leading-[50px] text-[#252733]'>43</p>
        </div>
        </li>
        <li className='w-[258px] rounded-md bg-white border-[2px] hover:border-[2px] hover:border-[#3751FF] duration-300 border-[#DFE0EB]'>
        <div className='flex flex-col text-center mt-[24px] mb-[24px]'>
        <p className='text-[19px] leading-[23px] text-[#9FA2B4] mb-[2px]'>On hold</p>
        <p className='font-bold text-[40px] leading-[50px] text-[#252733]'>64</p>
        </div>
        </li>
        </ul>
        <div className='flex justify-between'>
        <div className=' bg-white flex py-[32px] h-[77vh] px-[32px] w-[70%]'>
        <div>
        <h1 className='font-bold text-[19px] leading-[23px] mb-[8px] text-[#252733]'>Today’s trends</h1>
        <div className='flex items-center gap-[400px]'>
        <span className='text-[#9FA2B4] text-[12px] leading-[16px]'>as of 25 May 2019, 09:41 PM</span>
        <div className='flex items-center gap-[40px]'>
        <a href="#" className='text-[12px] leading-[15px] text-[#9FA2B4] border-b-[2px] ml-[12px] hover:border-b-[2px] hover:border-b-[#3751FF] duration-300 hover:text-[#3751FF] border-[#DFE0EB]'>Today</a>
        <a href="#" className='text-[12px] leading-[15px] text-[#9FA2B4] border-b-[2px] ml-[12px] hover:border-b-[2px] hover:border-b-[#3751FF] duration-300 hover:text-[#3751FF] border-[#DFE0EB]'>Yesterday</a>
        </div>
        </div>
        </div>
        </div>
        <div className=''>
        <ul className='rounded-md'>
        <li className='w-[342px] border-b-[2px] py-[4px] bg-white border-[#DFE0EB]'>
        <div className='flex flex-col text-center mt-[24px] mb-[24px]'>
        <p className='text-[19px] leading-[23px] text-[#9FA2B4] mb-[2px]'>Resolved</p>
        <p className='font-bold text-[24px] leading-[30px] text-[#252733]'>449</p>
        </div>
        </li>
        <li className='w-[342px] border-b-[2px] py-[4px] bg-white border-[#DFE0EB]'>
        <div className='flex flex-col text-center mt-[24px] mb-[24px]'>
        <p className='text-[19px] leading-[23px] text-[#9FA2B4] mb-[2px]'>Received</p>
        <p className='font-bold text-[24px] leading-[30px] text-[#252733]'>426</p>
        </div>
        </li>
        <li className='w-[342px] border-b-[2px] py-[4px] bg-white border-[#DFE0EB]'>
        <div className='flex flex-col text-center mt-[24px] mb-[24px]'>
        <p className='text-[19px] leading-[23px] text-[#9FA2B4] mb-[2px]'>Average first response time</p>
        <p className='font-bold text-[24px] leading-[30px] text-[#252733]'>33m</p>
        </div>
        </li>
        <li className='w-[342px] border-b-[2px] py-[4px] bg-white border-[#DFE0EB]'>
        <div className='flex flex-col text-center mt-[24px] mb-[24px]'>
        <p className='text-[19px] leading-[23px] text-[#9FA2B4] mb-[2px]'>Average response time</p>
        <p className='font-bold text-[24px] leading-[30px] text-[#252733]'>3h 8m</p>
        </div>
        </li>
        <li className='w-[342px] rounded-md py-[4px] bg-white border-[#DFE0EB]'>
        <div className='flex flex-col text-center mt-[24px] mb-[24px]'>
        <p className='text-[19px] leading-[23px] text-[#9FA2B4] mb-[2px]'>Resolution within SLA</p>
        <p className='font-bold text-[24px] leading-[30px] text-[#252733]'>94%</p>
        </div>
        </li>
        </ul>
        </div>
        </div>
        <div className='flex items-center justify-between mt-[30px] gap-[30px]'>
        <div className='bg-white py-[32px] px-[32px] rounded-md w-[546px]'>
        <div className='flex mb-[8px] items-center justify-between'>
        <strong className='text-[19px] leading-[23px] text-[#252733]'>Unresolved tickets</strong>
        <a className='text-[14px] leading-[20px] text-[#3751FF] hover:text-[#252733] duration-300 font-bold' href="#">View details</a>
        </div>
        <p className='text-[12px] leading-[15px] text-[#252733] font-bold'><span className='text-[#9FA2B4]'>Group:</span> Support</p>
        <div className='flex mt-[16px] border-b-[2px] py-[18px] items-center justify-between'>
        <strong className='text-[14px] leading-[20px] text-[#252733] font-bold'>Waiting on Feature Request</strong>
        <span className='text-[14px] font-bold leading-[20px] text-[#9FA2B4]'>4238</span>
        </div>
        <div className='flex mt-[16px] border-b-[2px] py-[18px] items-center justify-between'>
        <strong className='text-[14px] leading-[20px] text-[#252733] font-bold'>Awaiting Customer Response</strong>
        <span className='text-[14px] font-bold leading-[20px] text-[#9FA2B4]'>1005</span>
        </div>
        <div className='flex mt-[16px] border-b-[2px] py-[18px] items-center justify-between'>
        <strong className='text-[14px] leading-[20px] text-[#252733] font-bold'>Awaiting Developer Fix</strong>
        <span className='text-[14px] font-bold leading-[20px] text-[#9FA2B4]'>914</span>
        </div>
        <div className='flex mt-[16px] border-b-[2px] py-[18px] items-center justify-between'>
        <strong className='text-[14px] leading-[20px] text-[#252733] font-bold'>Pending</strong>
        <span className='text-[14px] font-bold leading-[20px] text-[#9FA2B4]'>281</span>
        </div>
        </div>
        <div className='bg-white py-[32px] px-[32px] rounded-md w-[546px]'>
        <div className='flex mb-[8px] items-center justify-between'>
        <strong className='text-[19px] leading-[23px] text-[#252733]'>Tasks</strong>
        <a className='text-[14px] leading-[20px] text-[#3751FF] hover:text-[#252733] duration-300 font-bold' href="#">View all</a>
        </div>
        <p className='text-[12px] leading-[15px] text-[#9FA2B4] font-bold'>Today</p>
        <div className='flex border-b-[2px] py-[18px] items-center justify-between'>
        <input className='outline-none w-[80%] text-[#C5C7CD] text-[14px] leading-[20px] font-bold' type="text" placeholder='Create new task' autoComplete='off' required/>
        <button className='w-[76px] bg-[#F0F1F7] py-[6px] border-[2px] border-[#F0F1F7] rounded-md text-[14px] leading-[20px] text-[#252733] hover:border-[2px] hover:border-black duration-300 hover:bg-transparent hover:text-black'>enter</button>
        </div>
        <div className='flex border-b-[2px] py-[18px] items-center justify-between'>
        <input className='outline-none w-[80%] text-green-700 placeholder:text-[#252733] text-[14px] leading-[20px] font-bold' type="text" placeholder='Finish ticket updateCreate new task' autoComplete='off' required/>
        <button className='w-[74px] bg-[#FEC400] py-[6px] border-[2px] border-[#FEC400] rounded-lg text-[14px] leading-[20px] text-white hover:border-[2px] hover:border-[#FEC400] duration-300 hover:bg-transparent hover:text-[#FEC400]'>Urgent</button>
        </div>
        <div className='flex border-b-[2px] py-[18px] items-center justify-between'>
        <input className='outline-none w-[80%] text-green-700 placeholder:text-[#252733] text-[14px] leading-[20px] font-bold' type="text" placeholder='Create new ticket example' autoComplete='off' required/>
        <button className='w-[54px] bg-[#29CC97] py-[6px] border-[2px] border-[#29CC97] rounded-xl text-[14px] leading-[20px] text-white hover:border-[2px] hover:border-[#FEC400] duration-300 hover:bg-transparent hover:text-[#FEC400]'>NEW</button>
        </div>
        <div className='flex border-b-[2px] py-[18px] items-center justify-between'>
        <input className='outline-none w-[80%] text-green-700 placeholder:text-[#252733] text-[14px] leading-[20px] font-bold' type="text" placeholder='Update ticket report' autoComplete='off' required/>
        <button className='w-[76px] bg-[#F0F1F7] py-[6px] border-[2px] border-[#F0F1F7] rounded-md text-[14px] leading-[20px] text-[#9FA2B4] hover:border-[2px] hover:border-red-500 duration-300 hover:bg-transparent hover:text-red-500'>Default</button>
        </div>
        </div>
        </div>
        </>
    )
}

export default Oveview