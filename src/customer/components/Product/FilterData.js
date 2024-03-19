export const color = ["white", "Black", "Green"];
export const filters = [
  {
    id: "height",
    name: "Height",
    options: [
      { value: "10cm", label: "10cm" },
      { value: "15cm", label: "15cm" },
      { value: "20cm", label: "20cm" },
    ],
  },
];
export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      {
        value: "30-50",
        label: "30rs-50rs",
      },
      {
        value: "50-70",
        label: "50rs-70rs",
      },
    ],
  },
  {
    id:"Stock",
    name:"Availability",
    options : [
        {value:"in_stock",label:"In Stock"},
        {value:"out_of_stock",label:"Out od Stock"},
    ],
  }
];
