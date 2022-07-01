import { BugFill, DoorOpenFill, ExclamationCircleFill, GearFill, HouseDoorFill } from "react-bootstrap-icons";
import UserPhoto from "../../../assets/img/sample/UserProfile.jpg"

export const NavigationBar: React.FunctionComponent = () => {

    return(
        <div className='flex space-x-6 p-4 align-middle'>

            <button className='flex space-x-2 font-segoe font-bold text-4xl text-gray-600'><BugFill /><p>Squash</p></button>

            {/* Dividing Line */}
            <div className='w-[1px] h-fyll bg-gray-300/70' />

            <div className='grow flex space-x-4'>
                <button className='flex p-2 space-x-2 my-auto'>
                    <HouseDoorFill className='text-gray-500 my-auto'/>
                    <a href="/" className='text-gray-500 font-semibold'>Home</a>
                </button>

                <button className='flex p-2 space-x-2 my-auto'>
                    <ExclamationCircleFill className='text-gray-500 my-auto'/>
                    <a href="/" className='text-gray-500 font-semibold'>Tickets</a>
                </button>
            </div>

            <div className='flex space-x-8'>

                <button><DoorOpenFill className='text-gray-500 text-2xl'/></button>
                <button><GearFill className='text-gray-500 text-2xl'/></button>
                
                <img alt="User Photo" src={UserPhoto} className='w-12 rounded-full'/>
                
            </div>
            
            
        </div>
    );

}