import MUIDataTable from "mui-datatables";

const columns = [
  {
    name: "Item",
    label: "Item",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "Quantity",
    label: "Quantity",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "Price",
    label: "Price",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "Green_Score",
    label: "Green score",
    options: {
      filter: true,
      sort: false,
    }
  },
];

const data = [
  { Item: "Bike", Quantity: "25", Price: "0.0016 ETH", Green_Score: "Negative" },
  { Item: "Blender", Quantity: "30", Price: "0.0023 ETH", Green_Score: "Positive" },
  { Item: "E-car", Quantity: "15", Price: "0.012 ETH", Green_Score: "Positive" },
];

const options = {
  filterType: 'checkbox',
  tableBodyHeight: "12rem",
  selectableRows:'none'

};

export default function Table(props) {
  return (
    <MUIDataTable
      title={"Transported Table"}
      data={data}
      columns={columns}
      options={options}
    /> )

}
