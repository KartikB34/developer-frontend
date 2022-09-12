import React from 'react';
import EditResume from './EditResume'
import EditProfile from './EditProfile'
import {FiGithub, FiTwitter} from 'react-icons/fi'
import {AiOutlineLink} from 'react-icons/ai'
import {GrLinkedin ,GrGithub} from "react-icons/gr"


const BasicUserDetails = ({user, token}) =>{

    return(<>
    <div className="bg-gray-300 p-2 rounded">
        <div className="flex gap-2">
            <div className='w-20 h-20'>
                <img alt="profile" className='w-full h-full rounded shadow-lg' src={`https://avatars.dicebear.com/api/initials/${user?.firstName +" "+ user?.lastName}.svg`} />
            </div>
            <div className='flex flex-col h-20 justify-between'>
                <div className='text-black'>
                    <div className='text-lg font-semibold'>{user?.firstName + " " +user?.lastName}</div>
                    <div className='text-xs'>{user?.email}</div>
                </div>
                {
                    user?.userResume === null ?
                    null :
                    <div className='mb-1 flex flex-row justify-start'>
                        {
                            user?.userResume?.links.github === '' ? 
                            null : 
                            <a href={user?.userResume?.links.github} className='flex items-center text-black hover:text-black' target="_blank"><GrGithub /></a>
                        }
                        {
                            user?.userResume?.links.linkedin === '' ? 
                            null : 
                            <a href={user?.userResume?.links.linkedin} className='ml-3 flex items-end text-[#0072b1] hover:text-[#0072b1]' target="_blank"><GrLinkedin /></a>
                        }         

                        {/* tell backend guy to include twitter field in schema
                        {
                            user?.userResume.links.twitter === '' ? 
                            null : 
                            <a href={user?.userResume.links.linkedin} className='ml-3 flex items-end' target="_blank"><FiTwitter /></a>
                        } */}
                </div>
                }

                {/* <div>{user?.phoneNumber}</div>
                <span className='text-md'>{user?.firstName + " " +user?.lastName}</span><br/>
                <span className="text-xs text-gray-200">{user?.email}</span><br/>
                <span className="text-xs text-gray-200">{user?.phoneNumber}</span><br/>
                <span className="text-xs text-gray-200">{user?.location}</span><br/>
                <span className="tetx-base text-blue-500">Community Rank : 130</span> */}
            </div>
        </div>
        

        <div className="mt-2 pt-2 px-1">

            <div className=' text-gray-800 text-sm'>{user?.location}</div>

            {
                user?.userResume === null ?
                null :
                <div className=''>
                    {
                        user?.userResume?.links.otherLinks[0] === "" ?
                        <span className='text-sm text-red-500'>Update Your Profile</span> :
                        <div className='flex items-center'>
                            <a href={user?.userResume.links.otherLinks[0]} target="_blank" className='text-black flex items-center'>
                                <span className='mr-1 text-sm'>Resume</span>
                                <AiOutlineLink />
                            </a>
                        </div>
                    }
                </div>
            }
            
            {/* <span>Resume</span><br/>
            {user?.userResume === null && 'Add a Resume'}
            {user?.userResume !== null && <a className="text-red-500 text-xs" href={user?.userResume?.links?.otherLinks[0]}>{user?.userResume?.links?.otherLinks[0].substring(0, 60)}...</a>} */}
        </div>
        
        <div className='pt-2 flex gap-3'>
            <EditResume user={user} token={token} />
            <EditProfile user={user} token={token} />
        </div>
    </div>
    </>);
}

export default BasicUserDetails;