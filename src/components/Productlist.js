import React from 'react'

const Productlist = (props) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th> Product Name </th>
                    <th> Category </th>
                    <th> Price </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.list.map(val => (
                            <tr key={val.id}>
                                <td>{ val.productName }</td>
                                <td>{ val.category }</td>
                                <td>{ val.price }</td>
                                <td onClick={() => props.remove(val.id)}><i className="fa fa-trash" aria-hidden="true"></i></td>
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
    )
}

export default Productlist
