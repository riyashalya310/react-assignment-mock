import Header from '../Header'
import './index.css'
import Eligibility from "../Eligibility";
import LearnInACCA from "../LearnInACCA";
import Placement from "../Placement";
import PrepJourney from "../PrepJourney";
import WhyChooseUs from "../WhyChooseUs";

const BecomeACCA = () => (
    <>
        <Header />
        <div className='become-acca-outer-container'>
            <div>
                <h1>Become ACCA in 18 Months</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <div className='horizontal-items-become-acca'>
                    <div className='shadow'>
                        <p>Lorem ipsum</p>
                        <p>1920</p>
                    </div>
                    <div className='shadow'>
                        <p>Lorem ipsum</p>
                        <p>1920</p>
                    </div>
                    <div className='shadow'>
                        <p>Lorem ipsum</p>
                        <p>1920</p>
                    </div>
                    <div className='shadow'>
                        <p>Lorem ipsum</p>
                        <p>1920</p>
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-primary">Primary</button>
                    <button type="button" class="btn btn-danger">Danger</button>
                </div>
            </div>
            <form id='input-form' className='shadow'>
                <label>Input Form</label>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Place'/>
                <input type="text" placeholder='Location'/>
                <input type="text" placeholder='Address'/>
                <button type="submit" className=' btn btn-primary mt-4'>Submit</button>
            </form>
        </div>
        <WhyChooseUs/>
        <Eligibility/>
        <LearnInACCA/>
        <Placement/>
        <PrepJourney/>
    </>
)
export default BecomeACCA