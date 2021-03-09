import React, { Component } from "react";
import { Field } from "redux-form";
import { SampleField } from "../sample-field";
import "../../styles/finhouse.css";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "../../styles/home.css";
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Inject, Filter, Group } from '@syncfusion/ej2-react-grids';
import { InputSelect } from '../elements/input-select';
import { InputField } from '../elements/input-field';


export class SampledealerForm extends Component {
  constructor() {
    super();
    //set state properties
    this.state = {
      makeValue: "",
      modelValue: "",
      descValue: "",
      makeList: [],
      modelList: [],
      descList: [],
      postCode: "",
    };






    //bind Make onchange event
    this.handleChangeMake = this.handleChangeMake.bind(this);
    this.handleChangeModel = this.handleChangeModel.bind(this);
    //this.handleChangeDesc = this.handleChangeDesc.bind(this);
    this.handlePostCodeChange = this.handlePostCodeChange.bind(this);
  }



  componentDidMount() {
    this.props.getVehicleMakes();

  }

  //make on-change event
  handleChangeMake(event) {
    var selectedIdx = event.target.selectedIndex;
    var selectedMake = event.target[selectedIdx].text;
    this.setState({ makeValue: selectedMake });

    this.props.getVehicleModels(selectedMake);

  }

  handleChangeModel(event) {
    var selectedIdx = event.target.selectedIndex;
    var selectedModel = event.target[selectedIdx].text;
    this.setState({ modelValue: selectedModel });
    //this.props.getVehicleDescriptions(this.state.makeValue, selectedModel);
    this.props.getAllVehicleDetails(this.state.makeValue, selectedModel);


  }


  handleChangeDesc(event) {
    var selectedIdx = event.target.selectedIndex;
    var selectedDesc = event.target[selectedIdx].text;
    this.setState({ descValue: selectedDesc });
    this.props.getVehicleDetails(
      this.state.makeValue,
      this.state.modelValue,
      selectedDesc
    );
    this.props.getVehicleDetails(
      this.state.makeValue,
      this.state.modelValue,
      selectedDesc
    );


  }

  handlePostCodeChange(event) {
    this.setState({ postCode: event.target.value });

  }


  render() {
    console.log("fin house11");
    const { onQuote } = this.props;
    const { financeHouseState } = this.props;
    //this.gridInstance.dataSource = this.props
    //const { searchResults } = this.props.dealerSearchResult;
    console.log("fin22", financeHouseState);
    const selectionOptions: SelectionSettingsModel = {
      checkboxMode: 'ResetOnRowClick',
      enableToggle: 'true'
    };
    let grid: Grid | null;
    const rowSelected = () => {
      if (grid) {
        const selectedRowIndexes: number[] = grid.getSelectedRowIndexes();
        //alert(grid.getSelectedRowIndexes());
        //alert(financeHouseState.vehicleDetails);
        financeHouseState.vehicleDetails[0] = financeHouseState.vehicleDetails[selectedRowIndexes];
        // this.props.financeHouseState.vehicleDetails = this.props.financeHouseState.vehicleDetails[0];
        // alert("makeListbefore"+financeHouseState.makelist);
        // financeHouseState.makelist = financeHouseState.vehicleDetails;
        // alert(financeHouseState.vehicleDetails[0]);
        // alert("makeListafter"+financeHouseState.makelist)
      }
    }

    return (
      <React.Fragment>
        <div className="finance-container">
          <div className="title-bar">
            {<a className="navbar-brand" href="#">
              <img className="logo-small" src={require("../../assets/images/logo.png")} />
            </a>}
            <span className="is-size-3 has-text-weight-medium">Choose your Car</span>
          </div>
          <div className="finance-content">

            <br />

            <form>
              <span className="is-size-4 has-text-weight-medium">Let's get started with your choice of car</span>
              <hr className="heading-divider" />
              <br />
              <div className="finance-content-form">
                <Field name="carType"
                  component={InputSelect}
                  label="Car make"
                  labelWidth={110}
                  onChange={this.handleChangeMake}
                  helperText="Please choose one of the car make"
                >
                  <option value="" />
                  {financeHouseState.makeList &&
                    financeHouseState.makeList.length > 0 &&
                    financeHouseState.makeList.map((model, idx) => (
                      <option key={idx} value={idx}>
                        {model}
                      </option>
                    ))}
                </Field>
                <br />
                <Field
                  name="carModel"
                  component={InputSelect}
                  label="Car model"
                  labelWidth={110}
                  onChange={this.handleChangeModel}
                  helperText="Please choose one of the car model"
                >
                  <option value="" />
                  {financeHouseState.modelList &&
                    financeHouseState.modelList.length > 0 &&
                    financeHouseState.modelList.map((model, idx) => (
                      <option key={idx} value={idx}>
                        {model}
                      </option>
                    ))}
                </Field>

                <br />
              </div>

              <hr />

              <div>

                <h5>Vehicle Details</h5>

                <div >
                  <GridComponent ref={g => grid = g}
                    dataSource={financeHouseState.vehicleDetails}
                    //dataSource = {data}
                    allowPaging={true}
                    selectionSettings={selectionOptions}
                    //selectedRowIndex = {1}
                    rowSelected={rowSelected}

                    pageSettings={{ pageSize: 10 }}
                    allowFiltering={true}
                    allowGrouping={true}
                  >
                    <ColumnsDirective>
                      <ColumnDirective type='checkbox' width='50'></ColumnDirective>
                      <ColumnDirective field='make_name' headerText='Make' textalign='Right' width='100'></ColumnDirective>
                      <ColumnDirective field='model_name' headerText='Model' textalign='Right' width='100'></ColumnDirective>
                      <ColumnDirective field='description' headerText='Description' textalign='Right' width='100'></ColumnDirective>
                      <ColumnDirective field='cash_price' headerText='Cash' textalign='Right' width='100'></ColumnDirective>
                      <ColumnDirective field='color' headerText='Color' textalign='Right' width='100'></ColumnDirective>
                      <ColumnDirective field='transmission' headerText='Transmission' textalign='Right' width='100'></ColumnDirective>
                      <ColumnDirective field='fuel_type' headerText='Fuel Type' textalign='Right' width='100'></ColumnDirective>
                      <ColumnDirective field='body_style' headerText='Body Style' textalign='Right' width='100'></ColumnDirective>
                      <ColumnDirective field='model_year' headerText='Model Year' textalign='Right' width='100'></ColumnDirective>
                      <ColumnDirective field='vehicle_mileage' headerText='Vehicle Mileage' textalign='Right' width='100'></ColumnDirective>
                    </ColumnsDirective>
                    <Inject services={[Page, Filter, Group]} />
                  </GridComponent>
                </div>
              </div>



            </form>
            <hr className="heading-divider" />
            <br />
            {<div className="columns is-mobile">
              <div className="column">
                <button className="button is-primary is-medium" onClick={onQuote}>Proceed to quote</button>
              </div>
            </div>}
          </div>
        </div>


      </React.Fragment>
    );
  }
}

SampledealerForm.propTypes = {};

SampledealerForm.defaultProps = {};
