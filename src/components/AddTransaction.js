import { useState } from 'react'

const AddTransaction = ({onAdd}) => {
    const [text, setText] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')
    

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please Add Transaction')
            return
        }

        onAdd({text, description, category, amount})

        setText('')
        setDescription('')
        setCategory('')
        setAmount('')
    }

    return (
        <form className = 'add-form' onSubmit = {onSubmit}>
            <div className='form-control'>
                <label>Date</label>
                <input type="text" placeholder='Add date'
                value={text} onChange={(e)=> setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Description</label>
                <input type="text" placeholder='Add Description'
                value={description} onChange={(e)=> setDescription(e.target.value)}/>
            </div>
            <div className='form-control' >
                <label>Category</label>
                <input type="text" placeholder='Add category'
                value={category} onChange={(e)=> setCategory(e.target.value)}/>
            </div>

            <div className='form-control form-control-check' >
                <label>Amount</label>
                <input type="text" placeholder='Add Amount'
                value={amount} onChange={(e)=> setAmount(e.target.value)}/>
            </div>

            <input type="submit" value='Save Transaction'
            className='btn btn-block'/>
        </form> 
    )
}

export default AddTransaction