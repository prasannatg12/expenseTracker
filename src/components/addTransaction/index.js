import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import 'react-dropdown/style.css'
import "react-datepicker/dist/react-datepicker.css";
import './style.css'
import { Stores, getAllData } from '../../indexDB/db.ts';
import Dropdown from 'react-dropdown';
import DatePicker from 'react-datepicker'
// import ReactTable, {useTable} from "react-table";

let prices, total;

const AddTransaction = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [transactionType, setTransactionType] = useState("credit")
    const [transactionDate, setTransactionDate] = useState(new Date())
    const [txnAmount, setTxnAmount] = useState("");
    const [txnDescription, setTxnDescription] = useState("");
    const [totalCredits, setTotalCredits] = useState(0);
    const [totalDebits, setTotalDebits] = useState(0);
    const [totalBalance, setTotalBalance] = useState(0);
    const [txnData, setTxnData] = useState({
        txnTitle: "",
        txnCategory: "",
        txnDate: new Date(),
        txnAmount: 0,
        txnType: transactionType,
        txnDescription: ""
    })
    const [txnDataCollections, setTxnDataCollections] = useState([]);

    const getCategories = async () => {
        try {
            let catElement = []
            const varGetCategories = await getAllData(Stores.Category)
            console.log("vargetCAT", varGetCategories)
            varGetCategories.map(eachCategories => {
                catElement.push(eachCategories.name)
            })
            setCategories(catElement)
        } catch (error) {
            return null
        }

    }

    // useEffect(() => {
    //     try {
    //         getCategories()            
    //     } catch (error) {

    //     }

    // }, [])

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const chooseTransactionType = () => {
        return (
            <>
                <div>
                    {/* style={{ display: "flex", flexDirection: "row" }}> */}
                    <div style={{ fontWeight: "bold" }}>Transaction Type <span style={{ color: "red" }}>*</span></div>
                    <div style={{ margin: "12px 0px" }}>
                        <input type="radio" name="radio1" id="credit" value="credit" checked={transactionType === "credit"} /><label onClick={() => {
                            setTransactionType("credit")
                            setTxnData({ ...txnData, txnType: "credit" })
                        }} className="credit four col" for="credit">Credit</label>
                        <input type="radio" name="radio1" id="debit" value="debit" checked={transactionType === "debit"} /><label onClick={() => {
                            setTransactionType("debit")
                            setTxnData({ ...txnData, txnType: "debit" })
                        }} className="debit four col" for="debit">Debit</label>
                        {/* <input type="radio" name="radio1" id="invest" value="invest" checked={transactionType === "invest"} /><label onClick={() => {
                            setTransactionType("invest")
                            setSelectedCategory("")
                            setTxnData({ ...txnData, txnType: "invest" })
                        }} className="invest four col" for="invest">Investment</label> */}
                    </div>
                </div>
            </>
        )
    }

    const modalContent = () => {

    }

    const customStyle = {
        content: {
            border: "2px solid #ffef"
        }
    }

    const calculateBalance =(arrTxnDataCollections)=> {
        console.log("calculate balance", arrTxnDataCollections)
        const groupedByType = {};
        for(const dataCollection of arrTxnDataCollections) {
            const type = dataCollection.txnType
            if(!groupedByType[type]){
                groupedByType[type] = [dataCollection]
            } else {
                groupedByType[type].push(dataCollection)
            }
        }

        let cdt = 0, dbt = 0, cbtprice, dbtprice
        console.log("GROUPBYTYPEEEEEEEEEEEEEEEEEEEE", groupedByType, cdt, dbt, groupedByType)

            setTotalCredits(0)
            setTotalDebits(0)
            setTotalBalance(0)   
        if(groupedByType.credit) {
            cbtprice = groupedByType.credit && groupedByType.credit.map((itemOnCart) => parseInt(itemOnCart.txnAmount))
            cdt = cbtprice && cbtprice.reduce((acc, curr) => acc + curr)
            console.log(cdt, ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;")
            setTotalCredits(cdt)
        } 
        if(groupedByType.debit) {
            dbtprice = groupedByType.debit && groupedByType.debit.map((itemOnCart) => parseInt(itemOnCart.txnAmount))
            dbt = dbtprice && dbtprice.reduce((acc, curr) => acc + curr)
            setTotalDebits(dbt)
        }
        let balance = cdt - dbt
        setTotalBalance(balance)
        console.log("GROUPBYTYPEEEEEEEEEEEEEEEEEEEE", groupedByType, cdt, dbt)

    }

    const showModalMain = () => {
        return (
            <Modal
                isOpen={isModalOpen}
                style={customStyle}
                shouldCloseOnEsc={true}
                onRequestClose={() => closeModal()}
            >
                <h3>Add Transaction Details</h3>
                <div style={{
                    display: " flex",
                    flexDirection: " row",
                    fontWeight: 500,
                    justifyContent: "space-between",
                    margin: "0px 40px"
                }}>

                    <div>
                        <div>Title <span style={{ color: "red" }}>*</span></div>
                        <div className='inputDivStyleAddTxn'>
                            <input className='inputStyleAddTxn'
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                    setTxnData({
                                        ...txnData,
                                        txnTitle: e.target.value
                                    })
                                }}
                            />
                        </div>
                    </div>

                    <div style={(transactionType === "debit" || transactionType === "credit") ? {} : { display: "none" }}>
                        <div>Category <span style={{ color: "red" }}>*</span></div>
                        <Dropdown options={categories}
                            controlClassName='categoryDropDown'
                            placeholder={"Select Item"}
                            onChange={(event) => {
                                console.log(">>>>>>>>>>>>>", event)
                                setSelectedCategory(event.value)
                                setTxnData({
                                    ...txnData,
                                    txnCategory: event.value,
                                    txnType: txnData.txnType !== "invest" ? txnData.txnType : ""
                                })


                            }}
                            value={selectedCategory}
                        />
                        {/* <div className='inputDivStyle'><input /></div> */}
                    </div>

                    <div>
                        <div>Date <span style={{ color: "red" }}>*</span></div>
                        <DatePicker
                            selected={transactionDate}
                            dateFormat="dd-MM-yyyy"
                            endDate={new Date()}
                            maxDate={new Date()}
                            onChange={(date) => {
                                setTransactionDate(date)
                                setTxnData({
                                    ...txnData,
                                    txnDate: date
                                })
                            }
                            }
                            className='datePickerStyle'
                        />
                        {/* <div className='inputDivStyle'><input /></div> */}
                    </div>

                    <div>
                        <div>Amount <span style={{ color: "red" }}>*</span></div>
                        <div className='inputDivStyleAddTxn'>
                            <input type="number"
                                className='inputStyleAddTxn'
                                value={txnAmount}
                                onChange={(e) => {
                                    setTxnAmount(e.target.value)
                                    setTxnData({
                                        ...txnData,
                                        txnAmount: e.target.value
                                    })
                                }} /></div>
                    </div>

                    <div>
                        {chooseTransactionType()}
                        {/* <div>Type (Credit / Debit)</div>
                    <div><input /></div> */}
                    </div>

                </div>
                <div style={{
                    display: " flex",
                    flexDirection: "row",
                    fontWeight: 500,
                    margin: "0px 10px"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        fontWeight: 500,
                        marginTop: "10px"
                    }}>
                        <div style={{ marginLeft: 30 }}>
                            <div>Description</div>
                            <div className='inputDivStyleAddTxn' >
                                <input type="text"
                                    value={txnDescription}
                                    onChange={(e) => {
                                        setTxnDescription(e.target.value)
                                        setTxnData({
                                            ...txnData,
                                            txnDescription: e.target.value
                                        })
                                    }}
                                    style={{ width: "380px" }} className='inputStyleAddTxn' /></div>
                        </div>

                        <div style={{
                            color: "red",
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: 30,
                            fontSize: 12,
                            alignItems: "end",
                            marginTop: "11px"
                        }}>* Mandatory Field</div>

                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "end",
                            marginTop: "11px"
                        }}>
                            <div style={{ marginLeft: 30 }}>
                                <button
                                    onClick={() => {
                                        console.log("TXN DATA", txnData, '0000000000', selectedCategory)
                                        setTxnDataCollections(olddata => [...olddata, txnData])
                                        resetData()
                                        let arr = [...txnDataCollections, txnData]
                                        calculateBalance(arr)

                                    }} >ADD</button>
                            </div>
                            <div style={{ marginLeft: 30 }}>
                                <button onClick={() => {
                                    calculateBalance(txnDataCollections)
                                    resetData()
                                    console.log("DATA ENTERED", txnDataCollections)
                                }} >CLEAR</button>
                            </div>
                        </div>

                        <div style={{ 
                                display: "flex",
                                marginTop: "30px",
                                marginLeft: "30px",
                                justifyContent: "space-around",
                                textAlign: "center"
                         }}>
                            <div>
                                <div>Credits</div>
                                <div style={{fontSize:"20px"}}>{totalCredits}</div>
                            </div>
                            <div>
                                <div>Debits</div>
                                <div style={{fontSize:"20px"}}>{totalDebits}</div>
                            </div>
                            <div>                            
                                <div>Balance</div>
                                <div style={
                                    totalBalance >= 0 ? {fontSize:"20px", color:"green"} : {fontSize:"20px", color:"red"}
                                    }>{totalBalance}</div>
                            </div>
                        </div>

                        <div>


                        </div>
                    </div>
                    <div 
                    className="displayTxnDataTable"
                    style={{    
                        height: "350px",
                        overflow: "auto",
                        width: "900px"}}
                    // style={{ display: "flex", alignItems: "flex-start", width: "100%", marginLeft: "40px", marginTop: "12px" }} 
                    >
                        {/* <div>Preview</div> */}
                        {displayTxnData()}
                    </div>
                </div>
            <div className="importCancelPanel">
                <div style={!txnDataCollections.length ? {display:"none"} :{marginRight:"20px"}}>
                    <button>Import</button>
                </div>
                <div style={{marginRight:"20px"}}>
                <button onClick={()=>{
                    setIsModalOpen(false)
                }}>Close</button>
                </div>
            </div>
            </Modal>
        )
    }

    // txnTitle:"",
    //     txnCategory: "",
    //     txnDate: new Date(),
    //     txnAmount: 0,
    //     txnType: transactionType,
    //     txnDescription: ""
    const displayTxnData = () => {

        return (
            txnDataCollections.length != 0 && <table style={{ width: "100%" }}>
                <tr style={{ textAlign: "center" }}>
                    <th>Preview</th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th className="txnColumn"></th>
                </tr>
                {txnDataCollections.map(((collection, index) => {
                    return (
                        <tr key={index} className="txnRow" style={{ textAlign: "center" }}>
                            <td className="txnColumn">{collection.txnTitle}</td>
                            <td className="txnColumn">{collection.txnCategory}</td>
                            <td style={{ width: "300px" }}>{collection.txnDate.toDateString()}</td>
                            <td className="txnColumn">{collection.txnAmount}</td>
                            <td className="txnColumn">{collection.txnType}</td>
                            <td className="txnColumn">{collection.txnDescription}</td>
                            <td  className="deleteAction" onClick={() => {
                                const newData = txnDataCollections.filter((e, idx) => ((index !== idx)))
                                console.log("new DATA", newData, index)
                                calculateBalance(newData)
                                setTxnDataCollections(newData)
                            }}><span> &#10006; </span></td>
                        </tr>
                    )
                }))}
            </table>
        )
        //     const columns = [{
        //         Header: 'Title',
        //         accessor: 'title'
        //     },{
        //         Header: 'Category',
        //         accessor: 'txnCategory'
        //     }
        // ]

        // return(
        //     <div>
        //         <ReactTable 
        //             columns={columns}
        //             data={txnDataCollections}
        //         />
        //     </div>
        // )
        // return(
        //     txnDataCollections.map((eachTxn,key) => {
        //         console.log("kkkkkkkkkkkkk", eachTxn, key)
        //         return( <>
        //             <div> {eachTxn.txnTitle} </div>
        //             <div> {eachTxn.txnType} </div>
        //             </>
        //         )
        //     })

        // )


    }

    const resetData = () => {
        setTitle("")
        setSelectedCategory("")
        setTransactionType("credit")
        setTransactionDate(new Date())
        setTxnAmount("")
        setTxnDescription("")
        setTxnData({
            txnTitle: "",
            txnCategory: "",
            txnDate: new Date(),
            txnAmount: 0,
            txnType: "credit",
            txnDescription: ""
        })
    }
    return (
        <>
            {showModalMain()}
            <div className='plusIcon' onClick={() => {
                getCategories()
                setIsModalOpen(true)
            }}>
                +
            </div>
        </>
    )
}

export default AddTransaction
