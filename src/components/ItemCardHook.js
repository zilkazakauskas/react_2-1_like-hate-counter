// REACT hooksu pavyzdys
import React, { useState } from 'react'

export default function ItemCardHook() {

    const [likeCount, setLikeCount] = useState(0);
    const [hateCount, setHateCount] = useState(0);

    const resetCount = () => {
        setLikeCount(0);
        setHateCount(0);
    }

    return (
        <div className="col-4 mt-2">
            <div className="card mb-4 box-shadow">
                <div className="card-body">
                    <h2>Post</h2>
                    <p className="card-text"><strong>Su Hooks</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim reprehenderit sit ab aperiam doloribus, est nostrum sunt incidunt suscipit, saepe provident ratione debitis, animi accusantium eligendi tempora inventore similique.</p>
                    <div className="align-items-center">
                        <button type="button" className="btn btn-sm btn-success" onClick={() => setLikeCount(likeCount + 1)} >Like {likeCount}</button>
                        <button type="button" className="btn btn-sm btn-danger mx-3" onClick={() => setHateCount(hateCount + 1)} >Hate {hateCount}</button>

                        <button type="button" className="btn btn-sm btn-secondary" onClick={() => resetCount()} >Reset</button>
                        {/* ARBA */}
                        {/* <button type="button" className="btn btn-sm btn-secondary" onClick={() => {
                            setLikeCount(0);
                            setHateCount(0);
                        }} >Reset</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}