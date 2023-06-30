import './Card.scss'

const Card = ({ handleSubmit, handleRate, rate}) => {

    return(
        <>
            <div className='star'>
                <svg height="40" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="#fb7413" stroke="#fb7413" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 3)"/></svg>
            </div>
            <div className='text'>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div className='numbers'>
                <div key='1' id='1' className={rate && rate >= 1 ? 'rate' : 'no-rate'} onClick={() => handleRate(1)}>1</div>
                <div key='4' id='2'  className={rate && rate >= 2 ? 'rate' : 'no-rate'} onClick={() => handleRate(2)}>2</div>
                <div key='2' id='3' className={rate && rate >= 3 ? 'rate' : 'no-rate'} onClick={() => handleRate(3)}>3</div>
                <div key='3' id='4' className={rate && rate >= 4 ? 'rate' : 'no-rate'} onClick={() => handleRate(4)}>4</div>
                <div key='5' id='5' className={rate && rate >= 5 ? 'rate' : 'no-rate'} onClick={() => handleRate(5)}>5</div>
            </div>
            <button onClick={handleSubmit}>SUBMIT</button>
        </>
    )
}

export default Card