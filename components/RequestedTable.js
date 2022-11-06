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
  { Item: "Apple", Quantity: "10", Price: "0.0003 ETH", Green_Score: "Positive" },
  { Item: "Mango", Quantity: "15", Price: "0.00006 ETH", Green_Score: "Negative" },
  { Item: "Ginger", Quantity: "35", Price: "0.004 ETH", Green_Score: "Positive" },
];

const options = {
  filterType: 'checkbox',
  tableBodyHeight: "12rem",
  selectableRows:'none'

};

export default function Table(props) {
  return (
    <MUIDataTable
      title={"Requested Table"}
      data={data}
      columns={columns}
      options={options}
    /> )

}
