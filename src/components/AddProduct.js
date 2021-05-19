import React from 'react'
import Productlist from './Productlist'

class AddProduct extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          pdtname: '',
          category: 'Electronics',
          price: '',
          formErrors: {pdtname: '', category: '', price: ''},
          pdtnameValid: false,
          categoryValid: false,
          priceValid: false,
          formValid: false,
          listOfCat: ["Electronics", "Furniture", "Home Appliances"],
          listOfProd: [
              { id: 1, productName: "Sony Tv 35inches", category: "Electronics", price: "45000" },
              { id: 2, productName: "Mi Tv 5 Series 32", category: "Electronics", price: "20000" },
              { id: 3, productName: "Panasonic Tv 42inches", category: "Electronics", price: "35000" }
          ]
        }

        this.removeData = this.removeData.bind(this);
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let proname = this.state.pdtname;
        let procategory = this.state.category;
        let proprice = this.state.price;
      
        switch(fieldName) {
          case 'pdtname':
            proname = value.length >= 6;
            fieldValidationErrors.pdtname = proname ? '' : ' should have atleast 6 characters';
            break;
          case 'category':
            procategory = value.length >= 1;
            fieldValidationErrors.category = procategory ? '': ' is not valid category';
            break;
          case 'price':
            proprice = value > 100 ;
            fieldValidationErrors.price = proprice ? '': ' start with minimum 100';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
            pdtnameValid: proname,
            categoryValid: procategory,
            priceValid: proprice
                      }, this.validateForm);
    }
      
    validateForm() {
        this.setState({formValid: this.state.pdtnameValid && this.state.categoryValid && this.state.priceValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'Has-err');
    }

    handleSubmit = (event) => {
        console.log(event.target);
        event.preventDefault();
        const data = { id: this.state.listOfProd.length + 1, productName: this.state.pdtname, category: this.state.category, price: this.state.price }
        // this.setState({listOfProd: [...this.state.listOfProd, ...data ] });
        this.setState(prevState => ({
            listOfProd: [...prevState.listOfProd, data]
          }))
    }

    removeData = (itemId) => {
        const items = this.state.listOfProd.filter(item => item.id !== itemId);
        this.setState({ listOfProd: items });  
    }

    render() {
        return (
            <>
                <form style={{float: "left"}} className="addForm col-sm-5" onSubmit={this.handleSubmit}>
                    <h2>Add Product</h2>
                    <div className={`form-group
                    ${this.errorClass(this.state.formErrors.pdtname)}`}>
                        <label htmlFor="pdtname">Product Name</label>
                        <input type="text" className="form-control" name="pdtname"
                        value={this.state.pdtname} onChange={(event) => this.handleUserInput(event)}/>
                    </div>
                    { this.state.pdtname.length > 0 &&
                        <div className="panel panel-default" style={{color: "red"}}>
                            {this.state.formErrors.pdtname}
                        </div>
                    }
                    <div className={`form-group
                    ${this.errorClass(this.state.formErrors.category)}`}>
                        <label htmlFor="category">Category</label>
                        {/* <input type="text" className="form-control" name="category" 
                        value={this.state.category} onChange={(event) => this.handleUserInput(event)}/> */}
                        <select className="form-control" value={this.state.category} name="category" onChange={(event) => this.handleUserInput(event)}>
                            { 
                                this.state.listOfCat.map((val,i) => (
                                <option key={i} value={val}>{val}</option>
                                ))
                            }
                        </select>
                    </div>
                    { this.state.category.length > 0 &&
                        <div className="panel panel-default" style={{color: "red"}}>
                            {this.state.formErrors.category}
                        </div>
                    }
                    <div className={`form-group
                    ${this.errorClass(this.state.formErrors.price)}`}>
                        <label htmlFor="price">Price</label>
                        <input type="number" className="form-control" name="price"
                        value={this.state.price} onChange={(event) => this.handleUserInput(event)}/>
                    </div>
                    { this.state.price.length > 0 &&
                        <div className="panel panel-default" style={{color: "red"}}>
                            {this.state.formErrors.price}
                        </div>
                    }
                    <input type="submit" className="btn btn-info" disabled={!this.state.formValid} value="Add To View"/>  
                </form>
                <div className="col-sm-5" style={{float: "right"}}>
                    <Productlist list={this.state.listOfProd} remove={this.removeData}/>
                </div>
            </>
        )
    }
}

export default AddProduct
