import detailImg from '../Assets/detail.png'
export default function Details(){
    return(
        <>
            <div className='container details'>
                <div className='row'>
                    <div className='col-sm-5'>
                        <h6>There is No Tomorrow</h6>
                        <p>The gym is a place where individuals engage in physical exercise to enhance their 
                            fitness levels and overall health. Equipped with a variety of machines, weights,
                             and exercise tools, gyms offer a diverse range of workout options tailored to different
                              fitness goals. From cardio machines like treadmills and ellipticals to strength training
                               equipment like dumbbells and barbells, there's something for everyone.<br/><br/> Many gyms also 
                               provide group fitness classes led by experienced instructors, catering to various interests 
                               and skill levels. With a focus on promoting a healthy lifestyle, gyms often offer amenities 
                               such as showers, locker rooms, and sometimes even nutritional guidance. Whether you're aiming 
                               to build muscle, lose weight, or simply stay active,
                             the gym provides a supportive environment to help you reach your fitness aspirations.
                             </p>
                             <button className ='btn'>View More</button>
                    </div>
                    <div className='offset-sm-2 col-sm-5'>
                        <img src={detailImg} alt=''/>
                    </div>
                </div>
            </div>
        </>
    )
}