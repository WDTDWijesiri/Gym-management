import C1 from '../Assets/c1.jpg'
import C2 from '../Assets/c2.jpg'
import C3 from '../Assets/c3.jpg'
export default function Customer()
{
    return(
        <>
        <section>
            <div className="customer container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="box">
                            <img src={C1} alt=""className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="box">
                            <img src={C2} alt=""className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="box">
                            <img src={C3} alt=""className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}