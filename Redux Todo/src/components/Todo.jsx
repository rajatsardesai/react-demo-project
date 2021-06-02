import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from './actions/index';

export const Todo = () => {

    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducer.list);
    const dispatch = useDispatch();

    return (
        <>
            <div className="container">
                <div>
                    <h4 className="text-center mt-5">Add your notes here ✌️</h4>
                </div>

                <div className="container col-lg-6 col-12 mt-4">
                    <label className="form-label">Add Notes</label>
                    <div className="d-flex">
                        <input type="text" className="form-control" placeholder="add notes" value={inputData} onChange={(e) => setInputData(e.target.value)} />
                        <button className="btn btn-success" onClick={() => dispatch(addTodo(inputData), setInputData(''))}>Add</button>
                    </div>


                    {
                        list.map((elem) => {
                            return (
                                <div className="d-flex mt-4" key={elem.id}>
                                    <div className="w-100 bg-light px-3">
                                        <h3>{elem.data}</h3>
                                    </div>
                                    <button className="btn btn-danger " onClick={() => dispatch(deleteTodo(elem.id))}>Delete</button>
                                </div>
                            )
                        })
                    }

                    {
                        list !== '' ?
                            <div className="button mt-4">
                                <button className="btn btn-danger w-100" onClick={() => dispatch(removeTodo())}>Remove All</button>
                            </div> : null
                    }

                    {
                        list === '' ?
                            <div className="h-100 p-5 bg-light border rounded-3 mt-4">
                                <h2>Note is empty</h2>
                                <p>Please add note above.</p>
                            </div> : null
                    }

                </div>
            </div>
        </>
    )
}
