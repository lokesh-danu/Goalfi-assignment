import style from '../styles/Home.module.css'
import Image from 'next/image';
import rocket from '../public/img/rocket.svg'
import { Carousel } from 'react-responsive-carousel'
import kyc1 from '../public/img/kyc1.png';
import planHome from '../public/img/planHome.png'
import investPlan from '../public/img/investPlan.png'
import insurPlan from '../public/img/insurPlan.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
const Homepage = () => {
    return (
        <div className={style.home} >
            <div className={`${style.pane} ${style.firstPane}`} >
                <div className={`${style.leftPane}`}>
                    <Image src={rocket} />
                </div>
                <div className={`${style.rightPane} ${style.firstRight}`}>
                    <h1> Start your money journey with the most powerful financial launchpad.</h1>
                    <span>Manage your finances with accuracy and experience!</span>
                    <div>
                        <button style={{ background: "white", color: "#002376" }}>join us</button>
                        <button style={{ background: "black", color: "white" }}>Learn More</button>
                    </div>
                </div>
            </div>
            <div className={`${style.pane} ${style.kycpane}`} >
                <div className={`${style.leftPane} ${style.kycimage}`}>
                    <Image src={kyc1} />
                </div>
                <div className={`${style.rightPane} ${style.kyctext}`}>
                    <h1>
                        Automated KYC and Onboarding via Documents!
                    </h1>
                </div>
            </div>
            <div className={`${style.pane} ${style.planPane}`} >
                <Carousel showArrows={false} >
                    <div className={`${style.planHome} ${style.planSlide}`}>
                        <h1>Goal Based Planning</h1>
                        <span>Plan your finances using goal based planning</span>
                        <Image src={planHome}  height={414} width={542} />
                    </div>
                    <div className={style.planSlide}>
                        <div className={`${style.leftPane} ${style.planimg}`}>
                            <Image src={investPlan} height={414} width={542} ></Image>
                        </div>
                        <div className={`${style.rightPane} ${style.planText}`}>
                            <h1>Investment planning</h1>
                            <span>Easily manage your finances with accuracy and experience!</span>
                        </div>
                    </div>
                    <div className={style.planSlide}>
                        <div className={`${style.leftPane} ${style.planimg}`}>
                            <Image src={insurPlan} height={414} width={542} ></Image>
                        </div>
                        <div className={`${style.rightPane} ${style.planText}`}>
                            <h1>Insurance planning</h1>
                            <span>Easily manage your finances with accuracy and experience!</span>
                        </div>
                    </div>
                    <div className={style.planSlide}>
                        <div className={`${style.leftPane} ${style.planimg}`}>
                            <Image src={insurPlan} height={414} width={542} ></Image>
                        </div>
                        <div className={`${style.rightPane} ${style.planText}`}>
                            <h1>Insurance planning</h1>
                            <span>Easily manage your finances with accuracy and experience!</span>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Homepage;