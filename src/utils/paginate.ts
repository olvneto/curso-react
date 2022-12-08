export default function paginate(
  array: any[],
  itemsPerPage: number,
  currentPage: number
) {
  return array.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
}
