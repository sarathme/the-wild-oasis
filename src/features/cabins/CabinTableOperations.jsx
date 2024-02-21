import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

function CabinTableOperations() {
  const options = [
    { value: "all", label: "All" },
    { value: "no-discount", label: "No Discount" },
    { value: "with-discount", label: "With Discount" },
  ];
  return (
    <TableOperations>
      <Filter filterField="discount" options={options} />
    </TableOperations>
  );
}

export default CabinTableOperations;
