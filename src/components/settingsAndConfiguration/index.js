import React, { useState } from 'react'
import Modal from 'react-modal';
import './style.css'
import { Stores, addData, deleteDB, initDB } from '../../indexDB/db.ts';

const SettingsAndConfigurations = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [transactionType, setTransactionType] = useState("credit")
  const [category, setCategory] = useState("")

  const handleInitDB = () => {

    // deleteDB()
    // let dbStatus = deleteDB();
    let dbStatus = initDB();
    console.log("dbSTATUS", dbStatus)


    // // insertQuery()
    dbStatus.then(s => {
        console.log("status iiiiiiiiiiiiiiiiiiiii", s)
    })
}

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const chooseTransactionType = () => {
    return (
      <>
        <div>
          {/* style={{ display: "flex", flexDirection: "row" }}> */}
          <div style={{ fontWeight: "bold" }}>Transaction Type</div>
          <div style={{ margin: "10px 0px" }}>
            <input type="radio" name="radio1" id="credit" value="credit" checked={transactionType === "credit"} /><label onClick={() => {
              setTransactionType("credit")
            }} className="credit four col" for="credit">Credit</label>
            <input type="radio" name="radio1" id="debit" value="debit" checked={transactionType === "debit"} /><label onClick={() => {
              setTransactionType("debit")
            }} className="debit four col" for="debit">Debit</label>
          </div>
        </div>
      </>
    )
  }


  const showModalMain = () => {
    return (
      <Modal
        isOpen={isModalOpen}
        shouldCloseOnEsc={true}
        onRequestClose={() => closeModal()}
      >
        <h3>Settings & Configurations</h3>

        <div className="clsInitialize" 
        onClick={handleInitDB.bind(this)}
        >Initialize DB</div>

        <div style={{
          display: "flex",
          flexDirection: "row",
          fontWeight: 500
        }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>Add Category</div>
            <div className='inputDivStyle'>
              <input className='inputSettings' 
              value={category} onChange={(event) => {setCategory(event.target.value)}} />
            </div>
            <button className='btnSettings' onClick={()=>{
              addData(Stores.Category, {id:Date.now(), name: category}) 
              setCategory("")
            }} >ADD</button>
          </div>

        </div>
      </Modal>
    )
  }
  return (
    <>
      {showModalMain()}
      <div className='title' onClick={() => { setIsModalOpen(true) }}>
        Settings & Configurations
      </div>
    </>
  )
}

export default SettingsAndConfigurations
