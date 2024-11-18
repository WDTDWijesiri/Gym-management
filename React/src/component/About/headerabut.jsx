
import HeaderImg from '../Assets/header.jpg'

export default function Header()
{
    return(
        <>
            <section>
                <div className="header">
                    <div>
                        <div className="img">
                            <img src={HeaderImg} alt=""/>
                        </div>
                        <div className='Overlay'></div>
                    </div>
                    <div className='Content'>
                        <h6>About <br/>Us</h6>
                        
                    </div>
                </div>
            </section>
        </>
    )
}