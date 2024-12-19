import { bedroom2 } from '../../assets/images'

const ExploreCard = ({property}: {property: any}) => {
  return (
    <div className='w-full h-[24vw] rounded-[1.6vw] relative flex items-end'>
      <img className='w-full h-full object-cover rounded-[inherit] absolute z-[-1]' src={property.images[0]} alt='explore card' />
      <div className='w-full bg-black/50 min-h-[10%] rounded-b-[inherit] backdrop-blur-[4px] text-white p-[1vw]'>
        <p className='uppercase text-parasm tracking-widest font-medium'>{property.title}</p>
        <div className='flex justify-between mt-[0.1vw]'>
          <p className='text-parasm tracking-wider font-extralight text-[#f0f0f0]'>{property.location.address}</p>
          <p className='text-parasm tracking-wider text-[#f0f0f0]'>{property.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ExploreCard