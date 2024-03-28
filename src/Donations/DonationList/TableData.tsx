import { useState } from "react";
import TableDataTextForm from "./TableDataTextForm";
import TableDataCalendar from "./TableDataCalendar";
import TableDataType from "./TableDataType";
import TableDataQuantity from "./TableDataQuantity";

type Props = {
  donorName: string;
  type: string;
  quantity: number;
  date: Date;
  handleNameEdit: (newName: string, id: number) => void;
  id: number;
  handleDateEdit: (newDate: Date, id: number) => void;
  handleTypeEdit: (newType: string, id: number) => void;
  handleQuantityEdit: (quantity: number, id: number) => void
}

const TableData = ( { donorName, type, quantity, date, handleNameEdit, id, handleDateEdit, handleTypeEdit, handleQuantityEdit }: Props)  => {

  const [nameEditOpen, setNameEditOpen] = useState(false);
  const [dateEditClicked, setDateEditClicked] = useState(false);
  const [typeEditClicked, setTypeEditClicked] = useState(false);
  const [quantityEditClicked, setQuantityEditClicked] = useState(false);

  const [newName, setNewName] = useState("");
  const [startDate, setStartDate] = useState(date);
  const [newType, setNewType] = useState("");
  const [newQuantity, setNewQuantity] = useState(0)

  return (
    <>
      <TableDataTextForm newName={newName} setNewName={setNewName} setNameEditOpen={setNameEditOpen} nameEditOpen={nameEditOpen} handleNameEdit={handleNameEdit} id={id} donorName={donorName}/>

      <TableDataType type={type} newType={newType} setNewType={setNewType} handleTypeEdit={handleTypeEdit} typeEditClicked={typeEditClicked} setTypeEditClicked={setTypeEditClicked} id={id}/>

      <TableDataQuantity type={type} quantity={quantity} newQuantity={newQuantity} setNewQuantity={setNewQuantity} handleQuantityEdit={handleQuantityEdit} quantityEditClicked={quantityEditClicked} setQuantityEditClicked={setQuantityEditClicked} id={id}/>

      <TableDataCalendar startDate={startDate} setStartDate={setStartDate} setDateEditClicked={setDateEditClicked} dateEditClicked={dateEditClicked} id={id} handleDateEdit={handleDateEdit}/>
    </>
  )
}

export default TableData;