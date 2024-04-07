import './index.css'


const PrepJourney = () => (
    <div className='become-acca-outer-container'>
        <div>
            <h1>Become ACCA in 18 Months</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div>
                <button type="button" class="btn btn-danger">Danger</button>
            </div>
        </div>
        <form id='input-form' className='shadow'>
            <label>Input Form</label>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Place' />
            <input type="text" placeholder='Location' />
            <input type="text" placeholder='Address' />
            <button type="submit" className=' btn btn-primary mt-4'>Submit</button>
        </form>
    </div>
)
export default PrepJourney