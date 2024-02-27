import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  const options = [
    { value: "all", label: "All" },
    { value: "no-discount", label: "No Discount" },
    { value: "with-discount", label: "With Discount" },
  ];
  return (
    <TableOperations>
      <Filter filterField="discount" options={options} />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-des", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price (Low First)" },
          { value: "regularPrice-des", label: "Sort by price (High First)" },
          { value: "maxCapacity-asc", label: "Sort by capacity (Low First)" },
          { value: "maxCapacity-des", label: "Sort by capacity (High First)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
