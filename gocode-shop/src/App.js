import React, {useState, useEffect, useRef} from 'react'
import Button from './components/Button'

const App = () => {
    const refContainer = useRef(null);

    const [count, setCount] = useState(0)    
    const [showButton, setShowButton] = useState(true)
    const [storeData, setStoreData] = useState([])
    const [show,setShow] = useState(true)
    const [fullName, setFullName] = useState({firstName: '', lastName:''})
    const [val, setVal] = useState('')
    const getApiAnswer = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products')
          const dataFromApi = await response.json()
          setStoreData(dataFromApi)
        } catch(e){
            console.log(e)
        }
    }
    
    useEffect(() => {
        console.log('moshe ogalbo')
        // setCount(prev => prev + 1) // לולאה אינסופית!!!!!!
    }, [count, showButton, storeData])
    useEffect(() => {
        console.log(fullName)
    }, [fullName])

    useEffect(() => {
        console.log(storeData)
        localStorage.setItem('storeData', JSON.stringify(storeData))

    }, [storeData])


    useEffect(() => {
        getApiAnswer()
        
        // return () => {} // לשימוש רק כאשר רוצים לסגור את הקומפוננטה ורוצים שיקרה דבר מה לפני כן.
    },[])



    const handleCounterMinus = () => {
        if(count === 0 ){
            return
        } else{
            setCount((prev) => prev - 1)
        }
    }
    
        const handleCounterPlus = () => {
            setCount((prev) => prev + 1)

        }
        
        const toggleShowButton = () => {
            setShowButton((prev) => !prev)
        }    
        useEffect(() => {
            console.log('happened')
            return () => {console.log('collapsed')}
        },[show])
  return (
    <div>
        {/* <input value={val} ref={refContainer} placeholder='mendy hatotah'onChange={(e) => setVal(e.target.value)}/> */}
        <input value={fullName.firstName} placeholder='firstName' onChange={(e) => setFullName({firstName: e.target.value, lastName:fullName.lastName})}/>
        <input value={fullName.lastName} placeholder='lastName' onChange={(e) => setFullName({firstName:fullName.firstName, lastName: e.target.value})}/>

        <Button text={"+"} onClickHandler={handleCounterPlus} />
        <span>{count}</span>
        <Button text={"-"} onClickHandler={handleCounterMinus} />
        <Button text={showButton ? "hide me!!!" : "reveal me!!!!"} onClickHandler={toggleShowButton}/>
        {showButton && <span>רואה ואינו נראה</span>}
        {storeData ? storeData.map((element,index) => <div key={index}><span>{element.title}</span></div>) : 'no storeData found'}
        {show && <Button text={"show"} onClickHandler={() => setShow(!show)}/> }
        <button onClick={()=>{console.log(refContainer); refContainer.current.focus(); refContainer.current.value='almog'; refContainer.current.style.background = 'red';}}>click me pleaseee</button>
    </div>
  )
}

export default App