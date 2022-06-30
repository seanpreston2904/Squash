import UserPhoto from '../../../assets/img/sample/UserProfile.jpg'

export const IssueEntry: React.FunctionComponent = () => {

    return(

        <div className='flex p-2 w-full bg-gray-200 rounded-xl'>
            
            <div className='my-auto bg-gray-400 px-2 p-[0.175rem] text-center font-semibold rounded-lg text-white'><p>Release</p></div>

            <p className='grow ml-4 font-semibold text-gray-600 my-auto'>Issue Name</p>

            <div className='flex space-x-1 my-auto'>
                <div className='flex -space-x-4'>
                    <img src={UserPhoto} className='z-20 w-8 rounded-full border-2 border-gray-200'/>
                    <img src={UserPhoto} className='z-10 w-8 rounded-full border-2 border-gray-200'/>
                    <img src={UserPhoto} className='z-0 w-8 rounded-full border-2 border-gray-200'/>
                </div>
                <div className='w-[30px] h-[30px] bg-gray-300 flex rounded-full'><p className='mx-auto my-auto font-semibold text-gray-600'>+1</p></div>
            </div>

            <div className='my-auto bg-red-400 px-2 p-[0.175rem] text-center font-semibold rounded-lg text-white ml-4'><p>Open</p></div>
            <p className='my-auto ml-4 font-semibold text-gray-600 mr-2'>01/01/2022</p>

        </div>

    );

} 