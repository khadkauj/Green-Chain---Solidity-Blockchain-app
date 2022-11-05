import MUIDataTable from "mui-datatables";

const columns = [
  {
    name: "Name",
    label: "Name",
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
    name: "G_Score",
    label: "G score",
    options: {
      filter: true,
      sort: false,
    }
  },
];

const data = [
  { Name: "Joe James", Quantity: "Test Corp", Price: "Yonkers", G_Score: "NY" },
  { Name: "John Walsh", Quantity: "Test Corp", Price: "Hartford", G_Score: "CT" },
  { Name: "Bob Herm", Quantity: "Test Corp", Price: "Tampa", G_Score: "FL" },
  { Name: "James Houston", Quantity: "Test Corp", Price: "Dallas", G_Score: "TX" },
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
